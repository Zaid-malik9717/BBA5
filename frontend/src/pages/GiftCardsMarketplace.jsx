import React, { useState } from 'react';
import { api } from '../services/api';

export default function GiftCardsMarketplace({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCardId, setSelectedCardId] = useState(1);
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [personalNote, setPersonalNote] = useState('You deserve the world... 💌');
  const [deliveryDate, setDeliveryDate] = useState('2026-09-20');
  const [orderNotification, setOrderNotification] = useState(null);
  const [isOrdering, setIsOrdering] = useState(false);

  const categories = ['All', 'Birthday', 'Friendship', 'Love', 'Just Because'];

  const giftCards = [
    {
      id: 1,
      title: 'Main Character Era ✨',
      category: 'Birthday',
      range: '₹500 - ₹5000',
      tag: 'Featured',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzI_uJ3va8qIIdPD6yM5ITcrB5yWIkg4mbgA3RcNDlfQgB5X5MLR3AUTVAncSVMlvnSDdn2m6bWLK5tccdHwDAFY0W17Qg01K9IolQXf9Fmfmb366UIoY_RvdGiOQCsIIs1bOHkasVfEjvWlqMoxd-kMv2WSEnfL6ASYOo6fF25QU2VcifljEkZR6mc-1W381CiJX7SiLWdB5CoWwAmZ2wUNfLElUELCURKSlKeyCzELk6fvtcRodgpg'
    },
    {
      id: 2,
      title: 'Another Year Hotter 🔥',
      category: 'Birthday',
      range: '₹500 - ₹5000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHnvRuUSMmf8rHWz4668ek8KXcdAjcGiy5pNn-ShF9QQWPo9gffqpHxNeMoACNAZ3NooY_CCm_wdkJX0TSctYT6GgD_PC4E0qORNKDKOkLnVB69j6SnHEIOjNrluNywlRcghctiY5FAzPWEIx0rWIKRVVPq1fbD4hMfSkJvZaZw3A5HYotEaKdoVlS8DQYdrjp0lybfqFiIkQgn9dP8-OyFCQ_Pdb9nNf7_yQhHoxZ03eTw2BJpX53-g'
    },
    {
      id: 3,
      title: 'Coffee On Me ☕',
      category: 'Friendship',
      range: '₹250 - ₹2000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw'
    },
    {
      id: 4,
      title: 'You Are My Favorite 💖',
      category: 'Love',
      range: '₹500 - ₹10000',
      tag: 'Popular',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ'
    }
  ];

  const filteredCards = giftCards.filter(
    (c) => selectedCategory === 'All' || c.category === selectedCategory
  );

  const selectedCard = giftCards.find((c) => c.id === selectedCardId) || giftCards[0];
  const activeAmount = customAmount ? Number(customAmount) : amount;

  const handleAddToCart = async () => {
    setIsOrdering(true);
    try {
      const res = await api.orderGiftCard({
        cardId: selectedCard.id,
        cardTitle: selectedCard.title,
        amount: activeAmount,
        personalNote,
        deliveryDate,
        instant: false,
      });
      setOrderNotification(`Order saved to backend! Voucher: ${res.voucherCode} (₹${activeAmount}) 🛍️`);
      setTimeout(() => setOrderNotification(null), 6000);
    } catch (err) {
      alert('Order failed: ' + err.message);
    } finally {
      setIsOrdering(false);
    }
  };

  const handleSendInstant = async () => {
    setIsOrdering(true);
    try {
      const res = await api.orderGiftCard({
        cardId: selectedCard.id,
        cardTitle: selectedCard.title,
        amount: activeAmount,
        personalNote,
        deliveryDate,
        instant: true,
      });
      setOrderNotification(`🚀 Instant voucher code ${res.voucherCode} issued by backend!`);
      setTimeout(() => setOrderNotification(null), 6000);
    } catch (err) {
      alert('Instant order failed: ' + err.message);
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <main className="max-w-container-max mx-auto px-gutter py-xl relative">
      {/* Toast Notification */}
      {orderNotification && (
        <div className="fixed top-20 right-8 z-50 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl font-label-caps flex items-center gap-2 animate-fadeIn">
          <span className="material-symbols-outlined">check_circle</span>
          {orderNotification}
        </div>
      )}

      {/* Decorative Star Doodles */}
      <svg
        className="absolute top-12 right-20 w-16 h-16 text-primary-fixed opacity-40 pointer-events-none hidden md:block"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z"></path>
      </svg>

      <div className="flex flex-col lg:flex-row gap-xl items-start">
        {/* Left Content: Title & Grid */}
        <div className="flex-1 flex flex-col gap-lg w-full">
          <header className="flex flex-col gap-sm relative">
            <h1 className="font-display-mobile md:font-display-lg text-display-mobile md:text-display-lg text-primary relative inline-block">
              Let them pick the <br className="hidden sm:inline" /> perfect gift.
              {/* Decorative Tape */}
              <div className="absolute -top-4 -left-4 w-12 h-4 bg-tertiary-fixed opacity-80 rotate-[-15deg] sticker-shadow rounded-sm"></div>
            </h1>

            {/* Categories/Chips */}
            <div className="flex flex-wrap gap-sm mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-label-caps text-label-caps btn-squish sticker-shadow transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-on-primary shadow-md font-bold'
                      : 'bg-surface-variant text-on-surface-variant border border-outline-variant hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            {filteredCards.map((card, index) => {
              const isSelected = selectedCardId === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCardId(card.id)}
                  className={`group relative bg-surface-container-lowest rounded-lg p-3 ambient-shadow cursor-pointer btn-squish border flex flex-col aspect-[4/5] transition-all ${
                    index % 2 === 1 ? 'sm:mt-8 -rotate-1 hover:rotate-0' : 'hover:rotate-1'
                  } ${
                    isSelected ? 'border-2 border-primary ring-2 ring-primary/30 shadow-lg' : 'border-outline-variant/30 hover:border-primary/50'
                  }`}
                >
                  <div className="w-full flex-1 rounded-[1.5rem] overflow-hidden relative">
                    <div
                      className="bg-cover bg-center w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    ></div>
                    {card.tag && (
                      <div className="absolute top-3 right-3 bg-surface/90 px-3 py-1 rounded-full font-label-caps text-label-caps text-primary sticker-shadow backdrop-blur-sm">
                        {card.tag}
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute top-3 left-3 bg-primary text-on-primary w-7 h-7 rounded-full flex items-center justify-center shadow">
                        <span className="material-symbols-outlined text-base">check</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 px-2 flex justify-between items-end mb-2">
                    <div className="flex flex-col">
                      <span className="font-accent-text text-accent-text text-on-surface">
                        {card.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        {card.range}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content: Personalization Sidebar (Sticky on LG) */}
        <aside className="w-full lg:w-96 lg:sticky lg:top-28 self-start bg-surface-container-low rounded-xl p-md ambient-shadow border border-outline-variant/20 flex flex-col gap-md">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">Personalize</h2>
            <span className="font-label-caps text-xs text-primary font-bold">{selectedCard.title}</span>
          </div>

          {/* Amount Selection */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">
              Select Amount (₹)
            </label>
            <div className="flex gap-2">
              {[500, 1000, 2000].map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setAmount(val);
                    setCustomAmount('');
                  }}
                  className={`flex-1 py-3 rounded-DEFAULT font-body-sm text-body-sm font-bold btn-squish transition-all ${
                    amount === val && !customAmount
                      ? 'bg-surface-container-lowest border-2 border-primary text-primary shadow'
                      : 'bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Or enter custom amount (₹)"
              className="w-full mt-2 bg-surface-container-lowest border-2 border-outline/30 rounded-DEFAULT px-4 py-3 font-body-sm text-body-sm focus:border-primary focus:outline-none transition-colors placeholder:text-outline-variant text-on-surface"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">
              Add a Note <span className="text-outline font-normal text-xs ml-1">(Optional)</span>
            </label>
            <textarea
              value={personalNote}
              onChange={(e) => setPersonalNote(e.target.value)}
              rows={3}
              placeholder="You deserve the world... 💌"
              className="w-full bg-surface-container-lowest border-2 border-outline/30 rounded-DEFAULT px-4 py-3 font-body-sm text-body-sm focus:border-primary focus:outline-none transition-colors placeholder:text-outline-variant text-on-surface resize-none font-accent-text"
            />
          </div>

          {/* Delivery */}
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Delivery Date</label>
            <div className="relative">
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="w-full bg-surface-container-lowest border-2 border-outline/30 rounded-DEFAULT px-4 py-3 pl-10 font-body-sm text-body-sm focus:border-primary focus:outline-none transition-colors text-on-surface"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
                calendar_today
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3">
            <button 
              disabled={isOrdering}
              onClick={handleAddToCart}
              className="w-full bg-primary text-on-primary py-4 rounded-full font-label-caps text-label-caps text-sm btn-squish flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60"
            >
              <span>{isOrdering ? 'Placing Order... ⏳' : `Add to Cart • ₹${activeAmount || 500}`}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button 
              disabled={isOrdering}
              onClick={handleSendInstant}
              className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-full font-label-caps text-label-caps text-sm btn-squish border-2 border-secondary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60"
            >
              {isOrdering ? 'Generating Voucher... ⚡' : 'Send Instantly ⚡'}
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
