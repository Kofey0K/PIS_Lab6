const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url=="/is-91-018"){
        res.write("Minin Pavlo 2 Year IS-91");
    }
    else{
        res.write("Wrong login or password");
    }
    res.end()
})

server.listen( 3000, () => {
    console.log('Server has been started...')
})