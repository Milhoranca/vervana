const https = require('https');
const fs = require('fs');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find where the components array is defined
    const ksIdx = data.indexOf(',KS=``;');
    // Look backwards for the array start
    const arraySnippet = data.substring(ksIdx - 50000, ksIdx);
    const itemIdx = arraySnippet.lastIndexOf('codegrid-detroit-paris');
    if (itemIdx !== -1) {
      console.log("Found codegrid-detroit-paris in array!");
      const itemContext = arraySnippet.substring(Math.max(0, itemIdx - 500), Math.min(arraySnippet.length, itemIdx + 5000));
      fs.writeFileSync('scratch/component17_data.txt', itemContext);
      console.log("Written to scratch/component17_data.txt");
    } else {
      console.log("codegrid-detroit-paris not found in snippet, searching entire data");
      const fullIdx = data.indexOf('codegrid-detroit-paris');
      if (fullIdx !== -1) {
        fs.writeFileSync('scratch/component17_data.txt', data.substring(fullIdx - 1000, fullIdx + 15000));
        console.log("Written full match to scratch/component17_data.txt");
      }
    }
  });
});
