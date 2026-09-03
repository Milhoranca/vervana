const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // search for zip or component 17 or detroit
    const regex = /["'`][^"'`]*(?:17|zip|detroit|paris|transition)[^"'`]*["'`]/gi;
    const matches = data.match(regex);
    console.log("Found matches:", matches ? matches.filter(m => m.includes('17') || m.includes('zip') || m.includes('detroit') || m.includes('paris')).slice(0, 20) : "none");
  });
});
