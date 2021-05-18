const express = require('express');

const app = express();

app.get('/dogs', (req, res) => {
    res.send('bark!!!!');
})


app.post('/dogs', (req, res) => {
    res.send('post request send');
})
app.listen(3000, () => {
    console.log('port 3000');
});