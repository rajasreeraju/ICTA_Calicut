const http=require("http");
const fs=require("fs");
const server=http.createServer(function(req,res)
{
    if(req.url=='/'){
        res.write("hellloo World......");
        res.end();
    }
    if(req.url=='/users'){
        res.write("these are the users");
        res.end();
    }
     if(req.url=='/friends'){
         var data=fs.readFileSync("friends.txt","utf8");
         res.write(data);
         res.end();
    }
})
server.listen(3000);
console.log("listening to host 3000");
// ,function(err,data){
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// })
// const server=http.createServer(function(req,data){
//     if(req.url=='/'){
//         data.write("hello World!....");//write a responds to client
//         data.end();
//     }
//     if(req.url=='/friends'){
//         data.readFile("friends.txt","utf8");
//     }
// });
// server.listen(3000);
// console.log("listening on port 3000....");
