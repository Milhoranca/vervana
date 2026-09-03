const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const dynamicImports = data.match(/assets\/[a-zA-Z0-9_-]+\.js/g);
    console.log("Dynamic imports:", dynamicImports ? [...new Set(dynamicImports)] : "none");
  });
});
