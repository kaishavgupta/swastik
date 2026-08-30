import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Projects } from './pages/Projects';
import { Quality } from './pages/Quality';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

function App() {
  // Simple State-based Router for Vite/Static HTML environment compatibility
  const [currentPath, setCurrentPath] = useState('/');

  // Synced titles according to SEO specifications
  useEffect(() => {
    let title = 'Swastik Mixtures | Ready Mix Concrete in Lucknow';
    
    switch (currentPath) {
      case '/':
        title = 'Swastik Mixtures | Ready Mix Concrete in Lucknow';
        break;
      case '/about':
        title = 'About Swastik Mixtures | Ready Mix Concrete';
        break;
      case '/products':
        title = 'Ready Mix Concrete Products | Swastik Mixtures';
        break;
      case '/projects':
        title = 'Projects & Portfolio | Swastik Mixtures';
        break;
      case '/quality':
        title = 'Concrete Quality & Testing | Swastik Mixtures';
        break;
      case '/blog':
        title = 'Construction & Concrete Insights | Swastik Mixtures';
        break;
      case '/contact':
        title = 'Contact Swastik Mixtures | Ready Mix Concrete';
        break;
      default:
        title = 'Swastik Mixtures | Ready Mix Concrete';
    }

    document.title = title;
  }, [currentPath]);

  // Handle browser back/forward buttons using History API mock logic
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.hash.replace('#', '') || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  const renderActivePage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={handleNavigation} />;
      case '/about':
        return <About />;
      case '/products':
        return <Products />;
      case '/projects':
        return <Projects />;
      case '/quality':
        return <Quality />;
      case '/blog':
        return <Blog />;
      case '/contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Navigation Bar */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigation} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Footer Navigation Area */}
      <Footer onNavigate={handleNavigation} />

      {/* Global Floating Contact Widget */}
      <FloatingContact />
    </div>
  );
}

export default App;
