import { useState } from 'react'
import './App.css'
import MenuBar from "./components/MenuBar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <MenuBar />
          <Home/>
      </div>
  )
}

export default App
