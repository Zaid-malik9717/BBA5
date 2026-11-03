import React, { useState } from 'react';
import { api } from '../services/api';

export default function CustomizedPlaylistGifting({ setActivePage }) {
  const [playlistName, setPlaylistName] = useState('Songs That Remind Me of You 💗');
  const [recipient, setRecipient] = useState('Sarah');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [savedNotification, setSavedNotification] = useState(null);

  const handleSavePlaylist = async (isDraft = false) => {
    setIsSaving(true);
    try {
      const res = await api.createPlaylist({
        playlistName,
        recipient,
        tracks,
        isDraft,
      });
      setSavedNotification({
        type: isDraft ? 'draft' : 'final',
        message: res.message || (isDraft ? 'Draft saved to backend!' : 'Playlist finalized!'),
      });
      setTimeout(() => setSavedNotification(null), 5000);
    } catch (err) {
      alert('Error saving playlist: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: 'Late Night Talking',
      artist: 'Harry Styles',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDJtRUewfzyPHN0Wxi_ZFOIG5Sq6J6jbDTHnLZKqT3qgVcwtWZM7HlB2tWHc_9A2E9gneb8VhLlTQVa-YZAI0mLSVOTy0kQa4RAUE6teykZcCfA3FGlzw0dmVbvA_rSrp-_ZyLPj5hQ0Bak2BAcC3YUb0pcrLuejo1nuQKmjtCGUKGYxzMsJgReTXSOvKI0OUQddOkko7-a8rXCPjoHXA6XA2n3ssYnNwENw3ejOYTM9OcpBNrNO7Qg',
      note: 'This reminds me of our late-night calls when we first met.',
      duration: '2:57'
    },
    {
      id: 2,
      title: 'Yellow',
      artist: 'Coldplay',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACivTAFgaO_KVtvxyD_tTUXTfUWgZwwV2TSjAZuNkJCgTZl05ySd81YZFhZjNjiSXbRbEKniPdsf2HIDZfNiDPmgu3g9ka_oGSJLZ1YorknaDmKfJts4i5vMWpNAIlhWq8MrwbAu5Y6uyav4eC-_MSVVAQ2OYUDOb3Vgc6153bGr3Y6BQdbwsPX3729ah6mutFBhTEu1XZKeWzJi5wDzp6qyyvZO0jyTW2r7sp41pfbxRunN1593ByKw',
      note: 'Look at the stars, look how they shine for you ⭐',
      duration: '4:29'
    }
  ]);

  const removeTrack = (id) => {
    setTracks(tracks.filter((t) => t.id !== id));
    if (currentTrackIndex >= tracks.length - 1 && currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const updateTrackNote = (id, newNote) => {
    setTracks(tracks.map((t) => (t.id === id ? { ...t, note: newNote } : t)));
  };

  const handleAddSuggested = (songTitle, artistName) => {
    const newTrack = {
      id: Date.now(),
      title: songTitle,
      artist: artistName,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3uolfm9NP9ZZ2iRG-29rQe5_x5ytK_5qw_zO77pUS840VHVoCHV4MXIC6t3ASTYL6CfyQGnb6SdjqV9eWd7IwSO3jgOuQcZWrYmZ_kZrdxPaF_B5jOoptV1h6QdDr3oIbhmHDjZckiMGGzM-l3nyk-RHnGsLAXyfqWSXeFXavQPyAKkPuivvMfTB-0n8j5fAzdFGqINPvdd82iS69Pq9G2W9NEqIg5UZ5lONDi5206YOC2W_2Uw5m7Q',
      note: 'Added with warm love and happy memories.',
      duration: '3:15'
    };
    setTracks([...tracks, newTrack]);
    setSearchQuery('');
  };

  const activeTrack = tracks[currentTrackIndex] || {
    title: 'Select a Track',
    artist: 'Add songs below',
    note: 'No track note yet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDJtRUewfzyPHN0Wxi_ZFOIG5Sq6J6jbDTHnLZKqT3qgVcwtWZM7HlB2tWHc_9A2E9gneb8VhLlTQVa-YZAI0mLSVOTy0kQa4RAUE6teykZcCfA3FGlzw0dmVbvA_rSrp-_ZyLPj5hQ0Bak2BAcC3YUb0pcrLuejo1nuQKmjtCGUKGYxzMsJgReTXSOvKI0OUQddOkko7-a8rXCPjoHXA6XA2n3ssYnNwENw3ejOYTM9OcpBNrNO7Qg',
    duration: '0:00'
  };

  return (
    <main className="flex-grow w-full max-w-[1200px] mx-auto px-gutter py-md md:py-lg grid grid-cols-1 lg:grid-cols-12 gap-md md:gap-lg">
      {/* Header Section */}
      <div className="lg:col-span-12 text-center mb-8 relative">
        <svg
          className="absolute top-0 left-10 md:left-20 w-12 h-12 text-primary-container -z-10 opacity-70 pointer-events-none"
          fill="none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="currentColor"></path>
        </svg>
        <svg
          className="absolute bottom-0 right-10 md:right-20 w-8 h-8 text-secondary-container -z-10 opacity-70 rotate-12 pointer-events-none"
          fill="none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeDasharray="10 10" strokeWidth="5"></circle>
        </svg>
        <h1 className="font-display-mobile text-display-mobile md:font-display-lg md:text-display-lg text-on-surface mb-2">
          Some feelings sound better as songs. <span className="text-primary">🎧</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Curate a custom playlist that tells your story. Add personal notes to every track.
        </p>
      </div>

      {/* Left Column: Playlist Setup & Search (7 cols) */}
      <div className="lg:col-span-7 flex flex-col gap-md">
        {/* Playlist Details Card */}
        <section className="glass-panel ambient-shadow rounded-xl p-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              edit_square
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Playlist Details</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Cover Image Upload (Polaroid style) */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div 
                onClick={() => alert("Photo uploader opened: Choose personal album art!")}
                className="w-full aspect-[4/5] bg-surface-container rounded-lg p-2 pb-8 shadow-sm relative group cursor-pointer border border-outline-variant/30 flex flex-col justify-between"
              >
                <div className="w-full h-full bg-surface-variant rounded-sm flex flex-col items-center justify-center overflow-hidden relative">
                  <span className="material-symbols-outlined text-outline-variant text-4xl mb-2 group-hover:scale-110 transition-transform">
                    add_a_photo
                  </span>
                  <span className="font-label-caps text-label-caps text-outline-variant">Add Cover</span>
                </div>
                <div className="text-center pt-2 font-accent-text text-on-surface text-sm opacity-60">Tap to upload</div>
                {/* Tape detail */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-200/50 backdrop-blur-sm rotate-[-3deg] sticker-shadow rounded-sm z-10"></div>
              </div>
            </div>

            {/* Input Fields */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 justify-center">
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1 ml-2">
                  Playlist Name
                </label>
                <input
                  type="text"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                  className="w-full gift-input rounded-lg px-4 py-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Songs That Remind Me of You 💗"
                />
              </div>

              <div>
                <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1 ml-2">
                  For Who?
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full gift-input rounded-lg px-4 py-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="e.g., Sarah"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search & Add Songs */}
        <section className="glass-panel ambient-shadow rounded-xl p-md flex-grow flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              queue_music
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Add Tracks</h2>
          </div>

          <div className="relative mb-6">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full gift-input rounded-full pl-12 pr-4 py-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none"
              placeholder="Search for songs, artists (e.g. Taylor Swift, JVKE, Fleetwood Mac)..."
            />
          </div>

          {/* Quick Suggestions if searching */}
          {searchQuery.trim() && (
            <div className="mb-4 bg-surface-container-lowest p-3 rounded-xl border border-primary/30 space-y-2">
              <p className="font-label-caps text-xs text-primary font-bold">Suggested tracks matching "{searchQuery}":</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { title: `${searchQuery} (Acoustic)`, artist: 'Artist' },
                  { title: `Golden Hour`, artist: 'JVKE' },
                  { title: `Until I Found You`, artist: 'Stephen Sanchez' }
                ].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleAddSuggested(s.title, s.artist)}
                    className="text-xs bg-surface-container hover:bg-primary-container px-3 py-1.5 rounded-full flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">add</span> {s.title} • {s.artist}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Added Songs List */}
          <div className="flex-grow overflow-y-auto pr-2 space-y-4 max-h-[400px] custom-scrollbar">
            {tracks.map((track, idx) => (
              <div
                key={track.id}
                onClick={() => setCurrentTrackIndex(idx)}
                className={`bg-surface-container-lowest border rounded-lg p-3 flex flex-col gap-3 group transition-colors cursor-pointer ${
                  currentTrackIndex === idx ? 'border-primary shadow-sm' : 'border-outline-variant/30 hover:border-primary-container'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-surface-variant rounded-md overflow-hidden relative shadow-sm shrink-0">
                      <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-body-sm text-body-sm font-bold text-on-surface line-clamp-1">
                        {track.title}
                      </h4>
                      <p className="font-label-caps text-label-caps text-on-surface-variant line-clamp-1">
                        {track.artist}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (currentTrackIndex === idx) setIsPlaying(!isPlaying);
                        else {
                          setCurrentTrackIndex(idx);
                          setIsPlaying(true);
                        }
                      }}
                      className="p-2 text-primary hover:bg-primary-container rounded-full"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {currentTrackIndex === idx && isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeTrack(track.id);
                      }}
                      className="text-error opacity-50 hover:opacity-100 hover:bg-error-container p-2 rounded-full transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>

                {/* Note Input */}
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined absolute left-3 top-3 text-secondary-fixed-dim text-[16px]">
                    sticky_note_2
                  </span>
                  <textarea
                    value={track.note}
                    onChange={(e) => updateTrackNote(track.id, e.target.value)}
                    className="w-full bg-surface-container-low rounded-md pl-9 pr-3 py-2 text-sm border-none focus:ring-1 focus:ring-secondary resize-none font-accent-text text-on-surface"
                    placeholder="Add a personal note for this track..."
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column: Player Preview & Actions (5 cols) */}
      <div className="lg:col-span-5 flex flex-col gap-md">
        <div className="sticky top-[100px] flex flex-col gap-md">
          {/* Player Preview Card */}
          <section className="glass-panel ambient-shadow rounded-xl p-6 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-container/20 to-transparent -z-10"></div>
            <h3 className="font-label-caps text-label-caps text-secondary tracking-widest mb-6">PREVIEW</h3>

            {/* Player UI */}
            <div className="w-full max-w-[280px] bg-surface-container-lowest rounded-[2rem] p-4 pb-6 shadow-[0_10px_30px_rgba(79,64,100,0.1)] border border-outline-variant/20 mb-4 relative z-10">
              {/* Mini Sticker */}
              <div className="absolute -top-3 -right-2 bg-tertiary-container text-on-tertiary-container font-label-caps text-[10px] px-2 py-1 rounded-full sticker-shadow rotate-6 font-bold">
                For {recipient || 'You'}
              </div>

              {/* Album Art */}
              <div className="w-full aspect-square bg-surface-variant rounded-xl mb-6 shadow-inner overflow-hidden relative">
                <img
                  src={activeTrack.image}
                  alt={activeTrack.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : ''}`}
                />
              </div>

              {/* Track Info */}
              <div className="mb-6">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-1 truncate">
                  {activeTrack.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {activeTrack.artist}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full flex items-center gap-2 mb-6 px-2">
                <span className="text-[10px] font-label-caps text-on-surface-variant">
                  {isPlaying ? '1:24' : '0:00'}
                </span>
                <div className="flex-grow h-1.5 bg-surface-variant rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: isPlaying ? '48%' : '10%' }}
                  ></div>
                </div>
                <span className="text-[10px] font-label-caps text-on-surface-variant">
                  {activeTrack.duration}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 text-on-surface">
                <button 
                  onClick={() => {
                    if (tracks.length > 0) {
                      setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
                    }
                  }}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[24px]">skip_previous</span>
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <button 
                  onClick={() => {
                    if (tracks.length > 0) {
                      setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
                    }
                  }}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[24px]">skip_next</span>
                </button>
              </div>
            </div>

            {/* Floating Note Preview */}
            <div className="w-full max-w-[280px] bg-yellow-50 p-3 rounded-lg border border-yellow-200 shadow-sm relative rotate-1">
              <span className="material-symbols-outlined absolute top-2 right-2 text-yellow-400 text-sm opacity-50">
                push_pin
              </span>
              <p className="font-accent-text text-sm text-on-surface/80 text-left italic">
                "{activeTrack.note || 'No note added yet'}"
              </p>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {savedNotification && (
              <div className="bg-primary text-on-primary p-3 rounded-2xl text-xs font-label-caps flex items-center justify-center gap-2 animate-fadeIn shadow-md">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>{savedNotification.message}</span>
              </div>
            )}
            <button 
              disabled={isSaving}
              onClick={() => handleSavePlaylist(false)}
              className="w-full bg-primary-container text-on-primary-container font-headline-md text-base py-4 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 font-bold disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-[20px]">magic_button</span>
              {isSaving ? 'Saving to Cloud... ⏳' : 'Finalize Playlist'}
            </button>
            <button 
              disabled={isSaving}
              onClick={() => handleSavePlaylist(true)}
              className="w-full bg-surface-container text-secondary font-body-sm font-bold py-3 rounded-full border border-outline-variant/30 hover:bg-surface-container-high transition-colors disabled:opacity-60"
            >
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
