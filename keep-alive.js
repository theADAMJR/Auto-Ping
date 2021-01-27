const fetch = require('node-fetch');

setInterval(async() => {
  await fetch('https://lit-everglades-99028.herokuapp.com/');
  console.log('Kept self alive');
}, 5 * 60 * 1000);
