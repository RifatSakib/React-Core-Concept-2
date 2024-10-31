import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
    {/* here we can use div instead of <> </> (fragment) */}
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
