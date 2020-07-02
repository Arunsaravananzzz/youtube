let array1="listen";
let array2="silent";
  let res1=0;
  let res2=0;
    if(array1.length != array2.length){
        console.log("NO");
    }else if(array1.length==array2.length){
        for(let i=0; i<array1.length;i++){
            res1=res1+array1.toLowerCase().charCodeAt(i);
        }
                  for(let j=0; j<array2.length;j++) {
                       res2=res2+array2.toLowerCase().charCodeAt(j);      
        }
        console.log((res1==res2) ? "YES":"NO")
    }