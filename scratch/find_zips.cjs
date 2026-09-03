const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let start = 0;
    while ((idx = data.indexOf('.zip', start)) !== -1) {
      console.log("Found .zip at", idx);
      console.log(data.substring(Math.max(0, idx - 100), Math.min(data.length, idx + 100)));
      start = idx + 4;
    }
  });
});
