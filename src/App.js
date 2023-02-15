import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';

import Home from './components/pages/Home'
function App() {
  return (
   <>
   <Toaster/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
