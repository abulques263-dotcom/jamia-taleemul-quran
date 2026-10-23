# Secure AI chatbot setup

The website is hosted on GitHub Pages (static hosting), so it cannot run the private AI API key itself. The chatbot backend in `api/chat.ts` is designed for Vercel Functions and uses the existing `@google/genai` dependency.

## What is included

- Chat UI sends the recent conversation to a server endpoint when `VITE_AI_API_URL` is set.
- Server-side Gemini calls use `GEMINI_API_KEY`; the key is never bundled into the frontend.
- Input length and message count are limited; CORS is restricted to the configured website origin.
- If the API endpoint is not configured or unavailable, the website assistant falls back to its existing verified quick answers.

## Deployment configuration

1. Import this GitHub repository into Vercel and deploy it. The included `vercel.json` configures the `api/chat.ts` function. Vercel should use the Vite build output for the frontend.
2. In Vercel Project Settings → Environment Variables, add:
   - `GEMINI_API_KEY`: a Gemini API key from Google AI Studio (server-side only).
   - `FRONTEND_ORIGIN`: `https://abulques263-dotcom.github.io`
   - Optional `GEMINI_MODEL`: defaults to `gemini-2.5-flash`.
3. After Vercel deploys, copy the exact function URL (usually `https://YOUR-VERCEL-DOMAIN/api/chat`).
4. In the GitHub repository, add a repository **Variable** (not a secret) named `VITE_AI_API_URL` containing that exact public endpoint URL. The Pages workflow reads this variable at build time.
5. Re-run the GitHub Pages workflow. If the variable is empty, the site intentionally remains in quick-answer fallback mode.

## Key safety notes

- Never put `GEMINI_API_KEY` in a `VITE_*` variable, source code, or a public GitHub file.
- Do not commit a real API key to this repository.
- AI responses can be wrong. Visitors should verify important religious, admissions, and donation information with the institution.
- API usage may be billable and subject to Google's limits and terms.
