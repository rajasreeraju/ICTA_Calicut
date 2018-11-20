var fs=require('fs');
fs.writeFile("friends.txt","these are my friends",function(err){
    if(err) throw err;
    console.log(' justReplaced');
})