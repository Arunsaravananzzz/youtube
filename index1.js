let a=[1,2,3,2,5,6,3,2];
let b=[];
let x=[];
let i=0,j=0,c=1,k=0,d,e,h=0,p=1;
   for ( i = 0; i < a.length; i++) {
        for (let j = i+1; j< a.length; j++) {
          
           if(a[i]>a[j])
           {
               a[i]=a[i]+a[j];
               a[j]=a[i]-a[j];
               a[i]=a[i]-a[j];
           }
        }
        
    }
    //console.log(a);
    for ( i = 0; i < a.length;) {
        for (let j = i+1; j< a.length; j++) {
            if(a[i]==a[j])
                {
                  c++;

                }
        }
        b[k]=c;
        k++;
        i=i+c;
        c=1;
    }
    //console.log(b);
    for (let i = 0; i < b.length; i++) {

        
       if(b[0]<b[i])
            {
                b[0]=b[i];
            }
            d=b[0];
        
    }
    
    //console.log(b[0]);
    c=1;
    
    
        
          for (let j = 0; j < a.length; ) {
            for (let e = j+1; e < a.length; e++) {
                if(a[j]==a[e])
                {
                  c++;
                }
                    
            }
            if(c==d&&c>1)
                  {
                      for (let y = 0; y < d; y++) {
                          console.log(a[j])
                          
                      }
                      d--;
                    
                  }
            if(c==1)
                  {
                      x[h]=a[j];
                      h++;
                  }
            
                  
            j=j+c;
            c=1;
                }
                for (let i = 0; i < h; i++) {
                    console.log(x[i]);
                    
                    
                }
            