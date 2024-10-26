import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import CommunitySection from './components/CommunitySection';
import Overview from './pages/Dashboard/Overview';

function App() {
  // For demo purposes, let's assume user is logged in
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Overview />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedSection />
      <CommunitySection />
    </div>
  );
}

export default App;