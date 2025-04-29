import { Client } from "@notionhq/client";

// Notion API クライアントを初期化（認証トークンは環境変数から取得）
const notion = new Client({ auth: process.env.NOTION_TOKEN });

/**
 * Next.js APIルートハンドラー
 * Notion データベースから「今日または未来」のイベントを取得し、
 * 残り日数または「today」というステータスをレスポンスとして返す。
 *
 * @param {import('next').NextApiRequest} req - リクエストオブジェクト
 * @param {import('next').NextApiResponse} res - レスポンスオブジェクト
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    /**
     * Notion データベースから「今日以降（今日を含む）」の日付を持つページを取得。
     * - page_size: 10 にして複数候補を取得（時間が過ぎた「今日」も拾うため）
     * - date.on_or_after: 今日の日付（時刻なし）でフィルター
     */
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 10,
      sorts: [{ property: "日付", direction: "ascending" }],
      filter: {
        property: "日付",
        date: {
          on_or_after: new Date().toISOString().split("T")[0] // "YYYY-MM-DD"形式のみ
        }
      }
    });

    // イベントが1件も見つからなければ 404 エラーを返す
    if (!response.results.length) {
      return res.status(404).json({ error: "No upcoming pages found" });
    }

    // 現在の日付（時間を切り捨てて日単位にする）
    const now = new Date();
    const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    /**
     * 取得したページから「今日または未来の日付」を持つ最初のページを選ぶ。
     * 時間が過ぎている「今日」のイベントも対象になるよう、日付のみで比較。
     */
    const page = response.results.find((page) => {
      const startDateStr = page.properties["日付"]?.date?.start;
      if (!startDateStr) return false;

      const start = new Date(startDateStr);
      const startDateOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());

      // 今日以降のもの（時間にかかわらず）
      return startDateOnly >= nowDateOnly;
    });

    // 今日も未来も該当しない場合は明確に404を返す
    if (!page) {
      return res.status(404).json({ error: "No valid future or today events found" });
    }

    // イベントの開始日とタイトルを取得
    const startDate = page.properties["日付"].date.start;
    const title = page.properties["名前"].title[0]?.plain_text || "タイトルなし";

    // 開始日を日単位に変換（時間を無視）
    const start = new Date(startDate);
    const startDateOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());

    /**
     * 日数の差分を計算（切り上げ）
     * - diffDays === 0 の場合は「today」としてレスポンスに含める
     */
    const diffDays = Math.ceil((startDateOnly - nowDateOnly) / (1000 * 60 * 60 * 24));

    // レスポンスオブジェクトの構築
    const result =
      diffDays === 0
        ? { status: "today", title } // 当日
        : { days: diffDays + "days", title }; // 未来

    // 結果をクライアントに返す
    res.status(200).json(result);
  } catch (error) {
    // 予期しないエラーが発生した場合はログを出力し、500を返す
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
