const express = require('express');
const request = require('request');
const app = express();

app.get('/place/:id', (req, res) => {
  const placeId = req.params.id;
  const apiUrl = `https://storage.googleapis.com/coding-session-rest-api/${placeId}`;

  request(apiUrl, { json: true }, (err, apiRes, body) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch data from upstream API' });
      return;
    }

    const name = body.displayed_what;
    const address = body.displayed_where;
    const openingHours = body.opening_hours;
    res.json({ name, address, openingHours });
  });
});

app.listen(3000, () => {
  console.log('Backend service running on port 3000');
});
