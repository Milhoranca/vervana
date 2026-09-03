const https = require('https');
const fs = require('fs');

https.get('https://vancelib.vercel.app/assets/index-DoDksShr.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Search for components array or category data
    const idx = data.indexOf('Page Transitions');
    if (idx !== -1) {
      console.log("Context around Page Transitions:");
      console.log(data.substring(Math.max(0, idx - 500), idx + 1500));
    } else {
      console.log("Not found");
    }
  });
});
