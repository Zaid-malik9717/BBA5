import React from 'react';

export default function HomePage({ setActivePage }) {
  const categories = [
    {
      id: 'scraps',
      title: 'Digital Scraps',
      desc: 'Create nostalgic polaroids, washi tape notes, and interactive scrapbook memories.',
      icon: 'auto_stories',
      color: 'bg-secondary-container text-on-secondary-container',
      tag: 'Interactive Memories',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw'
    },
    {
      id: 'bouquets',
      title: 'Digital Bouquets',
      desc: 'Everlasting virtual blooms, wrapped in artisan craft paper with ribbon & heartfelt messages.',
      icon: 'local_florist',
      color: 'bg-primary-container text-on-primary-container',
      tag: 'Never Withers',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7rja7hsxjQlPU2Phq3W9UTsbLQjhKAO6JC7OghWdrJ1f4_nr4WV1XkCf79BaAODpEA1BPJeQqgP0W8-E4LR1cC90F9uFg2tjtey7tYHnEpU0nc-rTSdv2fOH_i-o5xa_3LgiQ_apJS2pezjb9r0nGIf7QL_6jwhL0wPoCVxHUE27PQw-_Qu8wa3ffVm5pTFMHmuc57Vz8ptdhIQEtD40U4BfLUFm52IHtcsnIIPF7SpY1DYaEPELmPQ'
    },
    {
      id: 'playlists',
      title: 'Customized Playlists',
      desc: 'Handpicked songs accompanied by personal notes and custom album artwork for someone special.',
      icon: 'queue_music',
      color: 'bg-tertiary-container text-on-tertiary-container',
      tag: 'Melodic Hugs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDJtRUewfzyPHN0Wxi_ZFOIG5Sq6J6jbDTHnLZKqT3qgVcwtWZM7HlB2tWHc_9A2E9gneb8VhLlTQVa-YZAI0mLSVOTy0kQa4RAUE6teykZcCfA3FGlzw0dmVbvA_rSrp-_ZyLPj5hQ0Bak2BAcC3YUb0pcrLuejo1nuQKmjtCGUKGYxzMsJgReTXSOvKI0OUQddOkko7-a8rXCPjoHXA6XA2n3ssYnNwENw3ejOYTM9OcpBNrNO7Qg'
    },
    {
      id: 'giftcards',
      title: 'Gift Cards Market',
      desc: 'Aesthetic digital vouchers for birthdays, anniversaries, and spontaneous gratitude.',
      icon: 'redeem',
      color: 'bg-secondary-fixed text-on-secondary-fixed',
      tag: 'Instant Delivery',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzI_uJ3va8qIIdPD6yM5ITcrB5yWIkg4mbgA3RcNDlfQgB5X5MLR3AUTVAncSVMlvnSDdn2m6bWLK5tccdHwDAFY0W17Qg01K9IolQXf9Fmfmb366UIoY_RvdGiOQCsIIs1bOHkasVfEjvWlqMoxd-kMv2WSEnfL6ASYOo6fF25QU2VcifljEkZR6mc-1W381CiJX7SiLWdB5CoWwAmZ2wUNfLElUELCURKSlKeyCzELk6fvtcRodgpg'
    }
  ];

  return (
    <main className="max-w-container-max mx-auto px-gutter py-xl relative">
      {/* Background Blobs */}
      <div className="blob-bg top-[-100px] left-[-100px]"></div>
      <div
        className="blob-bg top-[40%] right-[-200px]"
        style={{
          background:
            'radial-gradient(circle, rgba(237,220,255,0.4) 0%, rgba(255,248,246,0) 70%)',
        }}
      ></div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-xl mb-xl pt-lg relative z-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-md items-start">
          <div className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-caps text-label-caps sticker inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">stars</span> New: Interactive Memories
          </div>

          <h1 className="font-display-lg text-display-lg text-on-background relative">
            Send a little piece of your heart.
            <svg
              className="absolute -bottom-4 -right-8 w-16 h-16 text-primary sticker hidden sm:block"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10C50 10 30 30 10 30C30 30 30 50 30 50C30 50 50 30 70 30C50 30 50 10 50 10Z"
                fill="currentColor"
                opacity="0.8"
              ></path>
              <path
                d="M70 60C70 60 80 70 90 70C80 70 80 80 80 80C80 80 70 70 60 70C70 70 70 60 70 60Z"
                fill="currentColor"
                opacity="0.6"
              ></path>
            </svg>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Curate digital scrapbooks, bouquets, and playlists that feel as warm and intimate as a handwritten note, designed especially for the people you miss the most.
          </p>

          <div className="flex flex-wrap gap-4 mt-sm">
            <button
              onClick={() => setActivePage('customize')}
              className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-caps text-label-caps hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              Start Curating <span className="material-symbols-outlined text-[18px]">favorite</span>
            </button>
            <button
              onClick={() => setActivePage('bouquets')}
              className="bg-surface text-primary border-2 border-primary-fixed-dim px-lg py-sm rounded-full font-label-caps text-label-caps hover:bg-surface-container transition-colors flex items-center gap-2"
            >
              Explore Bouquets 💐
            </button>
          </div>
        </div>

        {/* Decorative Scrapbook Composition */}
        <div className="w-full lg:w-1/2 relative h-[480px] flex items-center justify-center">
          {/* Polaroid 1 */}
          <div 
            onClick={() => setActivePage('scraps')}
            className="absolute w-[260px] sm:w-[280px] h-[340px] bg-surface p-sm pb-lg rounded-DEFAULT polaroid-shadow tape-effect transform -rotate-6 z-20 left-4 sm:left-10 hover:rotate-0 transition-transform duration-500 cursor-pointer group"
          >
            <div className="w-full h-full bg-surface-container rounded-sm overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Friends laughing"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw"
              />
            </div>
            <div className="font-accent-text text-accent-text text-center mt-sm text-on-surface">Miss you &lt;3</div>
          </div>

          {/* Polaroid 2 */}
          <div 
            onClick={() => setActivePage('bouquets')}
            className="absolute w-[220px] sm:w-[240px] h-[300px] bg-surface p-sm pb-lg rounded-DEFAULT polaroid-shadow transform rotate-12 z-10 right-4 sm:right-10 top-16 hover:rotate-6 transition-transform duration-500 cursor-pointer group"
          >
            <div className="w-full h-full bg-tertiary-fixed rounded-sm overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Digital Flower Bouquet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7rja7hsxjQlPU2Phq3W9UTsbLQjhKAO6JC7OghWdrJ1f4_nr4WV1XkCf79BaAODpEA1BPJeQqgP0W8-E4LR1cC90F9uFg2tjtey7tYHnEpU0nc-rTSdv2fOH_i-o5xa_3LgiQ_apJS2pezjb9r0nGIf7QL_6jwhL0wPoCVxHUE27PQw-_Qu8wa3ffVm5pTFMHmuc57Vz8ptdhIQEtD40U4BfLUFm52IHtcsnIIPF7SpY1DYaEPELmPQ"
              />
            </div>
          </div>

          {/* Floating Sticker */}
          <svg
            className="absolute top-8 right-1/4 w-12 h-12 text-secondary sticker z-30 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="mt-12 mb-8">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-headline-md text-headline-md text-primary font-bold">
            Choose Your Way to Make Them Smile ✨
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-1">
            Pick a gift experience below to begin personalizing with your own touches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActivePage(cat.id)}
              className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-md ambient-shadow hover:border-primary/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5"
            >
              <div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative bg-surface-variant">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className={`absolute top-2 right-2 px-2.5 py-1 rounded-full font-label-caps text-[10px] font-bold ${cat.color} sticker-shadow`}>
                    {cat.tag}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">{cat.icon}</span>
                  <h3 className="font-headline-md text-[18px] text-on-surface font-bold">
                    {cat.title}
                  </h3>
                </div>

                <p className="font-body-sm text-sm text-on-surface-variant line-clamp-3">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-primary font-label-caps text-xs">
                <span>Start creating</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
