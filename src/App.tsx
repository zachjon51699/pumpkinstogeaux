import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Packages from './pages/Packages';
import BookNow from './pages/BookNow';
import Contact from './pages/Contact';
import { StripeProvider } from './contexts/StripeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks setCurrentPage={setCurrentPage} />;
      case 'packages':
        return <Packages setCurrentPage={setCurrentPage} />;
      case 'book-now':
        return <BookNow />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <StripeProvider>
      <div className="min-h-screen bg-orange-50">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </StripeProvider>
  );
}

export default App;