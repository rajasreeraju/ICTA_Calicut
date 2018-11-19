const os=require("os");
var tos=os.totalmem();
var fos=os.freemem();
console.log(`Total memory:${tos}`);
console.log(`Free Memory:${fos}`);