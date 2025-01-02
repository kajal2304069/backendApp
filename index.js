require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/login', (req,res)=>{
  res.send('hello i am kajal')
})
app.get('/api/jokes', (req, res)=>{
 const jokes=[
  {id: 1,
title:'A jokes',
content:'this is a book'
},
{id: 2,
  title:'Another jokes',
  content:'this is a book'
  },
 ]
 res.send(jokes);

})
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${port}`);
});



