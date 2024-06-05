import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Data from "./Data"
// import Ans from "./Ans"
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [output, setOutput] = useState([]);

  function handleChange(e) {
    setCount(e.target.value);
  }

  function handleclick() {
    if (count < 0) {
      alert("Can't give -ve value to the number of paragraphs")
    }
    else if (count == 0) {
      alert("Can't give 0 as number of paragraphs")
    }
    else {
      if (count > 8) {
        alert("Anything more than 8 is too much")
      }
      let arr = []
      for (let i = 0; i < count; i++) {
        arr.push(Data[Math.floor(Math.random() * Data.length)]);
      }
      setOutput(arr);
    }

  }
  console.log(output)

  return (
    <main><h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="flex">
        <label htmlFor="inp">Paragraphs: </label>
        <input style={{ width: "5vw", border: "none" }} type="number" value={count} onChange={handleChange} />
        <button onClick={handleclick}>GENERATE</button>
      </div>
      <div style={{ width: "40vw", marginTop: "8vh" }}>
        {output.map((ele, idx) => {
          return (<p id={idx} style={{ marginBottom: "2vh" }}>{idx+1}) {ele}</p>
          )
        })}
      </div>
    </main>
  )
}

export default App
