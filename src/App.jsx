import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Cashback from './pages/Cashback';
import Review from './pages/Review';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.scss'

function Layout() {
  const location = useLocation();
  const showHeader = !["/login2"].includes(location.pathname);
  const showFooter = !["/login", "/signup", "/forgot-password", "/login2"].includes(location.pathname);

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
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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