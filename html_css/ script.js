function Read(){
    var name=document.getElementById("getname").value;
    var roll=document.getElementById("getroll").value;
    var adm=document.getElementById("getad").value;
    var age=document.getElementById("getage").value;
    var op=document.getElementById("district");
    var num=document.getElementById("getno").value;
    var dist=op.options[op.selectedIndex].text;
    
console.log(name)
console.log(roll)
console.log(adm)
console.log(dist)
console.log(num)
if(age>=18)
{
    alert("You are eligible");
    console.log("eligible")
}
else
{
    alert("not eligible");
    console.log("noteligible")

}
}

function Add(){
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    var x=parseInt(op1);
    var y=parseInt(op2);
    var opt=document.getElementById("operation");
    var op=opt.options[opt.selectedIndex].value;
   
    if(op=="o1")
    {
         ans=x+y;
    }
    else if(op=="o2")
    {
        ans=x-y;
    }
    else if(op=="o3")
    {
        ans=x*y;
    }
    else
    {
        ans=x/y;
    }
    document.getElementById("result").innerHTML="<table class='table'><tr><td><input type='text'>result is>"+ans+"</td></tr></table>";


    console.log(op1)
    console.log(op2)
    console.log(ans)
}
function Compare(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var num3=document.getElementById("num3").value;
    
    var x=parseInt(num1);
    var y=parseInt(num2);
    var z=parseInt(num3);
    var res=x>y?(x>z?x:z):(y>z?y:z);
    
   
    document.getElementById("result").innerHTML="< div table class='table'><tr><td><input type='text'>result is>"+res+"</td></tr></table></div>";
    
   

    
}
function Smallest(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var num3=document.getElementById("num3").value;
    
    var x=parseInt(num1);
    var y=parseInt(num2);
    var z=parseInt(num3);
    var s=x<y?(x<z?x:z):(y<z?y:z);
    document.getElementById("rlt").innerHTML=s;
    
    
}

