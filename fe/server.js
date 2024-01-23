const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server berjalan di http://localhost:' + PORT);
})