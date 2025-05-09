import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importing pages for routing
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
  // Wrapper with a background image applied using Tailwind CSS
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Routes>
      {/* Home page route */}
      <Route path='/' element={<HomePage/>}/>

      {/* Login page route */}
        <Route path='/login' element={<LoginPage/>}/>
      
      {/* Profile page route */}
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App