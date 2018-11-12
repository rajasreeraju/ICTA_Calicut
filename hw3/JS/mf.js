var arr=['a',8,9,'o','a',1,3,4,6,7,'a','c','a','g','a'];
var mf=1;
var m=0;
var value;
for(var i=0;i<arr.length;i++)
{
    for(var j=i;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            m++;
        }
        if(mf<m)
            {
                mf=m;
                value=arr[i];
            }
    }
    m=0;
}
console.log(value+" ( "+mf+" times ) ");