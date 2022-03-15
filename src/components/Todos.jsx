 import {useState , useEffect} from "react"
export const Todos = () =>{
    const [todos , setTodos] = useState([]) ;
    const [text , setText] = useState("")  
    const[page , setPage] = useState(1) ; 
    const [loading , setLoading] = useState(false) ; 

//////// users is seeing result after the data will change ////

    useEffect(()=>{
        getData() ; 
    } , [page]) ;    //// when page will change then this useEffect should be called///

    const getData = () =>{
        setLoading(true) ; 
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
        .then((d)=>d.json())
        .then((res)=>{
            setTodos(res) ; 
            setLoading(false) ;
        }) ; 
    }

   return loading ? ("Loading..."):(
       <div>
           <input placeholder = "Enter todo" 
           onChange = {(e)=>setText(e.target.value)}
           />
      <button onClick = {()=>{
        //   setTodos([...todos , {status : false , title : text}])  
        // insted of storing data in todos i stored it in db.json 
         const data = {status:false  , title : text} ;
           //// fetch the data in db.json data base ... source is http://localhost:3001/todos
          fetch("http://localhost:3001/todos" , {
              method : "POST" , 
              body : JSON.stringify(data) , 
              headers : {
                  "content-type" : "application/json",
              } , 
          }).then(getData) ; 
          
          }}>Add Todo</button>  
      
      
      {todos.map(e => <div>{e.title} - {e.status ? "Done" : "Not Done"}</div>)}
            
            
           <button onClick = {()=>{
                 setPage(page-1)
             }}>Prev</button>   
          
          <button onClick = {()=>{
                 setPage(page+1)
             }}>Next</button>

    </div>
   )
}