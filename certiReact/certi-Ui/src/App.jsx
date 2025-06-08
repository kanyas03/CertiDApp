import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewCertificate from './pages/ViewCertificate'
import Homepage from './pages/HomePage.jsx'
import IssuePage from './pages/Issue.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/issue' element={<IssuePage/>}/>
        <Route path='/view/:id' element={<ViewCertificate/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App