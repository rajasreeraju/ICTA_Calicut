const http=require("http");
const fs=require("fs");
const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("hello World!....");//write a responds to client
        res.end();
    }
    if(req.url=='/users'){
        res.write(JSON.stringify([1,3,5,7]));
        res.end();
    }
    if(req.url=='/friend'){
        res.readFile("friend.txt","utf8");
    }
});
server.listen(3000);
console.log("listening on port 3000....");