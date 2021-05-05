const http = require('http')
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/is-91-018"){
        
        res.write("<h2>Мінін</h2><h2>Павло</h2><h2>2 курс</h2><h2>ІС-91</h2>");
    }
})

server.listen( 3001, () => {
    
    console.log('Server has been started...')
})