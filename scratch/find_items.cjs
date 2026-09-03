const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all objects with category "Page Transitions" or similar
    let start = 0;
    while ((idx = data.indexOf('Page Transitions', start)) !== -1) {
      console.log("Found occurrence at", idx);
      console.log(data.substring(Math.max(0, idx - 200), Math.min(data.length, idx + 400)));
      start = idx + 16;
    }
  });
});
