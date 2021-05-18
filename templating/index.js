const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.listen(3000, () => {
    console.log('port 3000');
});