function Compare(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    
    var x=parseInt(num1);
    var y=parseInt(num2);
    if(x<y){
        res=y;
    }
    else{
        res=x;
    }
    document.write("Largest number is "+res);
}