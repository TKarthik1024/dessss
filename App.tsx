
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import JobsPage from './components/JobsPage';
import ProfilePage from './components/ProfilePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactSupport from './components/ContactSupport';
import SplashScreen from './components/SplashScreen';
import type { Page } from './types';

const PATH_MAP: Record<Page, string> = {
  Home: '/',
  Skills: '/skills',
  Jobs: '/jobs',
  Profile: '/profile',
  Privacy: '/privacy',
  Terms: '/terms',
  Contact: '/contact',
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [showSplash, setShowSplash] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 1. Set initial page based on URL
    const currentPath = window.location.pathname;
    const pageEntry = Object.entries(PATH_MAP).find(([_, path]) => path === currentPath);
    if (pageEntry) {
      setActivePage(pageEntry[0] as Page);
    }

    // 2. Handle Browser Back/Forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      const entry = Object.entries(PATH_MAP).find(([_, p]) => p === path);
      setActivePage(entry ? (entry[0] as Page) : 'Home');
    };

    window.addEventListener('popstate', handlePopState);

    // 3. Splash Screen Timer
    const timer = setTimeout(() => setShowSplash(false), 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handlePageChange = (page: Page) => {
    if (page !== activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(true);
      
      // Update URL without reloading
      window.history.pushState({}, '', PATH_MAP[page]);

      setTimeout(() => {
        setActivePage(page);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Skills':
        return <SkillsPage />;
      case 'Jobs':
        return <JobsPage />;
      case 'Profile':
        return <ProfilePage />;
      case 'Privacy':
        return <PrivacyPolicy />;
      case 'Terms':
        return <TermsOfService />;
      case 'Contact':
        return <ContactSupport />;
      case 'Home':
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen font-sans antialiased text-gray-800 bg-gray-50 flex flex-col">
      <Navbar activePage={activePage} setActivePage={handlePageChange} />
      
      <main className={`flex-grow transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderPage()}
        </div>
      </main>
      
      <Footer onNavigate={handlePageChange} />
    </div>
  );
};

export default App;
