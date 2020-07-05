const f=function() {
    
 
    

let a=[1,2,30,5,40];
let b=[10,20,30,40,50];
let c=[1,30,2,40]
let i=0,j=0,k=0;
for(i=0;i<a.length;i++)
{
    for(j=0;j<b.length;j++){
    if(a[i]==b[j])
    {
        for(k=0;k<c.length;k++)
        {
            if(a[i]==c[k])
            {
                console.log(a[i])
            }
            else{}
        }
    }
    else{}
}
}
};
module.exports= f;