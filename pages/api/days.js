import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
      sorts: [{ property: "日付", direction: "ascending" }],
    });

    // データベースに結果がない場合
    if (!response.results.length) {
      return res.status(404).json({ error: "No pages found" });
    }

    const page = response.results[0];
    const startDate = page.properties["日付"].date.start;
    const title = page.properties["名前"].title[0]?.plain_text || "タイトルなし";

    const start = new Date(startDate);
    const now = new Date();

    // 「未来まであと何日」＝ (start - now)
    const diffDays = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
    const remainingDays = diffDays > 0 ? diffDays : 0;

    res.status(200).json({ days: remainingDays, title });
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
