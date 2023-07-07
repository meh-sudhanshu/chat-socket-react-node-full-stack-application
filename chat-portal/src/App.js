import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import UserPage from './Pages/UserPage/UserPage';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
                <Route exact path='/user-page' element={<UserPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
