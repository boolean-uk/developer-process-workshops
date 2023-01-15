const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

app.use(cors());

const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

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
    const closedDay = daysOfWeek.filter(
      (el) => !Object.keys(openingHours.days).includes(el)
    );

    res.json({ name, address, openingHours, closedDay });
  });
});

app.listen(3001, () => {
  console.log('Backend service running on port 3001');
});
