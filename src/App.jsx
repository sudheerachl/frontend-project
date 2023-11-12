import { useState } from 'react';
import Logindoctor from './doctor/doc-login';
import Signupdoctor from './doctor/doc-signup';
import Successdoctor from './doctor/doc-profile';
import Loginuser from './user/user-login';
import Signupuser from './user/user-signup';
import Successuser from './user/user-profile';
import Homepage from './Homepage';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup-doctor" element={<Signupdoctor />}></Route>
        <Route path="/login-doctor" element={<Logindoctor />}></Route>
        <Route path="/profile-doctor" element={<Successdoctor />}></Route>
        <Route path="/signup-user" element={<Signupuser />}></Route>
        <Route path="/login-user" element={<Loginuser />}></Route>
        <Route path="/profile-user" element={<Successuser />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
