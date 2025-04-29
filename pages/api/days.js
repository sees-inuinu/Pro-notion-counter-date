import { Client } from "@notionhq/client";

// Notion APIクライアントを初期化（環境変数からトークン取得）
const notion = new Client({ auth: process.env.NOTION_TOKEN });

/**
 * Next.js APIハンドラー
 * Notion データベースから「今日または未来」の最も近いイベントを取得し、
 * その日付が今日であれば "today" を、未来であれば残り日数を返す。
 *
 * @param {import('next').NextApiRequest} req - リクエストオブジェクト
 * @param {import('next').NextApiResponse} res - レスポンスオブジェクト
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    // Notion データベースから最大30件を取得（フィルターは使わず日付でソート）
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 30,
      sorts: [{ property: "日付", direction: "ascending" }],
    });

    if (!response.results.length) {
      return res.status(404).json({ error: "No pages found" });
    }

    // 今日の日付（時間を除く）を作成
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    /**
     * 有効な日付を持ち、「今日以降」のイベントだけを抽出
     * 時刻が過ぎていても「日付ベース」で比較する
     */
    const upcomingPages = response.results
      .filter((page) => {
        const dateProp = page.properties["日付"];
        const nameProp = page.properties["名前"];

        // 日付またはタイトルが欠けているページは除外
        if (!dateProp || !dateProp.date || !dateProp.date.start) return false;
        if (!nameProp || !nameProp.title || !nameProp.title.length) return false;

        // 日付を時刻なしの形にして today 以上かどうか確認
        const eventDate = new Date(dateProp.date.start);
        const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
        return eventDay >= today;
      })
      .sort((a, b) => {
        // 最も近いイベントを取得するため再ソート（念のため）
        const aDate = new Date(a.properties["日付"].date.start);
        const bDate = new Date(b.properties["日付"].date.start);
        return aDate.getTime() - bDate.getTime();
      });

    if (!upcomingPages.length) {
      return res.status(404).json({ error: "No upcoming or today events found" });
    }

    // 最も近いイベント
    const page = upcomingPages[0];
    const startStr = page.properties["日付"].date.start;
    const title = page.properties["名前"].title[0]?.plain_text || "タイトルなし";

    // 日付の差分を日単位で計算
    const eventDate = new Date(startStr);
    const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
    const diffDays = Math.ceil((eventDay - today) / (1000 * 60 * 60 * 24));

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
