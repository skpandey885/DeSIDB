import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import BrowseCollegesPage from './pages/browse/BrowseCollegesPage';
import BrowseStudentPage from './pages/browse/BrowseStudentPage';
import VerifyStudents from './pages/browse/VerifyStudents'
import RegisterCollegePage from './pages/register/RegisterCollegePage';
import RegisterStudentPage from './pages/register/RegisterStudentPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Fellowship from './pages/others/Fellowship';
import About from './pages/About';
import { createClient, WagmiConfig } from 'wagmi';
import {Toaster} from "react-hot-toast";

import Training from './pages/others/Training';
import StudentDetail from './pages/StudentDetail';
import Contact from './pages/Contact';
import Terms from './components/Terms';


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = createClient({
  autoConnect:true
});

root.render(
  <>  
  <WagmiConfig client={client}>
  <BrowserRouter>
  <Toaster  />
  <Navbar/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/browse/students' element={<BrowseStudentPage />} />
      <Route path='/browse/colleges' element={<BrowseCollegesPage />} />
      <Route path='/browse/verify' element={<VerifyStudents />} />
      <Route path='/register/student' element={<RegisterStudentPage />} />
      <Route path='/register/college' element={<RegisterCollegePage />} />
      <Route path='/register/college' element={<RegisterCollegePage />} />  
      <Route path='/others/fellowships' element={<Fellowship />} />
      <Route path='/others/training' element={<Training />} />
      <Route path='/Terms' element= {<Terms />} />
      
      <Route path='/Contact' element={<Contact />} />  
      <Route path="/browse/students/:id" element={<StudentDetail />} />
      <Route path='/About' element={<About />} /
      >
      {/* Pending : Individual pages to display single student or college */}
    </Routes>
    <Footer />
  </BrowserRouter>
  </WagmiConfig>
</>
);
