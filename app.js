const weather = require('./weather.js');
// Join values passed as args and replace all spaces with underscores;
const query = process.argv.slice(2).join(' ');
// .replace(' ', '_');
weather.get(query);
