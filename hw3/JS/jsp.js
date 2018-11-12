var str="J,A,V,A,S,C,R,I,P,T";
var arr=str.split(",");
var l=arr.length;
console.log(l);
for(var i=0;i<l;i++)
{
    for(var j=0;j<=i;j++)
    {
        document.write(arr[j]);
    }
    document.write("</br>");
    
}