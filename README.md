# Notion Counter Widget

This Next.js widget fetches a date and title from a Notion database and displays how many days have passed.

## Setup

1. Duplicate `.env.local.sample` as `.env.local` and fill in your values.
2. Ensure your Notion database has:
   - A title property named **名前**
   - A date property named **日付**
3. Run the app with `npm run dev`.

## Embed

Deploy to Vercel and embed the public URL in Notion using `/embed`.