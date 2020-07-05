const t=function() {
    

let a="listen";
let b="silent";
  let c=0;
  let d=0;

        for(let i=0; i<a.length;i++){
            c=c+a.toLowerCase().charCodeAt(i);
        }
                  for(let j=0; j<b.length;j++) {
                       d=d+b.toLowerCase().charCodeAt(j);      
        }
        if(c==d)
        {
            console.log("given string is get same letters");
        }
        else{
            console.log("given string is not get same letters");
        }
    
};
module.exports=t;