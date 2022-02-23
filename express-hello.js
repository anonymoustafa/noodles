const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
  res.send('Hi!'); 
}); 

app.get('/contact-us', (req, res) => {
  res.send('Contact us'); 
}); 

app.get('/home', (req, res) => {
  res.links({localhost:3000/sign-out});
}); 

app.get('/sign-in', (req, res) => {
  res.send('sign in'); 
}); 

app.get('/downloads', (req, res) => {
  res.send('downloads'); 
}); 

app.get('/sign-out', () => {
        
     server.close(() => {
       console.log('Process terminated')
  });

}); 

const server = app.listen(3000, () => console.log('Server ready')); 

