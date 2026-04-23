const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send('Hello World API chal rahi hai');
});
app.listen(3000, () => {
console.log('Server running on port 3000');
});