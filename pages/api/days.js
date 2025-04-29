import { Client } from "@notionhq/client";

// Notion APIクライアントを初期化
// ここで環境変数から取得したトークン（`NOTION_TOKEN`）を使って認証します。
const notion = new Client({ auth: process.env.NOTION_TOKEN });

/**
 * Next.js APIハンドラー
 * Notionデータベースから「未来の日付」イベントを取得し、その日付までの残り日数を返す
 *
 * @param {import('next').NextApiRequest} req - HTTPリクエストオブジェクト
 * @param {import('next').NextApiResponse} res - HTTPレスポンスオブジェクト
 * @returns {Promise<void>} - 非同期に実行されるAPIレスポンス処理
 */
export default async function handler(req, res) {
  try {
    /** 
     * NotionデータベースのIDを環境変数から取得
     * `NOTION_DATABASE_ID` は環境変数で設定されたデータベースIDを指します
     */
    const databaseId = process.env.NOTION_DATABASE_ID;

    /**
     * NotionのAPIを使ってデータベースをクエリ
     * - ページ数は1件だけ取得
     * - 「日付」プロパティを昇順（ascending）で並べ替え
     * - 「日付」が現在の日付より後のデータをフィルタリング
     */
    const response = await notion.databases.query({
      database_id: databaseId, // データベースID
      page_size: 1, // 取得するページ数（最大1件）
      sorts: [{ property: "日付", direction: "ascending" }], // 日付順に並べ替え
      filter: {
        property: "日付", // 「日付」プロパティを使ってフィルタリング
        date: {
          after: new Date().toISOString() // 今日以降の日付を取得
        }
      }
    });

    // 結果がない場合、404エラーを返す
    if (!response.results.length) {
      return res.status(404).json({ error: "No future pages found" });
    }

    /**
     * 最初のイベント（未来の日付を持つ）を取得
     * `response.results[0]` は最も近い未来の日付を持つページ
     */
    const page = response.results[0];
    
    /**
     * ページの「日付」プロパティから開始日（startDate）を取得
     * startDate はISO形式の日付文字列
     */
    const startDate = page.properties["日付"].date.start;

    /**
     * ページの「名前」プロパティからタイトルを取得
     * タイトルが空の場合は「タイトルなし」を返す
     */
    const title = page.properties["名前"].title[0]?.plain_text || "タイトルなし";

    // startDate（未来の日付）を Date オブジェクトに変換
    const start = new Date(startDate);
    const now = new Date(); // 現在の日時を取得

    // 現在時刻と未来の日付（start）との差を日単位で計算
    // (start - now) でミリ秒単位の差を計算し、それを日数に変換
    const diffDays = Math.ceil((start - now) / (1000 * 60 * 60 * 24));

    // 残り日数が0未満の場合は0に設定（過去のイベントはカウントしない）
    const remainingDays = diffDays > 0 ? diffDays : 0;

    // クライアントに結果を返す
    res.status(200).json({ days: remainingDays+"days", title });
  } catch (error) {
    // エラーが発生した場合、エラーメッセージと500エラーを返す
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
