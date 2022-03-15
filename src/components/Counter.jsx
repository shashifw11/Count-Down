  import {useState , useEffect} from "react" ; 
    // i want my timer dectement in every one second
     // how can i decrement any varoable in every each second 
     // setTimeout calling function inside it is only once 
     // setInterveal is calling a function inside it at every given interval time
     

  export const Counter = () =>{
    const [timer , setTimer] = useState(0) ; 


    useEffect(()=>{
        const id =  setInterval(()=>{
              
            setTimer((prevValue)=>{
               
                 if(prevValue >=10){
                      clearInterval(id) ; 
                     return 0
                 }
               return  prevValue + 1
            }) ; 
     },1000) 
       return ()=>{
          ////unmaounting 
          clearInterval(id) ;
       }
    }, [])
    
    

           return <div>Timer:{timer}</div>
} 



