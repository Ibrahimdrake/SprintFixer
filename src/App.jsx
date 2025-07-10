import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import WhoWeAre from './pages/WhoWeAre';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <WhoWeAre />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
