// Simple script using Jimp to turn near-white pixels transparent
const Jimp = require('jimp');
const input = 'images/mobilebandenservicelogo.jpg.jpeg';
const output = 'images/mobilebandenservicelogo.png';

(async () => {
  try {
    const img = await Jimp.read(input);
    img.rgba(true);
    const w = img.bitmap.width;
    const h = img.bitmap.height;

    // threshold: consider a pixel "white" if r,g,b are all >= threshold
    const threshold = 245; // tweak if needed

    img.scan(0, 0, w, h, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];

      if (r >= threshold && g >= threshold && b >= threshold) {
        // make transparent
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await img.writeAsync(output);
    console.log('Wrote', output);
  } catch (err) {
    console.error('Error processing image:', err);
    process.exit(1);
  }
})();
