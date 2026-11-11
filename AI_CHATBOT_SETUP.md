# Connect the website AI

The site includes a Vercel server endpoint at `/api/chat`. It calls Gemini using a private server-side key; the key is never sent to the public browser bundle.

1. Create or copy a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Open the [Jamia Vercel Environment Variables settings](https://vercel.com/abulques263-3307/jamia-taleemul-quran/settings/environment-variables).
3. Add `GEMINI_API_KEY` with your key as the value. Select the Production environment and save.
4. Redeploy the latest production deployment. The website checks `/api/chat` and enables AI replies automatically.

Never put the key in a `VITE_*` variable, source file, GitHub variable, or a public form. Vite variables are included in the public browser bundle. The optional `GEMINI_MODEL` server variable can select a Gemini model; by default the backend uses `gemini-2.5-flash`.

Until a key is configured, the assistant provides basic quick answers and shows a **Connect AI API** button with direct setup links.
