const http=require('http')

const server=http.createServer((req,res)=>{
    // res.statusCode=200
    // res.setHeader('content-type','application/json');
    if(req.url==='/home'){
        res.statusCode=200
        res.write('home page');
    }
    else if (req.url==='/contact'){
        res.statusCode=200
        res.write('contact page ');
    }
    else {
        res.statusCode=404
        res.write('not fond');
    }

    res.end();

});

server.listen(3001,()=>{console.log('server runing...')});