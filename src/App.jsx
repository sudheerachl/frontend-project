import { useState } from 'react'
import Logindoctor from './doctor/doc-login'
import Signupdoctor from './doctor/doc-signup'
import Successdoctor from './doctor/doc-profile'
import Loginuser from './user/user-login'
import Signupuser from './user/user-signup'
import Successuser from './user/user-profile'
import Homepage from './Homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
        <Route path='http://localhost:3001/signup-doctor' element={<Signupdoctor/>}></Route>
        <Route path='https://frontend-project-3pq2kynq4-cherukuri-lakshmi-sudheeras-projects.vercel.app/login-doctor' element={<Logindoctor/>}></Route>
        <Route path='http://localhost:3001/profile-doctor' element={<Successdoctor/>}></Route>
        <Route path='http://localhost:3001/signup-user' element={<Signupuser/>}></Route>
        <Route path='http://localhost:3001/login-user' element={<Loginuser/>}></Route>
        <Route path='http://localhost:3001/profile-user' element={<Successuser/>}></Route>
        <Route path='http://localhost:3001/Homepage' element={<Homepage/>}></Route>

      </Routes>
    </BrowserRouter>
    
    
    
  )
}

export default App
