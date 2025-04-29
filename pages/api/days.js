import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

/**
 * APIハンドラー - Notionデータベースから今日以降の最も近いイベントを取得し、
 * その日付までの残り日数または "today" を返す。
 *
 * @param {import('next').NextApiRequest} req - リクエストオブジェクト
 * @param {import('next').NextApiResponse} res - レスポンスオブジェクト
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    // 今日以降の日付にフィルターして、昇順で1件取得
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
      sorts: [{ property: "日付", direction: "ascending" }],
      filter: {
        property: "日付",
        date: {
          on_or_after: new Date().toISOString().split("T")[0] // "YYYY-MM-DD"形式
        }
      }
    });

    // データが見つからなかった場合は 404 を返す
    if (!response.results.length) {
      return res.status(404).json({ error: "No upcoming pages found" });
    }

    const page = response.results[0];

    // Notionから日付とタイトルを取得
    const startDate = page.properties["日付"].date.start;
    const title = page.properties["名前"].title[0]?.plain_text || "タイトルなし";

    // 日付の差分計算（時間を無視して日付のみで比較）
    const start = new Date(startDate);
    const now = new Date();

    const startOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const nowOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const diffDays = Math.ceil((startOnly - nowOnly) / (1000 * 60 * 60 * 24));

    // レスポンス整形：0日の場合は status: "today"、それ以外は days に残り日数をセット
    const result =
      diffDays === 0
        ? { status: "today", title }
        : { days: diffDays, title };

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
