import { useState } from 'react';
import Logindoctor from './doctor/doc-login';
import Signupdoctor from './doctor/doc-signup';
import Successdoctor from './doctor/doc-profile';
import Deletedoctor from './doctor/doc-delete';
import Updatedoctor from './doctor/doc-update';
//import Infodoctor from './doctor/doc-info';
import Loginuser from './user/user-login';
import Signupuser from './user/user-signup';
import Successuser from './user/user-profile';
import Deleteuser from './user/user-delete';

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
        <Route path="/delete-doctor" element={<Deletedoctor />}></Route>
        <Route path="/update-doctor" element={<Updatedoctor />}></Route>
        //<Route path="/info-doctor" element={<Infodoctor />}></Route>
        <Route path="/signup-user" element={<Signupuser />}></Route>
        <Route path="/login-user" element={<Loginuser />}></Route>
        <Route path="/profile-user" element={<Successuser />}></Route>
        <Route path="/delete-user" element={<Deleteuser />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
