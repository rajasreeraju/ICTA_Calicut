var line=5;
var str="";
for(var i=1;i<line;i++)
{
    for(var j=1;j<i;j++)
    {
         str += "*";
        document.write(str);

        document.write("</br>");
    }
}
console.log(str);