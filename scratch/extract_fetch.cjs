const https = require('https');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // search for supabase or api fetch or components list
    const regex = /(?:supabase|fetch\(|api\/|components\/)[^\s"'\`]+/gi;
    const matches = data.match(regex);
    console.log("Fetches/APIs:", matches ? [...new Set(matches)].slice(0, 30) : "none");
  });
});
