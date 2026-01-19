const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false
});

async function scrapeWebsite() {
  try {
    console.log('Scraping website...');
    
    const config = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      httpsAgent: agent
    };

    const response = await axios.get('https://www.bandenserviceoplocatie.nl/', config);
    const html = response.data;
    
    // Save raw HTML
    fs.writeFileSync(path.join(__dirname, '../scraped-content.html'), html);
    console.log('Website content saved to scraped-content.html');
    
    // Parse and extract key info
    const $ = cheerio.load(html);
    
    console.log('\n=== WEBSITE STRUCTURE ===');
    console.log('Title:', $('title').text());
    console.log('Meta Description:', $('meta[name="description"]').attr('content'));
    console.log('\n=== IMAGES ===');
    
    const images = [];
    $('img').each((i, elem) => {
      const src = $(elem).attr('src');
      if (src) {
        console.log(src);
        images.push(src);
      }
    });
    
    console.log('\n=== LINKS ===');
    $('a').each((i, elem) => {
      const href = $(elem).attr('href');
      const text = $(elem).text().trim();
      if (href && text) {
        console.log(`${text}: ${href}`);
      }
    });
    
  } catch (error) {
    console.error('Error scraping website:', error.message);
  }
}

scrapeWebsite();
