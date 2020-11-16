const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.sendFile('test.html', {root: __dirname })

})
function keepAlive(){
    server.listen(3010, ()=>{console.log("Server is Ready!")});
    
}
module.exports = keepAlive;
