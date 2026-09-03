const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find qS definition
    const idx = data.indexOf('function qS(');
    if (idx !== -1) {
      console.log("qS definition:", data.substring(idx, idx + 300));
    } else {
      const idx2 = data.indexOf('qS=');
      console.log("qS=: ", data.substring(idx2, idx2 + 300));
    }
  });
});
