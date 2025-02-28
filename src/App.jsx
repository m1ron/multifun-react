import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Cashback from './pages/Cashback';
import Review from './pages/Review';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.scss'

//import './js/script.js'

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/signup"];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  useEffect(() => {
    document.documentElement.classList.add('loaded');

    const speed = .2;

    const onScroll = () => {
      document.documentElement.style.setProperty('--parallax-offset', `-${window.pageYOffset * speed}px`);
    };
    onScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', onScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once when

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App