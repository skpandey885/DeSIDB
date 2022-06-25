import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import BrowseCollegesPage from './pages/browse/BrowseCollegesPage';
import BrowseStudentPage from './pages/browse/BrowseStudentPage';
import RegisterCollegePage from './pages/register/RegisterCollegePage';
import RegisterStudentPage from './pages/register/RegisterStudentPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Fellowship from './pages/others/Fellowship';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path='/' element={<App />} />
      <Route path='/browse/students' element={<BrowseStudentPage />} />
      <Route path='/browse/colleges' element={<BrowseCollegesPage />} />
      <Route path='/register/student' element={<RegisterStudentPage />} />
      <Route path='/register/college' element={<RegisterCollegePage />} />
      <Route path='/register/college' element={<RegisterCollegePage />} />  
      <Route path='/others/fellowships' element={<Fellowship />} />
      {/* Pending : Individual pages to display single student or college */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
