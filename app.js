const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
app.listen(process.env.PORT || 3000);

require('./keep-alive');
