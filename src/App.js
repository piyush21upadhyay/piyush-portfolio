import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolioData } from './redux/slices/portfolioSlice';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Education from './components/Education/Education';
import Awards from './components/Awards/Awards';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((s) => s.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="app-loading">
        <div className="app-loading__spinner" />
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <p>Failed to load portfolio data: {error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Awards />
      </main>
      <Footer />
    </div>
  );
};

export default App;
