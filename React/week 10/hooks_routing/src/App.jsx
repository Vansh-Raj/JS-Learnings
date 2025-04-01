import { useEffect, useState } from "react"

import { usePrev } from "./hooks/use-prev";

function useDebounce(Ogfn){
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(Ogfn,300);
  }
  return fn
}
function App() {
function sendDataBE(){
  fetch("api.amazon.com/search/");
}

const debouncedfn = useDebounce(sendDataBE);

 return (
  <>
  <input type="text" onChange={debouncedfn}></input>
  </>
 );


}

export default App
