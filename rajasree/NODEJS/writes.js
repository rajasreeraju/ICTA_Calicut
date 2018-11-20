var fs=require('fs');
fs.writeFileSync("friends.txt","these are my best friends",function(err){
    if(err) throw err;
    console.log('Replaced');
})