import { useRef } from "react"

function App() {
  
  const Useref = useRef();
  function focusOnInput(){
   Useref.current.focus();
  }
  
  return <div>
    Sign up
    <input ref = {Useref} type="text" />
    <input type = "text"/>
    <button onClick={focusOnInput}>Submit</button>
  </div> 

}
  


    

export default App
