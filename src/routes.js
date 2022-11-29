import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Index from './pages/Index';
// import NotFound from './pages/NotFound';
import Home from './pages/Home';
import HomeEmpresa from './pages/HomeEmpresa';


function Rotas() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/empresa" element={<HomeEmpresa />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;