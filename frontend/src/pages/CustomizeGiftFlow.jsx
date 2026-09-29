import React, { useState } from 'react';

export default function CustomizeGiftFlow({ setActivePage }) {
  const [currentStep, setCurrentStep] = useState(3);
  const [recipientName, setRecipientName] = useState('Sarah & Alex');
  const [noteMessage, setNoteMessage] = useState('Thank you for always being my sunshine. Happy birthday! 🎂✨');
  const [selectedMusic, setSelectedMusic] = useState('Golden Hour - J.VKE');
  const [activeModal, setActiveModal] = useState(null); // 'photos' | 'note' | 'stickers' | 'music'
  const [selectedSticker, setSelectedSticker] = useState('💖');
  const [photoUrl, setPhotoUrl] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw');

  const steps = [
    { num: '01', title: 'Recipient' },
    { num: '02', title: 'Gift' },
    { num: '03', title: 'Personalize' },
    { num: '04', title: 'Preview' },
    { num: '05', title: 'Send' },
  ];

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-gutter py-lg flex flex-col gap-lg">
      {/* Step Indicator */}
      <section className="w-full">
        <div className="flex justify-between items-center bg-surface-container-low rounded-lg p-md ambient-shadow overflow-x-auto">
          {steps.map((step, idx) => {
            const isCurrent = currentStep === idx + 1;
            const isDone = currentStep > idx + 1;
            return (
              <React.Fragment key={step.num}>
                <div 
                  onClick={() => setCurrentStep(idx + 1)}
                  className={`flex items-center gap-2 cursor-pointer transition-all ${
                    isCurrent ? 'text-primary font-bold' : isDone ? 'text-on-surface opacity-80' : 'opacity-50'
                  } shrink-0`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-label-caps ${
                      isCurrent
                        ? 'bg-primary text-on-primary shadow-lg'
                        : isDone
                        ? 'bg-primary/20 text-primary'
                        : 'bg-outline-variant text-on-surface-variant'
                    }`}
                  >
                    {step.num}
                  </div>
                  <span className="font-label-caps hidden md:inline">{step.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="h-px bg-outline-variant w-8 md:w-16 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg relative">
        {/* Customization Options (Left Side) */}
        <div className="lg:col-span-7 flex flex-col gap-md z-10">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary mb-1">Make it yours ✨</h1>
            <p className="font-body-sm text-on-surface-variant">
              Tailor each sweet detail for <span className="font-bold text-primary">{recipientName || 'your loved one'}</span>.
            </p>
          </div>

          {/* Quick Recipient Name input */}
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 ambient-shadow flex flex-col sm:flex-row items-center gap-3">
            <span className="material-symbols-outlined text-primary">person</span>
            <div className="flex-1 w-full">
              <label className="font-label-caps text-xs text-on-surface-variant block">Recipient Name(s)</label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g. Sarah & Alex"
                className="w-full bg-transparent font-headline-md text-on-surface text-base border-none focus:outline-none placeholder:text-outline-variant"
              />
            </div>
          </div>

          {/* Option Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Photos & Video */}
            <div 
              onClick={() => setActiveModal('photos')}
              className="bg-surface-container rounded-lg p-md ambient-shadow border border-outline-variant/30 hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">photo_camera</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">add_a_photo</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Photos &amp; Video</h3>
              <p className="text-on-surface-variant mb-4">Upload cherished memories to feature in your digital scrapbook.</p>
              <button 
                type="button"
                className="px-4 py-2 bg-surface text-primary border-2 border-primary rounded-full font-label-caps hover:bg-primary hover:text-on-primary transition-colors"
              >
                Upload Media
              </button>
            </div>

            {/* Personal Message */}
            <div 
              onClick={() => setActiveModal('note')}
              className="bg-surface-container rounded-lg p-md ambient-shadow border border-outline-variant/30 hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">edit_document</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">edit</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Add a Note</h3>
              <p className="text-on-surface-variant mb-4">Write a heartfelt message using our handwritten fonts.</p>
              <button 
                type="button"
                className="px-4 py-2 bg-surface text-primary border-2 border-primary rounded-full font-label-caps hover:bg-primary hover:text-on-primary transition-colors"
              >
                Write Note
              </button>
            </div>

            {/* Stickers & Decor */}
            <div 
              onClick={() => setActiveModal('stickers')}
              className="bg-surface-container rounded-lg p-md ambient-shadow border border-outline-variant/30 hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">auto_awesome</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">interests</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Stickers &amp; Decor</h3>
              <p className="text-on-surface-variant mb-4">Select cute digital stickers, washi tape, and doodles: {selectedSticker}</p>
              <button 
                type="button"
                className="px-4 py-2 bg-surface text-primary border-2 border-primary rounded-full font-label-caps hover:bg-primary hover:text-on-primary transition-colors"
              >
                Browse Stickers
              </button>
            </div>

            {/* Background Music */}
            <div 
              onClick={() => setActiveModal('music')}
              className="bg-surface-container rounded-lg p-md ambient-shadow border border-outline-variant/30 hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">music_note</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">queue_music</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Soundtrack</h3>
              <p className="text-on-surface-variant mb-4">Selected: {selectedMusic}</p>
              <button 
                type="button"
                className="px-4 py-2 bg-surface text-primary border-2 border-primary rounded-full font-label-caps hover:bg-primary hover:text-on-primary transition-colors"
              >
                Pick Music
              </button>
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="mt-8 flex justify-between items-center border-t border-outline-variant/30 pt-md">
            <button 
              onClick={() => {
                if (currentStep > 1) setCurrentStep(currentStep - 1);
                else setActivePage('home');
              }}
              className="text-on-surface-variant font-label-caps hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined">arrow_back</span> Back
            </button>
            <button 
              onClick={() => {
                if (currentStep < 5) setCurrentStep(currentStep + 1);
                else alert("Gift ready! Ready to send to " + recipientName + " 🎉");
              }}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-caps hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
            >
              <span>{currentStep === 5 ? 'Send Gift Now 💌' : 'Next: Preview'}</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Mobile Preview (Right Side) */}
        <div className="lg:col-span-5 relative flex justify-center items-start lg:sticky lg:top-[100px] h-[640px]">
          {/* Decorative Elements Behind Phone */}
          <div className="absolute -right-10 top-20 w-32 h-32 bg-tertiary-container rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -left-10 bottom-20 w-40 h-40 bg-primary-container rounded-full blur-3xl opacity-50"></div>

          {/* Phone Frame */}
          <div className="w-[320px] h-[620px] bg-surface-container-lowest rounded-[40px] border-[8px] border-outline-variant/50 ambient-shadow relative overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-32 h-full bg-outline-variant/50 rounded-b-xl"></div>
            </div>

            {/* Screen Content */}
            <div className="flex-grow bg-[#FDFBF7] relative overflow-y-auto overflow-x-hidden pt-10 pb-4 px-4 custom-scrollbar flex flex-col">
              {/* Header */}
              <div className="text-center mb-4">
                <p className="font-label-caps text-secondary tracking-widest text-[10px]">A DIGITAL HUG FOR</p>
                <h2 className="font-accent-text text-[26px] text-primary mt-1">
                  {recipientName || 'Someone Special'}
                </h2>
              </div>

              {/* Polaroid Style Card */}
              <div className="bg-white p-3 rounded-md sticker-shadow rotate-[-2deg] mb-6 relative hover:rotate-0 transition-transform">
                {/* Washi Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-secondary/20 rotate-[5deg] z-10 backdrop-blur-sm shadow-sm rounded-sm"></div>
                <div className="w-full aspect-[4/3] rounded-sm overflow-hidden bg-surface-container mb-3 relative">
                  <img
                    src={photoUrl}
                    alt="Memory Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 text-2xl filter drop-shadow">
                    {selectedSticker}
                  </div>
                </div>
                <p className="font-accent-text text-center text-sm text-on-surface">Forever grateful for you ✨</p>
              </div>

              {/* Handwritten Note Area */}
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 mb-4 text-center">
                <span className="material-symbols-outlined text-primary text-base mb-1">favorite</span>
                <p className="font-accent-text text-sm text-on-surface leading-relaxed italic">
                  "{noteMessage}"
                </p>
              </div>

              {/* Soundtrack preview pill */}
              <div className="mt-auto bg-surface-container-high rounded-full p-2 px-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-base animate-pulse">music_note</span>
                  <span className="font-label-caps text-[11px] text-on-surface truncate">{selectedMusic}</span>
                </div>
                <span className="material-symbols-outlined text-sm text-primary">play_arrow</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Customization Tools */}
      {activeModal && (
        <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-2xl max-w-md w-full p-6 ambient-shadow border border-outline-variant/30 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline-md text-headline-md text-primary">
                {activeModal === 'photos' && 'Upload / Choose Photo'}
                {activeModal === 'note' && 'Write Handwritten Note'}
                {activeModal === 'stickers' && 'Select Sticker & Washi'}
                {activeModal === 'music' && 'Choose Background Melody'}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Note Editor */}
            {activeModal === 'note' && (
              <div className="space-y-4">
                <textarea
                  value={noteMessage}
                  onChange={(e) => setNoteMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-surface-container-low border-2 border-outline-variant rounded-xl p-3 font-accent-text text-base text-on-surface focus:border-primary focus:outline-none"
                  placeholder="Type your message..."
                />
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-3 bg-primary text-on-primary rounded-full font-label-caps font-bold"
                >
                  Save Note ✨
                </button>
              </div>
            )}

            {/* Photos Selector */}
            {activeModal === 'photos' && (
              <div className="space-y-4">
                <p className="text-xs text-on-surface-variant">Choose a photo preset or paste image URL:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCa94qwjL098W5Gwenrjsm6Gf2-NcsJU6qx5urin2Y4kn5ePUzvtCpGPBWyqK-GnEK7GBMXwipTyyHPfH4Y-FWjeqA9xBaFtwxUjJTpujEfJ53yhlsSjD3R7kq8L41VNliIu3xKJ77esNS-aOhag2dIlO9mbiqfbH9AAp_sQuPaXt6FagUb8Lvh7tzioYXSDJXfEMJCnUJVnsuHyYuF88CpOcf2Cai3kI89Su2R3YRr2Ht32cthzMy3jQ',
                  ].map((url, i) => (
                    <img 
                      key={i} 
                      src={url} 
                      alt="Preset" 
                      onClick={() => { setPhotoUrl(url); setActiveModal(null); }}
                      className="rounded-lg aspect-square object-cover cursor-pointer hover:border-2 hover:border-primary"
                    />
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or paste an image URL..."
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                />
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps"
                >
                  Done
                </button>
              </div>
            )}

            {/* Stickers Selector */}
            {activeModal === 'stickers' && (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-3 text-3xl text-center">
                  {['💖', '🌸', '✨', '🎂', '💌', '🌷', '🦋', '🧸'].map((stk) => (
                    <button
                      key={stk}
                      onClick={() => { setSelectedSticker(stk); setActiveModal(null); }}
                      className="p-3 bg-surface-container rounded-xl hover:scale-110 transition-transform"
                    >
                      {stk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Music Selector */}
            {activeModal === 'music' && (
              <div className="space-y-2">
                {[
                  'Golden Hour - JVKE',
                  'Until I Found You - Stephen Sanchez',
                  'Yellow - Coldplay',
                  'Lover - Taylor Swift',
                  'Late Night Talking - Harry Styles',
                ].map((track) => (
                  <button
                    key={track}
                    onClick={() => { setSelectedMusic(track); setActiveModal(null); }}
                    className={`w-full text-left p-3 rounded-lg flex items-center justify-between ${
                      selectedMusic === track ? 'bg-primary text-on-primary' : 'hover:bg-surface-container'
                    }`}
                  >
                    <span className="font-label-caps text-xs">{track}</span>
                    <span className="material-symbols-outlined text-sm">music_note</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
