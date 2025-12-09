import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Cleaning from './pages/Cleaning.jsx';
import HelperMTS from './pages/HelperMTS.jsx';
import Security from './pages/Security.jsx';
import HospitalStaff from './pages/HospitalStaff.jsx';
import Contact from './pages/Contact.jsx';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className={`preloader ${loading ? '' : 'hidden'}`}>
          <div className="wrench">
            <i className="fa-solid fa-wrench" />
          </div>
        </div>
      )}

      <Navbar />
      <Home />
      <About />
      <Services />
      <Cleaning />
      <HelperMTS />
      <Security />
      <HospitalStaff />
      <Contact />
      <Footer />
    </>
  );
}

