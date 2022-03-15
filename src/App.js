import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter"
import {Todos} from "./components/Todos"
import {useState} from "react" ; 
///// run test case  => npm test //////
///// run  json server => first install json server globaly //////
///////// npm install -g json-server///
////// run json-server => json-server db.json --port 3001 --watch ////
//// this will run in git bash////////// 


function App() {
const [show  , setShow]  = useState(true) ; 
  
  return (
    <div className="App">
      
      {show ? <Counter/> : null}
      <button onClick = {()=>{
          setShow(!show) ; 
      }}>{show ? "Hide" : "Show"}</button>
    {/* <Counter/> */}
    </div>
  );
}

export default App
 
