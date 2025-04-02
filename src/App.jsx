//ในเชิง Production จะใช้กำหนด route
import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProfile from './pages/myprofile'




function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App