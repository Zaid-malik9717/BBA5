import React, { useState } from 'react';
import { api } from '../services/api';

export default function DigitalBouquetsVirtualFlowers({ setActivePage }) {
  const [selectedFlower, setSelectedFlower] = useState('roses');
  const [wrappingColor, setWrappingColor] = useState('pink'); // pink, green, yellow, lilac
  const [ribbonColor, setRibbonColor] = useState('brown'); // red, brown, purple, gold
  const [noteMessage, setNoteMessage] = useState('For Sarah 🌷\nMay your days bloom with as much joy as you bring to mine!');
  const [sentSuccess, setSentSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const flowers = [
    { id: 'roses', name: 'Roses', emoji: '🌹', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ' },
    { id: 'tulips', name: 'Tulips', emoji: '🌷', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7rja7hsxjQlPU2Phq3W9UTsbLQjhKAO6JC7OghWdrJ1f4_nr4WV1XkCf79BaAODpEA1BPJeQqgP0W8-E4LR1cC90F9uFg2tjtey7tYHnEpU0nc-rTSdv2fOH_i-o5xa_3LgiQ_apJS2pezjb9r0nGIf7QL_6jwhL0wPoCVxHUE27PQw-_Qu8wa3ffVm5pTFMHmuc57Vz8ptdhIQEtD40U4BfLUFm52IHtcsnIIPF7SpY1DYaEPELmPQ' },
    { id: 'sunflowers', name: 'Sunflowers', emoji: '🌻', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ' },
    { id: 'daisies', name: 'Daisies', emoji: '🌼', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7rja7hsxjQlPU2Phq3W9UTsbLQjhKAO6JC7OghWdrJ1f4_nr4WV1XkCf79BaAODpEA1BPJeQqgP0W8-E4LR1cC90F9uFg2tjtey7tYHnEpU0nc-rTSdv2fOH_i-o5xa_3LgiQ_apJS2pezjb9r0nGIf7QL_6jwhL0wPoCVxHUE27PQw-_Qu8wa3ffVm5pTFMHmuc57Vz8ptdhIQEtD40U4BfLUFm52IHtcsnIIPF7SpY1DYaEPELmPQ' },
    { id: 'lavender', name: 'Lavender', emoji: '🪻', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ' },
  ];

  const currentFlowerObj = flowers.find((f) => f.id === selectedFlower) || flowers[0];

  const handleSend = async () => {
    setIsSending(true);
    try {
      await api.sendBouquet({
        flowerId: selectedFlower,
        flowerName: currentFlowerObj.name,
        wrappingColor,
        ribbonColor,
        recipientName: 'Sarah',
        noteMessage,
      });
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 5000);
    } catch (err) {
      alert('Could not deliver bouquet: ' + err.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-lg flex flex-col gap-xl">
      {/* Hero Section */}
      <section className="text-center space-y-md relative">
        <div className="absolute -top-10 left-10 md:left-20 text-tertiary-container opacity-50 sway-animation pointer-events-none">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute top-10 right-10 md:right-32 text-secondary-container opacity-60 sway-animation pointer-events-none" style={{ animationDelay: '1s' }}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
          </svg>
        </div>
        <h1 className="font-display-mobile md:font-display-lg text-display-mobile md:text-display-lg text-primary max-w-3xl mx-auto leading-tight">
          Flowers that don't need a vase. <span className="inline-block sway-animation">🌷</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Craft a timeless digital bouquet that blooms forever in their inbox.
        </p>
      </section>

      {/* Customizer Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Left Column: Controls */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-md">
          {/* Flower Selection */}
          <div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow border border-outline-variant/30">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">local_florist</span> Choose Flowers
            </h2>
            <div className="grid grid-cols-3 gap-sm">
              {flowers.slice(0, 3).map((fl) => (
                <button
                  key={fl.id}
                  onClick={() => setSelectedFlower(fl.id)}
                  className={`flex flex-col items-center justify-center p-sm rounded-lg border-2 transition-all ${
                    selectedFlower === fl.id
                      ? 'border-primary bg-surface-container shadow-sm scale-105'
                      : 'border-transparent bg-surface-container-low hover:bg-surface-container-high'
                  }`}
                >
                  <span className="text-3xl mb-1">{fl.emoji}</span>
                  <span className="font-label-caps text-label-caps text-on-surface">{fl.name}</span>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-sm mt-2">
              {flowers.slice(3).map((fl) => (
                <button
                  key={fl.id}
                  onClick={() => setSelectedFlower(fl.id)}
                  className={`flex flex-col items-center justify-center p-sm rounded-lg border-2 transition-all ${
                    selectedFlower === fl.id
                      ? 'border-primary bg-surface-container shadow-sm scale-105'
                      : 'border-transparent bg-surface-container-low hover:bg-surface-container-high'
                  }`}
                >
                  <span className="text-3xl mb-1">{fl.emoji}</span>
                  <span className="font-label-caps text-label-caps text-on-surface">{fl.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Wrapping & Ribbon */}
          <div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow border border-outline-variant/30">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">card_giftcard</span> Styling
            </h2>
            <div className="space-y-sm">
              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                  Wrapping Paper Style
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'pink', bg: '#f4e4e4', label: 'Blush Pink' },
                    { id: 'green', bg: '#e4eed4', label: 'Sage Green' },
                    { id: 'yellow', bg: '#f4ebd4', label: 'Warm Cream' },
                    { id: 'lilac', bg: '#eae2f8', label: 'Soft Lilac' },
                  ].map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setWrappingColor(w.id)}
                      title={w.label}
                      style={{ backgroundColor: w.bg }}
                      className={`w-10 h-10 rounded-full border-2 transition-transform ${
                        wrappingColor === w.id
                          ? 'border-primary ring-2 ring-primary/40 scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 mt-sm">
                  Ribbon Accent
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'red', class: 'bg-primary', label: 'Crimson Red' },
                    { id: 'brown', class: 'bg-secondary', label: 'Vintage Brown' },
                    { id: 'purple', class: 'bg-tertiary', label: 'Royal Lavender' },
                  ].map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRibbonColor(r.id)}
                      title={r.label}
                      className={`w-8 h-8 rounded-full ${r.class} border-2 border-surface transition-transform ${
                        ribbonColor === r.id ? 'ring-2 ring-secondary scale-110' : 'hover:scale-105'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-surface-container-lowest rounded-xl p-md ambient-shadow border border-outline-variant/30 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-primary opacity-20 pointer-events-none">
              <span className="material-symbols-outlined text-4xl">edit_document</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined text-tertiary">draw</span> Add a Note
            </h2>
            <textarea
              value={noteMessage}
              onChange={(e) => setNoteMessage(e.target.value)}
              className="w-full bg-surface-container-low border-2 border-outline-variant rounded-lg p-sm font-accent-text text-accent-text text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none h-28 placeholder:text-on-surface-variant/50 relative z-10"
              placeholder="e.g. For Sarah 🌷"
            />
          </div>
        </div>

        {/* Right Column: Preview Canvas */}
        <div className="col-span-1 md:col-span-7 relative h-[600px] md:h-auto md:min-h-[700px] bg-surface-container-low rounded-xl md:rounded-[3rem] ambient-shadow border-4 border-surface-container-lowest overflow-hidden flex items-center justify-center p-4">
          {/* Decorative background elements */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, var(--tw-colors-primary-container) 0%, transparent 60%)',
            }}
          ></div>

          {/* Success Banner */}
          {sentSuccess && (
            <div className="absolute top-6 z-40 bg-primary text-on-primary px-6 py-3 rounded-full shadow-xl font-label-caps animate-bounce flex items-center gap-2">
              <span className="material-symbols-outlined">mark_email_read</span>
              Bouquet & Note delivered to inbox! 🌸💌
            </div>
          )}

          {/* Polaroid Frame */}
          <div className="relative bg-surface-container-lowest p-md pb-xl rounded-lg shadow-xl max-w-[340px] w-full transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="absolute -top-3 -left-3 sticker-shadow bg-[#ffedcc] px-3 py-1 rounded-full font-label-caps text-[10px] text-on-surface transform -rotate-12 z-20 border border-outline-variant/20 font-bold">
              Bouquet Preview
            </div>

            {/* Bouquet Image Container */}
            <div className="aspect-[4/5] bg-surface-container rounded overflow-hidden relative group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Digital Flower Bouquet"
                src={currentFlowerObj.image}
              />

              {/* Sparkles Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute top-1/4 left-1/4 w-5 h-5 text-primary animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                </svg>
                <svg className="absolute bottom-1/3 right-1/4 w-4 h-4 text-secondary animate-pulse" fill="currentColor" style={{ animationDelay: '0.5s' }} viewBox="0 0 24 24">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
                </svg>
              </div>
            </div>

            {/* Handwritten Note Area */}
            <div className="mt-md text-center">
              <p className="font-accent-text text-accent-text text-on-surface italic whitespace-pre-line text-sm">
                "{noteMessage || 'For Sarah 🌷'}"
              </p>
            </div>
          </div>

          {/* Floating CTA */}
          <div className="absolute bottom-md left-0 right-0 flex justify-center z-30">
            <button 
              disabled={isSending}
              onClick={handleSend}
              className="squishy-btn bg-primary text-on-primary font-headline-md text-headline-md px-xl py-sm rounded-full shadow-[0_10px_20px_rgba(158,64,55,0.3)] hover:shadow-[0_15px_25px_rgba(158,64,55,0.4)] flex items-center gap-2 disabled:opacity-60"
            >
              <span>{isSending ? 'Delivering to Cloud... ⏳' : 'Send Bouquet 💐'}</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
