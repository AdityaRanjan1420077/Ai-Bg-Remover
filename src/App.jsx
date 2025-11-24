import { useState } from 'react'
import './App.css'
import MenuBar from "./components/MenuBar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <MenuBar />
      </div>
  )
}

export default App
