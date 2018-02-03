let kue        = require('kue');
let queue      = kue.createQueue();
let express    = require('express');
let ui         = require('kue-ui');
let app        = express();

ui.setup({
    apiURL: '/api', // IMPORTANT: specify the api url 
    baseURL: '/kue', // IMPORTANT: specify the base url 
    updateInterval: 5000 // Optional: Fetches new data every 5000 ms 
});
 
// Mount kue JSON api 
app.use('/api', kue.app);
// Mount UI 
app.use('/kue', ui.app);

app.listen(5000);

console.log('Listening on port 5000');
