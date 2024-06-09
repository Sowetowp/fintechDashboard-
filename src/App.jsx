import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
