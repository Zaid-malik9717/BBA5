import React, { useState } from 'react';

export default function DigitalScrapsMemoriesBuilder({ setActivePage }) {
  const [activeTool, setActiveTool] = useState('photos'); // 'photos', 'text', 'stickers', 'frames'
  const [selectedCategory, setSelectedCategory] = useState('Our Memories');
  const [caption, setCaption] = useState("Summer '23 ✨");
  const [selectedPhoto, setSelectedPhoto] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuCa94qwjL098W5Gwenrjsm6Gf2-NcsJU6qx5urin2Y4kn5ePUzvtCpGPBWyqK-GnEK7GBMXwipTyyHPfH4Y-FWjeqA9xBaFtwxUjJTpujEfJ53yhlsSjD3R7kq8L41VNliIu3xKJ77esNS-aOhag2dIlO9mbiqfbH9AAp_sQuPaXt6FagUb8Lvh7tzioYXSDJXfEMJCnUJVnsuHyYuF88CpOcf2Cai3kI89Su2R3YRr2Ht32cthzMy3jQ');
  const [activeSticker, setActiveSticker] = useState('favorite');
  const [frameColor, setFrameColor] = useState('white');
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const categories = ['Our Memories', 'Birthday', 'Anniversary'];

  const templates = [
    {
      id: 1,
      name: 'Sunny Laughs',
      category: 'Our Memories',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa94qwjL098W5Gwenrjsm6Gf2-NcsJU6qx5urin2Y4kn5ePUzvtCpGPBWyqK-GnEK7GBMXwipTyyHPfH4Y-FWjeqA9xBaFtwxUjJTpujEfJ53yhlsSjD3R7kq8L41VNliIu3xKJ77esNS-aOhag2dIlO9mbiqfbH9AAp_sQuPaXt6FagUb8Lvh7tzioYXSDJXfEMJCnUJVnsuHyYuF88CpOcf2Cai3kI89Su2R3YRr2Ht32cthzMy3jQ',
      caption: "Summer '23 ✨"
    },
    {
      id: 2,
      name: 'Picnic Afternoon',
      category: 'Our Memories',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw',
      caption: 'Sunshine & Smiles ☀️'
    },
    {
      id: 3,
      name: 'Special Celebration',
      category: 'Birthday',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHnvRuUSMmf8rHWz4668ek8KXcdAjcGiy5pNn-ShF9QQWPo9gffqpHxNeMoACNAZ3NooY_CCm_wdkJX0TSctYT6GgD_PC4E0qORNKDKOkLnVB69j6SnHEIOjNrluNywlRcghctiY5FAzPWEIx0rWIKRVVPq1fbD4hMfSkJvZaZw3A5HYotEaKdoVlS8DQYdrjp0lybfqFiIkQgn9dP8-OyFCQ_Pdb9nNf7_yQhHoxZ03eTw2BJpX53-g',
      caption: 'Another Year Cooler 🎂'
    },
    {
      id: 4,
      name: 'Timeless Bouquet',
      category: 'Anniversary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ',
      caption: 'To Infinite Love 🌹'
    }
  ];

  const filteredTemplates = templates.filter(
    (t) => selectedCategory === 'Our Memories' || t.category === selectedCategory
  );

  return (
    <main className="flex-grow flex flex-col md:flex-row p-gutter gap-gutter max-w-container-max mx-auto w-full min-h-[calc(100vh-80px)]">
      {/* Left Toolbar */}
      <aside className="glass-panel ambient-shadow rounded-lg p-md w-full md:w-24 lg:w-32 flex flex-row md:flex-col items-center gap-4 md:gap-6 justify-center md:justify-start overflow-x-auto hide-scrollbar z-10 shrink-0">
        {[
          { id: 'photos', icon: 'photo_library', label: 'Photos' },
          { id: 'text', icon: 'text_fields', label: 'Text' },
          { id: 'stickers', icon: 'sentiment_satisfied', label: 'Stickers' },
          { id: 'frames', icon: 'crop_portrait', label: 'Frames' },
        ].map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`flex flex-col items-center gap-1.5 group p-2 rounded-xl transition-all w-16 ${
              activeTool === tool.id
                ? 'bg-surface-variant ring-2 ring-primary/40'
                : 'hover:bg-surface-variant'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
              activeTool === tool.id ? 'bg-primary text-on-primary' : 'bg-secondary-container text-on-secondary-container'
            }`}>
              <span className="material-symbols-outlined">{tool.icon}</span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">
              {tool.label}
            </span>
          </button>
        ))}
      </aside>

      {/* Center Canvas Area */}
      <section className="flex-grow flex flex-col gap-sm relative min-h-[550px]">
        <div className="text-center mb-2 z-10">
          <h1 className="font-display-lg text-display-lg text-primary relative inline-block">
            Digital Scraps
            <svg
              className="absolute -top-4 -right-8 w-12 h-12 text-tertiary opacity-70 pointer-events-none"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            Turn your favorite memories into something they can keep forever.
          </p>
        </div>

        {/* Quick Toolbar Sub-controls based on activeTool */}
        <div className="bg-surface-container-low px-4 py-2 rounded-full mx-auto flex items-center gap-3 text-xs border border-outline-variant/30">
          {activeTool === 'photos' && (
            <span className="font-label-caps text-on-surface-variant">Click any photo in the right gallery to load onto canvas!</span>
          )}
          {activeTool === 'text' && (
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-on-surface-variant">Edit Caption:</span>
              <input 
                type="text" 
                value={caption} 
                onChange={(e) => setCaption(e.target.value)}
                className="bg-surface rounded-full px-3 py-1 text-xs border focus:border-primary outline-none"
              />
            </div>
          )}
          {activeTool === 'stickers' && (
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-on-surface-variant">Choose Sticker:</span>
              {['favorite', 'star', 'pets', 'cake', 'celebration'].map((icon) => (
                <button
                  key={icon}
                  onClick={() => setActiveSticker(icon)}
                  className={`p-1 rounded-full ${activeSticker === icon ? 'bg-primary text-on-primary' : 'bg-surface hover:bg-surface-container'}`}
                >
                  <span className="material-symbols-outlined text-sm">{icon}</span>
                </button>
              ))}
            </div>
          )}
          {activeTool === 'frames' && (
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-on-surface-variant">Frame Style:</span>
              {['white', 'cream', 'blush'].map((color) => (
                <button
                  key={color}
                  onClick={() => setFrameColor(color)}
                  className={`px-3 py-1 rounded-full capitalize ${frameColor === color ? 'bg-primary text-on-primary' : 'bg-surface border'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* The Scrapbook Canvas */}
        <div className="flex-grow canvas-bg rounded-xl relative overflow-hidden flex items-center justify-center border-4 border-white shadow-lg min-h-[420px]">
          <div className="relative w-full h-full max-w-2xl max-h-3xl aspect-[4/5] bg-[#fdfbf7] p-8 shadow-inner m-auto border border-outline-variant/20 flex flex-col items-center justify-center">
            {/* Decorative Washi tape */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#f0e6d2]/90 rotate-2 backdrop-blur-sm shadow-sm z-20 mix-blend-multiply rounded-sm"></div>

            {/* Polaroid Mockup on canvas */}
            <div 
              style={{
                backgroundColor: frameColor === 'cream' ? '#fff9ee' : frameColor === 'blush' ? '#fff2f0' : '#ffffff'
              }}
              className="p-4 pb-12 rounded-sm shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-300 relative max-w-[280px] w-full border border-outline-variant/20"
            >
              <div className="w-full aspect-square overflow-hidden rounded-sm bg-surface-variant">
                <img
                  className="w-full h-full object-cover"
                  alt="Scrapbook Memory"
                  src={selectedPhoto}
                />
              </div>

              {/* Editable Caption */}
              <p className="font-accent-text text-accent-text text-center mt-4 text-on-surface opacity-90 absolute bottom-3 w-full left-0 px-2 truncate">
                {caption}
              </p>

              {/* Interactive Sticker on Polaroid */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center sticker-shadow rotate-12 cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg">{activeSticker}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="glass-panel rounded-full p-2 flex justify-between items-center ambient-shadow mx-auto w-full max-w-md z-10 mt-auto">
          <button 
            onClick={() => setShowPreviewModal(true)}
            className="px-6 py-2 rounded-full font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-variant transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">preview</span>
            Preview
          </button>
          <div className="flex gap-2">
            <button 
              onClick={() => alert("Scrapbook page saved! ✨")}
              className="px-6 py-2 rounded-full font-label-caps text-label-caps border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors"
            >
              Save
            </button>
            <button 
              onClick={() => alert("Share link generated: https://giftsparadise.app/s/summer23 💌")}
              className="px-6 py-2 rounded-full font-label-caps text-label-caps bg-primary text-on-primary hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-1"
            >
              <span>Share</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </section>

      {/* Right Panel (Controls & Gallery) */}
      <aside className="glass-panel ambient-shadow rounded-lg w-full md:w-64 lg:w-80 flex flex-col overflow-hidden z-10 h-full shrink-0">
        <div className="p-md border-b border-outline-variant/30 flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-on-surface">Gallery</h3>
          <span className="text-xs font-label-caps text-primary font-bold">Pick to load</span>
        </div>

        {/* Categories */}
        <div className="px-md py-3 flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-label-caps text-label-caps text-xs transition-colors ${
                selectedCategory === cat
                  ? 'bg-secondary-container text-on-secondary-container font-bold'
                  : 'border border-outline-variant text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="p-md pt-0 overflow-y-auto flex-grow grid grid-cols-2 gap-sm custom-scrollbar max-h-[480px]">
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => {
                setSelectedPhoto(tpl.image);
                setCaption(tpl.caption);
              }}
              className="bg-white p-2 pb-5 rounded-sm shadow-sm cursor-pointer hover:-translate-y-1 transition-all border border-transparent hover:border-primary group"
            >
              <div className="w-full aspect-square bg-surface-container-high rounded overflow-hidden relative flex items-center justify-center">
                <img src={tpl.image} alt={tpl.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <p className="font-accent-text text-xs text-center mt-2 text-on-surface line-clamp-1">
                {tpl.name}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-2xl max-w-sm w-full p-6 text-center space-y-4">
            <h3 className="font-headline-md text-primary">Your Scrapbook Page ✨</h3>
            <div className="bg-white p-4 pb-8 rounded-lg shadow-xl rotate-1">
              <img src={selectedPhoto} alt="Memory" className="rounded w-full aspect-square object-cover mb-3" />
              <p className="font-accent-text text-on-surface">{caption}</p>
            </div>
            <button
              onClick={() => setShowPreviewModal(false)}
              className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
