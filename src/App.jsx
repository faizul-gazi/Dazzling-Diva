import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-900">
      {/* Header section */}
      <Header />

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
