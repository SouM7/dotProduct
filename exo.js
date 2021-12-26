function DotProduct(v1,v2) {
    let ps=0;
        for(let i=0;i<v1.length;i++){
        ps =ps+ v1[i]*v2[i];
        }
        return(ps);
    }
    
    let v1=[0,5,3,7];
    let v2=[2,0,-7,3];
    console.log(DotProduct(v1,v2));
    
    function Orthogonal(v1,v2) {
        
       let ortho= DotProduct(v1,v2);
    
       if(ortho===0){
          return("these vectors are othogonal");
       }
       else{
           return('false');
       }
       
    }
    console.log(Orthogonal(v1,v2));