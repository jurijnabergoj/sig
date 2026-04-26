
Production Readiness Analysis — Ustanova Igor Grdina Website
🔴 Critical Bugs (Fix First)
1. ScrollToTop is never mounted
ScrollToTop.tsx exists but is never imported or placed in App.tsx. This is the direct cause of the scroll position bug you described. Fix: add <ScrollToTop /> inside <BrowserRouter> before <Navigation />.

2. --terciary CSS variable uses hex instead of HSL
index.css:31 defines --terciary: #F5F0ED but the file header explicitly states "All colors MUST be HSL." The Tailwind config (tailwind.config.ts:31-33) uses var(--terciary) without hsl() wrapping (unlike every other color), which is a deliberate workaround but inconsistent. Should be converted to HSL and the Tailwind config updated to match all other colors.

3. Spectral SC font is never loaded
Both index.css:87 and tailwind.config.ts:72 reference Spectral SC as the primary display/heading font, but there is no Google Fonts <link> in index.html and no @import in any CSS file. The site silently falls back to system fonts — headings don't look as designed.

4. Contact form does nothing
Contact.tsx:14-17 — handleSubmit fires a success toast without sending any data anywhere. This is a dead end for production.

🟡 Functionality Issues
5. Article prev/next navigation is fragile
NewsArticle.tsx:66-81 — Uses parseInt(article.id) - 1 and compares against hardcoded "1" and newsArticles.length.toString(). This breaks the moment article IDs become non-sequential strings (slugs, UUIDs, etc.) from a real CMS.

6. dangerouslySetInnerHTML without sanitization
NewsArticle.tsx:60-62 — When connected to a real CMS/backend, unsanitized HTML is a XSS vulnerability. Needs a sanitizer library (e.g., DOMPurify) before going live.

7. Language defaults to English
LanguageContext.tsx:157 — For a Slovenian institution's website, the default should be "si" (Slovenian), with English as the alternate.

8. Language code is non-standard
The app uses "si" for Slovenian but the ISO 639-1 code is "sl". The unused i18n.js file correctly uses "sl". This creates a discrepancy if/when the i18next setup is integrated.

🟡 Incomplete Internationalization
Multiple components have hardcoded English strings that won't change when switching to Slovenian:

AboutInstitution.tsx — The entire content is hardcoded English ("Our Heritage", "Our Mission", "Our Values", all body text). The t() hook is imported but never called.
Footer.tsx — "Quick Links", "Contact", nav item labels, and institution description are hardcoded English.
NewsArticle.tsx — "Back to News", "Previous Article", "Next Article", "Article Not Found", "Return to News" are all hardcoded.
NotFound.tsx — "Oops! Page not found", "Return to Home" are hardcoded.
newsData.ts — All article titles, descriptions, and content are English-only. There's no Slovenian version of the news articles.
🟡 Dead / Misplaced Code
src/i18n.js — Sets up a full i18next configuration (with i18next-browser-languagedetector, react-i18next) but is never imported or used anywhere. The app uses LanguageContext instead. The packages may not even be installed.
src/locales/ — The en/translation.json and sl/translation.json files are unused dead code.
src/components/ui/vite.config.ts — A Vite config file is misplaced inside the UI components folder.
src/App.css — Contains Vite boilerplate CSS (spinning logo animations, .read-the-docs, etc.) that has nothing to do with this project. It's not imported anywhere but is confusing clutter.
🟡 CSS / Visual Issues
Font typo: index.css:87 lists 'Montseratt' (misspelled — should be 'Montserrat').
Logo inconsistency: Navigation uses <img src="/images/ig_logo.png"> (actual image), while the Footer uses a hardcoded text box with "UIG". These should match.
Navigation logo missing alt attribute: Navigation.tsx:26 — accessibility issue.
PageHeader is visually tight: py-6 gives very little vertical breathing room, especially for the hero section of each page.
Placeholder image for founder: AboutFounder.tsx:19 uses a random Unsplash man photo, not Igor Grdina.
Duplicate news cover images: Articles 1 and 3 both use the same Unsplash photo URL.
🔵 Production Readiness Gaps
Area	Current State	What's Needed
Content	All mock data	Real content from client (CMS or static)
Contact details	info@ustanovaigorgrdina.edu, +123 456 7890, 123 School Street	Real address, phone, email
Map	Grey placeholder box	Embedded Google/OpenStreetMap iframe
Contact form	Fake toast	Email service (Formspree, EmailJS, or backend API)
SEO	No <title>, no meta description, no Open Graph	index.html <head> updates + per-page titles
Error boundaries	None	Wrap routes in React ErrorBoundary
Images	Unsplash placeholders	Real institutional photos
Favicon	Likely Vite default	Institution logo/favicon
Suggested Implementation Order
Phase 1 — Fix Bugs (Quick wins, ~1-2 hrs)
Mount <ScrollToTop /> in App.tsx
Load Spectral SC via Google Fonts in index.html
Fix --terciary to proper HSL in index.css
Delete dead files: App.css content, i18n.js, src/locales/, misplaced vite.config.ts
Add alt attribute to logo in Navigation
Phase 2 — Complete i18n (~2-3 hrs)
Translate AboutInstitution.tsx to use t() (add keys to LanguageContext)
Translate Footer.tsx
Translate hardcoded strings in NewsArticle.tsx and NotFound.tsx
Change default language to Slovenian
Standardize language code to "sl"
Phase 3 — Real Content (~depends on client)
Replace all mock news articles with real Slovenian content
Replace Unsplash images with real institutional photos
Update contact details (address, phone, email)
Add embedded map to Contact page
Connect contact form to a real email service
Fix article prev/next navigation to work with real IDs/slugs
Phase 4 — Polish & Production (~2-3 hrs)
Add page <title> tags and meta descriptions
Sanitize dangerouslySetInnerHTML with DOMPurify
Add favicon
Align Footer logo with Navigation logo
Review PageHeader padding and visual hierarchy