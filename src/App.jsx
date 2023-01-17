import './App.css'
import Memo from './memo'
import React, { useState } from 'react'

function App() {
const [count, setCount] = useState(0)
const [data, setData] = useState(0)
  return (
    <div className="App">
      <Memo data={data}/>
      <h1>Parent Component {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setData((data) => data + 1)}>Data</button>
    </div>
  )
}

export default App
