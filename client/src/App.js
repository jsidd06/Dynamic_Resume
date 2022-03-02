import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './components/Routes/AllRoutes'

function App() {
  return (
      <BrowserRouter>
      <AllRoutes />
      </BrowserRouter>
  )
}

export default App