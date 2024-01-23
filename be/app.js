const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: ['http://localhost:3001', 'https://fe-test-cookie.hidayahapriliansyah.com'],
  /**
   * jangan pakai / di akhir ya sayang kalau gak akan muncul error
   * localhost/:1 Access to fetch at 'http://localhost:3000/cookie' from origin 'http://localhost:3001' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'http://localhost:3001/' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
   */
  credentials: true,
  // aneh nya kalau gak pakai credential true juga tetep jalan loh
}));
app.use(cookieParser());

app.get('/hallo', (req, res) => {
  res.json({
    message: 'ok'
  });
});

app.get('/cookie', (req, res) => {
  res.header("Access-Control-Allow-Credentials: true");
  res.cookie('cookieName', 'cookieValue', { httpOnly: true });
  res.json({
    message: 'ok cookie',
  });
});

app.get('/check-cookie', (req, res) => {
  const cookie = req.cookies;
  res.json({
    sentCookie: cookie,
  })
})

const PORT = 3000;
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:' + PORT);
})