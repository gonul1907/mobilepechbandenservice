# Mobile Bandenpechservice — statische website

Dit is een eenvoudige, statische website-sjabloon voor een mobile bandenpechservice, gebaseerd op de structuur van een klassieke autotransport-site.

Bestanden:

- `index.html` — de single-page website (Nederlands)
- `styles.css` — basis responsive styles
- `script.js` — eenvoudige interactieve onderdelen (mobiel menu en formulier)

Snel starten:

1. Open `index.html` in je browser (dubbelklik of met "Open with").
2. Pas telefoonnummer, e-mail en teksten aan in `index.html`.

Aanbevelingen / next steps:

- Om de contactaanvragen echt te ontvangen: maak een backend endpoint of gebruik een service zoals Formspree/Netlify Forms.
- Voeg echte afbeeldingen en logo toe in de map `assets/` en verwijs ernaar.

 Als je wilt, kan ik:
 - Een kleine Node/Express backend toevoegen om formulierinzendingen te ontvangen en een e-mail te sturen.
 - Een GitHub Pages deploy workflow creëren.
 - De site uitbreiden met meerdere pagina's of CMS-integratie.

Running the site with the email backend
1. Copy `.env.example` to `.env` and fill in your SMTP credentials (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) and `CONTACT_TO`.
2. Install dependencies (if not already):

```powershell
cd 'C:\Users\gonul\OneDrive\Documenten\GitHub\mobilepechbandenservice'
npm install
```

3. Start the server (this serves the static files and handles `/api/contact`):

```powershell
npm start
```

The server will listen on http://localhost:3000 by default. The contact form on the site will POST to `/api/contact` and send an email using the configured SMTP settings.

Security note: keep your `.env` file private and don't commit it to Git.
 
 ---
 Note: quick automatic commit created on 2026-01-14 to trigger a push from the local repo.

