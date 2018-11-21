// const express=require('express');
// var app=new express();
// app.get('/',function(req,res){
//     res.send("Helloo from my library app");
// });
// app.listen(3000,function(){
//     console.log("listening to port 3000");
// });//just express used 


// const express=require('express');
// const chalk=require('chalk');
// var app=new express();
// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/views/index.html");
// });
// app.listen(3000,function(){
//     console.log("listening to port"+chalk.green('3000'));
// });//chalk used to color port

// const express=require('express');
// const chalk=require('chalk');
// const path=require("path");
// var app=new express();
// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"/views/index.html"));
// });
// app.listen(3000,function(){
//     console.log("listening to port"+chalk.green('3000'));
// });//path module is used to concatinate a folder and file

const express=require('express');
const chalk=require('chalk');
const path=require("path");
var app=new express();
const booksRouter=express.Router();
const authorRouter=express.Router();
app.use('/books',booksRouter);
app.use('/authors',authorRouter);

// app.use(express.static(path.join(__dirname,"/public")))
// app.set('views','./src/view');
// app.set('view engine','ejs');
// app.get('/',function(req,res){
//     res.render('index')
// });
// app.listen(3000,function(){
//     console.log("listening to port"+chalk.green('3000'));
// });//path module is used to concatinate a folder and file

app.use(express.static(path.join(__dirname,"/public")))
app.set('views','./src/view');
app.set('view engine','ejs');
booksRouter.route('/')
    .get((req,res)=>{
        res.render("books",
        {
            books:[{title:"God Of Small Things",author:"Arundhathi Roy",type:"Debut Novel"},
            {title:"Your Dreams Are Mine Now",author:"Ravinder Singh",type:"Love Story"},
            {title:"MyStrory",author:"Kamala Das",type:"Auto biograpy"},
            {title:"Half Girlfriend",author:"Chethan Bhagath",type:"Love Story"},
            {title:"Harry Potter",author:"G K Rowling",type:"Fiction"}],nav:[{link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'},
            {link:'/aboutus',title:'ABOUT Us'},
            {link:'/contactus',title:'CONTACT US'}],
            title:"Books"
        });
    });
booksRouter.route('/single')
    .get((req,res)=>{
        res.send("Helloo Single book");
    }); 
authorRouter.route('/')
    .get((req,res)=>{
        res.send("Helloo Authors");
    });
authorRouter.route('/single')
.get((req,res)=>{
    res.send("Helloo Single Authors");
});
app.get('/',function(req,res){
    res.render('index',{
        nav:[{link:'/books',title:'Books'},
        {link:'/authors',title:'Authors'},
        {link:'/aboutus',title:'ABOUT Us'},
        {link:'/contactus',title:'CONTACT US'}],
        title:"Library"});
});
app.listen(3000,function(){
    console.log("listening to port"+chalk.green('3000'));
});//path module is used to concatinate a folder and file

