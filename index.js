const express = require('express');
const app = express();
const port = process.env.PORT || 1369;
app.get('/',(req,res)=> {res.send('h')});
app.get('/load-picture',(req,res)=> {
        res.set({'Content-Type': 'image/png'});
        res.sendfile('./pic.jpg')});
app.listen(port);
