import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Services from './Services';
import SingleService from './SingleService';

function ServicePage() {
  return (
    <div className='wrap'>
      <BrowserRouter basename='redux-observable'>
        <Routes>
          <Route path='/' element={<Services />} />
          <Route path='/:id/details' element={<SingleService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ServicePage;
