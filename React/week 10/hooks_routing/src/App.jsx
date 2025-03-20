import { useState } from "react"

function useCouter(){
  const  [count,setCount] = useState(0);

  function increaseCount(){
    setCount(c => c + 1);
  }

  return {
    count:count,
    increaseCount:increaseCount
  }
}

function App() {

  

return <div>
  <Counter/>
  <Counter/>
  <Counter/>
</div>
}
  
function Counter(){
  const {count,increaseCount} = useCouter();

  return <div>
    <button onClick={increaseCount}>Increase:{count}</button>
  </div>

}

export default App
