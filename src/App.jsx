import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'

function App() {

  return (
    <>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div id='preloader-active'>
            <div className='preloader d-flex align-items-center justify-content-center'>
              <div className='preloader-inner position-relative'>
                <div className="superballs">
                  <div className="superballs__dot"></div>
                  <div className="superballs__dot"></div>
                </div>
              </div>
            </div>
          </div>}>
            <Routes>
              <Route path="/" element={<Home />} />
    </>
  )
}

export default App
