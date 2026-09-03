const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find Be=
    const idx = data.indexOf('Be.length===0');
    if (idx !== -1) {
      console.log("Context around Be.length===0:");
      console.log(data.substring(idx - 600, idx + 200));
    }
  });
});
