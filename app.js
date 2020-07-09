const fetch = require('node-fetch');

const config = {
  interval: 5 * 60 * 1000,
  url: 'https://theshrekbot.glitch.me/'
}

console.log(`Next ping in ${config.interval / 60 / 1000} min(s)`);

let i = 0;
setInterval(() => {
  fetch(config.url).then(() => console.log(`[${++i}] Pinged ${config.url}`));
}, config.interval);