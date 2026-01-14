// Simple Express server to serve static files and handle contact form via SMTP (nodemailer)
require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Basic health route
app.get('/ping', (req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  const { name, contact, location, message } = req.body || {};
  if (!contact || !location) {
    return res.status(400).json({ error: 'Vul minimaal contact en locatie in.' });
  }

  // Prepare email
  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  if (!to) {
    return res.status(500).json({ error: 'Geen ontvanger geconfigureerd op de server. Stel CONTACT_TO in.' });
  }

  // Create transporter
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      } : undefined
    });
  } catch (err) {
    console.error('Transport error', err);
    return res.status(500).json({ error: 'Fout bij configuratie e-mailtransport.' });
  }

  const subject = `Nieuwe hulpaanvraag — ${name || 'Onbekend'}`;
  const html = `
    <p><strong>Naam:</strong> ${name || '-'} </p>
    <p><strong>Contact:</strong> ${contact} </p>
    <p><strong>Locatie:</strong> ${location} </p>
    <p><strong>Bericht:</strong><br/> ${message || '-'} </p>
    <hr/>
    <p>Verzonden vanaf Mobile Bandenpechservice site.</p>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.FROM_ADDRESS || process.env.SMTP_USER,
      to,
      subject,
      html
    });
    console.log('Email sent', info.messageId);
    return res.json({ ok: true, message: 'Bericht succesvol verzonden.' });
  } catch (err) {
    console.error('Send error', err);
    return res.status(500).json({ error: 'Kon e-mail niet verzenden. Controleer serverlogs of SMTP-instellingen.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
