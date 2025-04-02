//ในเชิง Production จะใช้กำหนด route
import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProfile from './pages/myprofile'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'




function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App