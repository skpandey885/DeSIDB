import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { WagmiConfig,createClient } from 'wagmi';
import Navbar from './components/layout/Navbar';
import './index.css';
import App from './pages/App';
import BrowseCollegesPage from './pages/browse/BrowseCollegesPage';
import BrowseStudentPage from './pages/browse/BrowseStudentPage';
import RegisterCollegePage from './pages/register/RegisterCollegePage';
import RegisterStudentPage from './pages/register/RegisterStudentPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
const client = createClient();

root.render(
  <>  
  <WagmiConfig client={client}>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/browse/students' element={<BrowseStudentPage/>} />
      <Route path='/browse/colleges' element={<BrowseCollegesPage/>} />
      <Route path='/register/student' element={<RegisterStudentPage/>} />
      <Route path='/register/college' element={<RegisterCollegePage/>} />
      {/* Pending : Individual pages to display single student or college */}
    </Routes>
  </BrowserRouter>
  </WagmiConfig>
</>
);
