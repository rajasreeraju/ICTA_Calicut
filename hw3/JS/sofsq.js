var arr=[8,5,6,7];
var l=arr.length;
var result=0;
var ar=0;
document.write("the array is "+arr);
document.write("</br>");
for(var i=0;i<l;i++)
{
    ar=(arr[i]*arr[i]);
    result=result+ar;
}
document.write(result);
