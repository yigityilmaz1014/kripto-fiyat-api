const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    res.send(`<h1>Anlik Bitcoin Fiyati: ${response.data.price}</h1>`);
});

app.listen(3000, () => console.log('Sunucu http://localhost:3000 adresinde calisiyor!'));