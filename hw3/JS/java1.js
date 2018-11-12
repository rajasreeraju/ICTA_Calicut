var arr=[3,7,4,3,6,8,9,1,2,23,45,12];
var a=arr[0];
var flag=0;
document.write(arr);
document.write("</br>");
document.write("The first element is ");
document.write(a);
document.write("</br>");
for( var i=2;i<a/2;i++)
{
    if(a%i==0)
    {
        flag=1;
        break;
    }    
}
if(flag==0)
{
    document.write(a+" The element is prime");
}
else
{
    alert("element is not prime");
}