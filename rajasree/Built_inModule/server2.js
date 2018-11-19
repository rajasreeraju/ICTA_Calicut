const http=require("http");
const server=http.createServer(function(req,res){
    res.write("hello World!....");//write a responds to client
    res.end();
});
server.listen(3000);
console.log("listening on port 3000....");