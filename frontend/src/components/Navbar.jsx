import React, { useState, useEffect } from 'react';
import { api, API_BASE_URL } from '../services/api';

export default function Navbar({ activePage, setActivePage, favoritesCount = 3 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [backendStatus, setBackendStatus] = useState('checking'); // 'connected' | 'waking' | 'error' | 'checking'
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const checkServer = async () => {
      try {
        setBackendStatus('checking');
        const res = await api.checkHealth();
        if (isMounted) {
          if (res?.status === 'ok') {
            setBackendStatus('connected');
          } else {
            setBackendStatus('error');
          }
        }
      } catch (err) {
        if (isMounted) {
          // If first try fails or takes long (common on Render free tier cold-start)
          setBackendStatus('waking');
          // Retry once after 6 seconds
          setTimeout(async () => {
            try {
              const retryRes = await api.checkHealth();
              if (isMounted && retryRes?.status === 'ok') {
                setBackendStatus('connected');
              }
            } catch {
              if (isMounted) setBackendStatus('error');
            }
          }, 6000);
        }
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 45000); // Check every 45s
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

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
      {/* Brand Logo & Backend Status Indicator */}
      <div className="flex items-center gap-3">
        <div
          onClick={() => setActivePage('home')}
          className="font-headline-md text-headline-md font-bold text-primary cursor-pointer hover:scale-[1.02] transition-transform select-none flex items-center gap-2"
        >
          Digital Gifts Paradise ✨
        </div>

        {/* Backend Connectivity Badge */}
        <div
          className="relative hidden sm:inline-block cursor-pointer"
          onMouseEnter={() => setShowStatusTooltip(true)}
          onMouseLeave={() => setShowStatusTooltip(false)}
          onClick={() => {
            setBackendStatus('checking');
            api.checkHealth()
              .then(() => setBackendStatus('connected'))
              .catch(() => setBackendStatus('waking'));
          }}
        >
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${backendStatus === 'connected'
            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            : backendStatus === 'waking'
              ? 'bg-amber-100 text-amber-800 border border-amber-300 animate-pulse'
              : backendStatus === 'checking'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-rose-100 text-rose-800 border border-rose-300'
            }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${backendStatus === 'connected'
              ? 'bg-emerald-500'
              : backendStatus === 'waking'
                ? 'bg-amber-500 animate-ping'
                : backendStatus === 'checking'
                  ? 'bg-blue-400'
                  : 'bg-rose-500'
              }`} />
            {backendStatus === 'connected' && 'API Live'}
            {backendStatus === 'waking' && 'Backend Waking Up...'}
            {backendStatus === 'checking' && 'Connecting...'}
            {backendStatus === 'error' && 'API Offline'}
          </span>

          {showStatusTooltip && (
            <div className="absolute left-0 top-full mt-1.5 w-64 p-2.5 bg-on-surface text-surface text-xs rounded-xl shadow-xl z-50 pointer-events-none border border-outline-variant/30">
              <p className="font-bold mb-1">Backend Connection</p>
              <p className="text-[11px] opacity-90 break-all mb-1 font-mono">{API_BASE_URL}</p>
              <p className="text-[10px] text-surface-variant">
                {backendStatus === 'connected' && '✅ Connected and receiving responses.'}
                {backendStatus === 'waking' && '⏳ Render free tier instance is spinning up (takes ~30s on first load). Click to re-check.'}
                {backendStatus === 'error' && '❌ Could not reach server. Verify Render service is active.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-md font-label-caps text-label-caps items-center">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`${isActive
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
          onClick={() => alert(`Digital Gifts Paradise ✨\nConnected to: ${API_BASE_URL}\nStatus: ${backendStatus}`)}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:scale-105 transition-transform"
          title="Account / Server Info"
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
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
            <span className="text-xs text-on-surface-variant">API Server</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${backendStatus === 'connected' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
              {backendStatus}
            </span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded-lg font-label-caps text-label-caps ${activePage === item.id
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
