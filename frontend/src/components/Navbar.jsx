import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, favoritesCount = 3 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'scraps', label: 'Digital Scraps' },
    { id: 'bouquets', label: 'Digital Bouquets' },
    { id: 'customize', label: 'Customize Gift' },
    { id: 'giftcards', label: 'Gift Cards' },
    { id: 'playlists', label: 'Playlists' },
  ];

  return (
    <header className="flex justify-between items-center w-full px-gutter py-4 sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_20px_50px_rgba(141,110,99,0.08)] transition-all">
      {/* Brand Logo */}
      <div 
        onClick={() => setActivePage('home')}
        className="font-headline-md text-headline-md font-bold text-primary cursor-pointer hover:scale-[1.02] transition-transform select-none flex items-center gap-2"
      >
        Digital Gifts Paradise ✨
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-md font-label-caps text-label-caps items-center">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`${
                isActive
                  ? 'text-primary border-b-2 border-primary pb-1 font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              } hover:scale-105 transition-all duration-200 ease-out`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-sm">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full ${isLiked ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface'} hover:scale-105 transition-transform relative`}
          title="Favorites"
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}>
            favorite
          </span>
          <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {favoritesCount + (isLiked ? 1 : 0)}
          </span>
        </button>

        <button 
          onClick={() => alert("Profile & Saved Gifts: Signed in as Sarah ✨")}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:scale-105 transition-transform"
          title="Account"
        >
          <span className="material-symbols-outlined text-[20px]">account_circle</span>
        </button>

        <button
          onClick={() => setActivePage('customize')}
          className="bg-primary text-on-primary px-sm md:px-4 py-2 rounded-full font-label-caps text-label-caps hover:scale-105 transition-transform duration-200 ease-out flex items-center gap-2 active:scale-95 shadow-md shadow-primary/20"
        >
          <span>Create a Gift ✨</span>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-outline-variant/30 p-gutter shadow-xl flex flex-col gap-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded-lg font-label-caps text-label-caps ${
                activePage === item.id
                  ? 'bg-primary/10 text-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
