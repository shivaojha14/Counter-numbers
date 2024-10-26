import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
       const addValue=()=>{
        if(counter<20){
          setCounter(counter+1)
        }
        
        
        
       }

       const removeValue=()=>{

        if(counter>0){
        setCounter(counter-1)
        }
        
       }

  return (
    <>
      <h1>shiva with react </h1>
      <h2> counter value {counter}  </h2>
         
      <button onClick={addValue}>
        Add value {counter}
       </button>
      <br />
      <br />
      <button onClick={removeValue}>
        Remove value {counter}
        </button>
        <br />
        <footer> footer : {counter}</footer>

    </>
  )
}

export default App
