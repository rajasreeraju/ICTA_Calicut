function Read(){
    var name=document.getElementById("getname").value;
    var roll=document.getElementById("getroll").value;
    var adm=document.getElementById("getad").value;
    var age=document.getElementById("getage").value;
console.log(name)
console.log(roll)
console.log(adm)
if(age>=18)
{
    alert("You are eligible");
    console.log("eligible");
}
else{
    alert("not eligible");
    console.log("noteligible");

}
}