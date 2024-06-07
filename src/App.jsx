import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
    <Dashboard/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
