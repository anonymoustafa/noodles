const axios =require('axios');
axios.get('/users')
  .then(res => {
    console.log(res.data);
  });

