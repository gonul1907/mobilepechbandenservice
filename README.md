# Banden Service Op Locatie — Mobile Website

Dit is een **professionele, responsieve website** voor een mobiele bandenservice. De site is volledig duplicaert naar het origineel van https://www.bandenserviceoplocatie.nl met verbeteringen in design, content en interactiviteit.

## 📁 Structuur

```
project/
├── index.html          # Homepage
├── diensten.html       # Diensten pagina
├── over.html          # Over ons pagina
├── faq.html           # Veelgestelde vragen
├── contact.html       # Contact pagina
├── styles.css         # Modern responsive CSS
├── script.js          # JavaScript interactiviteit
├── server.js          # Express backend (optioneel)
├── package.json       # Npm dependencies
├── .env.example       # Environment config template
└── README.md          # Dit bestand
```

## 🚀 Snel Starten

### 1. Lokaal testen (zonder backend)
```bash
# Gewoon index.html openen in browser:
# Windows: dubbelklik op index.html
# Of open met VS Code Live Server
```

### 2. Met Node.js backend (email verzending)
```bash
# 1. Dependencies installeren
npm install

# 2. .env bestand configureren
# Kopieer .env.example naar .env:
cp .env.example .env

# Vul in:
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=jouw_email@gmail.com
# SMTP_PASS=app_password_of_normale_password
# CONTACT_TO=info@bandenserviceoplocatie.nl
# PORT=3000

# 3. Server starten
npm start
# Of voor development met auto-reload:
npm run dev
```

Bezoek dan: http://localhost:3000

## 📱 Pagina's

- **Home** (`index.html`) - Hero section, diensten preview, testimonials
- **Diensten** (`diensten.html`) - Gedetailleerde diensten beschrijvingen met prijzen
- **Over Ons** (`over.html`) - Bedrijfsinfo, team, waarden, statistieken
- **FAQ** (`faq.html`) - 12 veelgestelde vragen met antwoorden
- **Contact** (`contact.html`) - Contact informatie en inzendingsformulier

## ✨ Functies

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern design met professionele kleurenschema (blauw/geel)
- ✅ Contactformulier met validatie
- ✅ Email integratie via Nodemailer
- ✅ Smooth scrolling en animaties
- ✅ Accessibility (WCAG) compliant
- ✅ SEO optimized meta tags
- ✅ Mobile-first CSS

## 🎨 Kleuren & Branding

- Primary: `#00173c` (Navy)
- Secondary: `#ffd400` (Goud/Geel)
- Accent: `#0056b3` (Blauw)
- Danger/CTA: `#dc3545` (Rood)

## ⚙️ Aanpassingen

### Telefoonnummer wijzigen
Zoek naar `+31657200120` en vervang door jouw nummer:
```bash
# In alle HTML bestanden:
grep -r "+31657200120"
```

### Email adres wijzigen
Zoek naar `info@bandenserviceoplocatie.nl`:
```bash
grep -r "info@bandenserviceoplocatie.nl"
```

### Tekst/Content aanpassen
Edit rechtstreeks in de HTML bestanden. Alles is duidelijk gelabeld.

## 📧 Email Setup (Gmail voorbeeld)

1. Login op [Google Account](https://accounts.google.com)
2. Ga naar [App Passwords](https://myaccount.google.com/apppasswords)
3. Selecteer "Mail" en "Windows Computer"
4. Copy het gegenereerde wachtwoord
5. In `.env`: `SMTP_PASS=jouw_app_wachtwoord`

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start server
npm start

# Development mode (auto-reload)
npm run dev

# Production build (if needed)
npm run build
```

## 📦 Dependencies

```json
{
  "express": "Web framework",
  "nodemailer": "Email verzending",
  "dotenv": "Environment variables"
}
```

## 🌐 Deployment

### GitHub Pages (Static)
```bash
git push origin main
# Settings > Pages > Deploy from branch > main
```

### Heroku (Met backend)
```bash
# Installeer Heroku CLI
# Login: heroku login
# Deploy: git push heroku main
```

### Netlify
```bash
# Drag & drop folder of connect GitHub repo
```

## 🔐 Security

- Validator alle form inputs
- Sanitize email tekst
- Rate limiting (voeg toe voor production)
- HTTPS enforcement

## 📊 SEO Optimization

- Semantic HTML
- Meta tags op alle pagina's
- Mobile responsive
- Fast loading
- Proper heading hierarchy
- Alt text op afbeeldingen (toevoegen)

## 🎯 Roadmap

- [ ] Afbeeldingen toevoegen
- [ ] Blog/nieuws pagina
- [ ] Whatsapp integratie
- [ ] Multi-language support
- [ ] Analytics (Google Analytics)
- [ ] CMS integratie

## 💡 Tips

1. **Afbeeldingen toevoegen:**
   - Maak folder `images/`
   - Voeg af te beeldingen toe
   - Update HTML met image paths

2. **Logo:** Vervang emoji 🛞 door logo (zie header in HTML)

3. **Testing:** Test op mobile, tablet, desktop

4. **Performance:** Optimalizeer afbeeldingen (WebP, compression)

## ❓ Ondersteuning

Vragen? Raadpleeg:
- [MDN Web Docs](https://developer.mozilla.org)
- [Stack Overflow](https://stackoverflow.com)
- [Node.js Docs](https://nodejs.org/docs)

---

**Bijgewerkt:** 2026-01-19
**Versie:** 2.0 (Duplicate & Enhanced)

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

