const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('KS=');
    console.log("KS definition:", data.substring(idx - 100, idx + 200));
  });
});
