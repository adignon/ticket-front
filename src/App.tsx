import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DownloadPage } from './pages/DownloadPage';

function App() {
  return(
    <Routes>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/download/:userhash' element={<DownloadPage/>}/>
      <Route index path='*'  element={<Home/>}/>
    </Routes>
  )
}

export default App;