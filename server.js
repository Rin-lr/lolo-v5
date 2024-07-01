import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

//Mercury API POST req
app.post('/webparser', (req, res) => {
  const src = req.body.url;
  fetch('https://uptime-mercury-api.azurewebsites.net/webparser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: src
    })
  })
  .then(apiResponse => apiResponse.json())
  .then(data => res.json(data.content))
  .catch(error => res.status(500).json({ error: error.message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Finds html
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname }); 
});

