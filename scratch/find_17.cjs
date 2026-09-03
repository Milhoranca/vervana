const https = require('https');
const fs = require('fs');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all occurrences of "17" in component contexts or objects with id: 17 or id: "17"
    const regex = /\{[^{}]*id:\s*17[^{}]*\}/g;
    const matches = data.match(regex);
    console.log("Matches by id 17:", matches);

    // Also search for "Page Transitions"
    const reg2 = /title:\s*[`"']Page Transitions #17[`"'][^}]*\}/g;
    console.log("Matches by title:", data.match(reg2));

    // Also search for any string containing "Page Transitions"
    const regex3 = /["'`][^"'`]*Page Transitions[^"'`]*["'`]/g;
    console.log("Matches with Page Transitions:", [...new Set(data.match(regex3))]);
  });
});
