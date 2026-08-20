import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';
function App() {
  const [count, setCount] = useState(0)

 return (
  <div className="main-layout">
      <Dashboard />

  </div>
 );
}

export default App
