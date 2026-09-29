import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CustomizeGiftFlow from './pages/CustomizeGiftFlow';
import CustomizedPlaylistGifting from './pages/CustomizedPlaylistGifting';
import DigitalBouquetsVirtualFlowers from './pages/DigitalBouquetsVirtualFlowers';
import DigitalScrapsMemoriesBuilder from './pages/DigitalScrapsMemoriesBuilder';
import GiftCardsMarketplace from './pages/GiftCardsMarketplace';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [favoritesCount, setFavoritesCount] = useState(3);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'customize':
        return <CustomizeGiftFlow setActivePage={setActivePage} />;
      case 'playlists':
        return <CustomizedPlaylistGifting setActivePage={setActivePage} />;
      case 'bouquets':
        return <DigitalBouquetsVirtualFlowers setActivePage={setActivePage} />;
      case 'scraps':
        return <DigitalScrapsMemoriesBuilder setActivePage={setActivePage} />;
      case 'giftcards':
        return <GiftCardsMarketplace setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Application Bar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        favoritesCount={favoritesCount} 
      />

      {/* Main View Transition */}
      <div className="flex-grow">
        {renderActivePage()}
      </div>

      {/* Shared Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
