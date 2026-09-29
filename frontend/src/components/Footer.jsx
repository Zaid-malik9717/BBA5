import React from 'react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="w-full px-gutter py-xl flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-low border-t-2 border-outline-variant/30 mt-auto">
      <div 
        onClick={() => setActivePage && setActivePage('home')}
        className="font-accent-text text-accent-text text-on-surface cursor-pointer hover:text-primary transition-colors"
      >
        Digital Gifts Paradise ✨
      </div>
      
      <div className="flex gap-md font-label-caps text-label-caps flex-wrap justify-center">
        <button 
          onClick={() => alert("Welcome to Digital Gifts Paradise Help Center! Need assistance curating your gift? Email support@digitalgiftsparadise.com")} 
          className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"
        >
          Help Center
        </button>
        <button 
          onClick={() => alert("Digital Gifts Paradise: Crafted with love to make heartfelt digital moments feel tangible.")} 
          className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"
        >
          About Us
        </button>
        <button 
          onClick={() => alert("Drop us a note at hello@digitalgiftsparadise.com 💌")} 
          className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"
        >
          Contact
        </button>
        <button 
          onClick={() => alert("Your privacy is protected. Gifts are encrypted and personal to sender & recipient.")} 
          className="text-on-surface-variant opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-200"
        >
          Privacy Policy
        </button>
      </div>

      <div className="font-body-sm text-body-sm text-secondary text-center md:text-right">
        © 2024 Digital Gifts Paradise — A tiny digital hug.
      </div>
    </footer>
  );
}
