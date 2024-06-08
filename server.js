//Bypass fetching problem. CORS policy.
const express = require('express');
const request = require('request');

const app = express();

app.use('/proxy', (req, res) => {
  const url = "https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss" + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
