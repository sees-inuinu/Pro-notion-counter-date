import { Client } from "@notionhq/client";

// Notion クライアントの初期化（API トークンは環境変数から取得）
const notion = new Client({ auth: process.env.NOTION_TOKEN });

/**
 * APIルートハンドラー
 * Notionデータベースから「今日または未来」のイベントを取得し、
 * イベント開始日までの残り日数、または "today" を返す。
 *
 * @param {import('next').NextApiRequest} req - HTTPリクエストオブジェクト
 * @param {import('next').NextApiResponse} res - HTTPレスポンスオブジェクト
 * @returns {Promise<void>} - 非同期に実行されるAPIレスポンス処理
 */
export default async function handler(req, res) {
  try {
    /** @type {string} NotionデータベースID（環境変数から取得） */
    const databaseId = process.env.NOTION_DATABASE_ID;

    /**
     * Notionデータベースからページを取得
     * - フィルターは使わず、最大30件を「日付」昇順で取得
     * - 時刻を考慮せず、「日単位の比較」を行うためフィルターは使用しない
     */
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 30,
      sorts: [{ property: "日付", direction: "ascending" }],
    });

    // データベースに対象のページがなければ404エラー
    if (!response.results.length) {
      return res.status(404).json({ error: "No pages found" });
    }

    /**
     * 現在の日付（時間部分を00:00に丸める）を取得
     * @type {Date} 今日の日付（時刻無視）
     */
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    /**
     * 今日または未来の日付を持つ最初のページを見つける
     * - 時刻を無視して日付ベースで比較
     * - 当日のイベントも含める（たとえ時間が過ぎていても）
     */
    const page = response.results.find((page) => {
      /** @type {string | undefined} Notionの「日付」プロパティの開始日時 */
      const startStr = page.properties["日付"]?.date?.start;
      if (!startStr) return false;

      /** @type {Date} イベントの日付（時刻は無視） */
      const startDate = new Date(startStr);
      const startDateOnly = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      );

      // 今日または未来のイベントなら true
      return startDateOnly >= today;
    });

    // 今日以降のイベントが1件もなければ404
    if (!page) {
      return res.status(404).json({ error: "No valid future or today events found" });
    }

    /** @type {string} イベントの日付（ISO形式） */
    const startStr = page.properties["日付"].date.start;

    /** @type {string} イベントのタイトル */
    const title = page.properties["名前"].title[0]?.plain_text || "タイトルなし";

    // イベントの日付（時間を切り捨てた形）
    const eventDate = new Date(startStr);
    const eventDateOnly = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    );

    /**
     * 今日からイベント当日までの差分（日数）を算出
     * @type {number} 残り日数
     */
    const diffDays = Math.ceil(
      (eventDateOnly - today) / (1000 * 60 * 60 * 24)
    );

    /**
     * 結果のレスポンスオブジェクト
     * - 当日なら status: "today"
     * - 未来なら days に残り日数を含める
     * @type {{ status: string, title: string } | { days: number, title: string }}
     */
    const result =
      diffDays === 0
        ? { status: "today", title }
        : { days: diffDay+"days", title };

    // クライアントに200 OKと結果を返す
    res.status(200).json(result);
  } catch (error) {
    // エラーが発生した場合は500エラーを返し、ログに出力
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
