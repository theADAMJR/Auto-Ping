const fetch = require('node-fetch');

const config = {
  interval: 5 * 60 * 1000,
  urls: [
    'https://1pg.glitch.me/',
    'https://theshrekbot.glitch.me'
  ]
}

console.log(`Next ping in ${config.interval / 60 / 1000} min(s)`);

let pings = 0;
setInterval(() => {
  pings++;
  for (const url of config.urls)
    fetch(config.url).then(() => console.log(`[${pings}] Pinged ${config.url}`));
}, config.interval);
