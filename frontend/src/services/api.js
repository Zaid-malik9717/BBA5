// API Client for Digital Gifts Paradise
const getBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/+$/, '');
  }
  // If running in production (e.g. Vercel), default to deployed Render backend
  if (import.meta.env.PROD) {
    return 'https://bba5-backend.onrender.com';
  }
  // Local development default
  return 'http://localhost:5000';
};

export const API_BASE_URL = getBaseUrl();

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...options.headers,
    },
  };

  try {
    const res = await fetch(url, config);
    const data = await res.json().catch(() => null);

    if (!res.ok) {
      const errorMsg = data?.message || `Request failed with status ${res.status}`;
      throw new Error(errorMsg);
    }

    return data;
  } catch (err) {
    console.error(`API Error [${endpoint}]:`, err);
    throw err;
  }
}

export const api = {
  // Health
  checkHealth() {
    return request('/api/health');
  },

  // Gifts
  getGifts() {
    return request('/api/gifts');
  },
  getGiftById(id) {
    return request(`/api/gifts/${id}`);
  },
  getGiftByShareCode(code) {
    return request(`/api/gifts/share/${code}`);
  },
  createGift(giftData) {
    return request('/api/gifts', {
      method: 'POST',
      body: JSON.stringify(giftData),
    });
  },
  updateGift(id, giftData) {
    return request(`/api/gifts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(giftData),
    });
  },
  sendGift(id) {
    return request(`/api/gifts/${id}/send`, {
      method: 'POST',
    });
  },

  // Playlists
  getPlaylists() {
    return request('/api/playlists');
  },
  getPlaylistById(id) {
    return request(`/api/playlists/${id}`);
  },
  createPlaylist(playlistData) {
    return request('/api/playlists', {
      method: 'POST',
      body: JSON.stringify(playlistData),
    });
  },
  getCatalogSongs(search = '') {
    const query = search ? `?search=${encodeURIComponent(search)}` : '';
    return request(`/api/playlists/songs${query}`);
  },

  // Bouquets
  getBouquetCatalog() {
    return request('/api/bouquets/catalog');
  },
  getBouquets() {
    return request('/api/bouquets');
  },
  sendBouquet(bouquetData) {
    return request('/api/bouquets', {
      method: 'POST',
      body: JSON.stringify(bouquetData),
    });
  },

  // Scraps
  getScrapTemplates(category = '') {
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    return request(`/api/scraps/templates${query}`);
  },
  getScraps() {
    return request('/api/scraps');
  },
  createScrap(scrapData) {
    return request('/api/scraps', {
      method: 'POST',
      body: JSON.stringify(scrapData),
    });
  },

  // Gift Cards
  getGiftCards(category = '') {
    const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    return request(`/api/giftcards${query}`);
  },
  orderGiftCard(orderData) {
    return request('/api/giftcards/order', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },
  getGiftCardOrders() {
    return request('/api/giftcards/orders');
  },

  // Upload Photo
  uploadPhoto(file) {
    const formData = new FormData();
    formData.append('photo', file);
    return request('/api/upload', {
      method: 'POST',
      body: formData,
    });
  },

  // Helper to get full asset URL (for uploaded files)
  resolveMediaUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `${API_BASE_URL}${path}`;
  }
};

