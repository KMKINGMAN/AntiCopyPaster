const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('bot is alive!')
})
function kingman(){
  server.listen(3000, ()=>{
      console.log(`
_______________________________

✅ .===> Host is Ready
_______________________________
      `)
  });
}
module.exports = kingman;