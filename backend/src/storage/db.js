import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { config } from '../config/index.js';

// Ensure data & upload directories exist
if (!fs.existsSync(config.dataDir)) {
  fs.mkdirSync(config.dataDir, { recursive: true });
}
if (!fs.existsSync(config.uploadDir)) {
  fs.mkdirSync(config.uploadDir, { recursive: true });
}

// Initial seed collections
const SEED_DATA = {
  gifts: [
    {
      id: 'gift-seed-1',
      shareCode: 'sarah-alex-hug',
      recipientName: 'Sarah & Alex',
      senderName: 'Maya',
      noteMessage: 'Thank you for always being my sunshine. Happy anniversary! 🎂✨',
      selectedMusic: 'Golden Hour - JVKE',
      selectedSticker: '💖',
      photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw',
      status: 'sent',
      createdAt: new Date().toISOString()
    }
  ],
  playlists: [
    {
      id: 'playlist-seed-1',
      playlistName: 'Songs That Remind Me of You 💗',
      recipient: 'Sarah',
      sender: 'Alex',
      createdAt: new Date().toISOString(),
      tracks: [
        {
          id: 'trk-1',
          title: 'Late Night Talking',
          artist: 'Harry Styles',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDJtRUewfzyPHN0Wxi_ZFOIG5Sq6J6jbDTHnLZKqT3qgVcwtWZM7HlB2tWHc_9A2E9gneb8VhLlTQVa-YZAI0mLSVOTy0kQa4RAUE6teykZcCfA3FGlzw0dmVbvA_rSrp-_ZyLPj5hQ0Bak2BAcC3YUb0pcrLuejo1nuQKmjtCGUKGYxzMsJgReTXSOvKI0OUQddOkko7-a8rXCPjoHXA6XA2n3ssYnNwENw3ejOYTM9OcpBNrNO7Qg',
          note: 'This reminds me of our late-night calls when we first met.',
          duration: '2:57'
        },
        {
          id: 'trk-2',
          title: 'Yellow',
          artist: 'Coldplay',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACivTAFgaO_KVtvxyD_tTUXTfUWgZwwV2TSjAZuNkJCgTZl05ySd81YZFhZjNjiSXbRbEKniPdsf2HIDZfNiDPmgu3g9ka_oGSJLZ1YorknaDmKfJts4i5vMWpNAIlhWq8MrwbAu5Y6uyav4eC-_MSVVAQ2OYUDOb3Vgc6153bGr3Y6BQdbwsPX3729ah6mutFBhTEu1XZKeWzJi5wDzp6qyyvZO0jyTW2r7sp41pfbxRunN1593ByKw',
          note: 'Look at the stars, look how they shine for you ⭐',
          duration: '4:29'
        }
      ]
    }
  ],
  bouquets: [
    {
      id: 'bouquet-seed-1',
      flowerId: 'roses',
      flowerName: 'Red Roses',
      wrappingColor: 'pink',
      ribbonColor: 'brown',
      recipientName: 'Sarah',
      noteMessage: 'For Sarah 🌷\nMay your days bloom with as much joy as you bring to mine!',
      createdAt: new Date().toISOString()
    }
  ],
  scraps: [
    {
      id: 'scrap-seed-1',
      title: 'Sunny Laughs',
      category: 'Our Memories',
      caption: "Summer '23 ✨",
      selectedPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa94qwjL098W5Gwenrjsm6Gf2-NcsJU6qx5urin2Y4kn5ePUzvtCpGPBWyqK-GnEK7GBMXwipTyyHPfH4Y-FWjeqA9xBaFtwxUjJTpujEfJ53yhlsSjD3R7kq8L41VNliIu3xKJ77esNS-aOhag2dIlO9mbiqfbH9AAp_sQuPaXt6FagUb8Lvh7tzioYXSDJXfEMJCnUJVnsuHyYuF88CpOcf2Cai3kI89Su2R3YRr2Ht32cthzMy3jQ',
      activeSticker: 'favorite',
      frameColor: 'white',
      createdAt: new Date().toISOString()
    }
  ],
  giftcards: [
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
  ],
  songs: [
    {
      id: 'song-1',
      title: 'Late Night Talking',
      artist: 'Harry Styles',
      duration: '2:57',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDJtRUewfzyPHN0Wxi_ZFOIG5Sq6J6jbDTHnLZKqT3qgVcwtWZM7HlB2tWHc_9A2E9gneb8VhLlTQVa-YZAI0mLSVOTy0kQa4RAUE6teykZcCfA3FGlzw0dmVbvA_rSrp-_ZyLPj5hQ0Bak2BAcC3YUb0pcrLuejo1nuQKmjtCGUKGYxzMsJgReTXSOvKI0OUQddOkko7-a8rXCPjoHXA6XA2n3ssYnNwENw3ejOYTM9OcpBNrNO7Qg'
    },
    {
      id: 'song-2',
      title: 'Yellow',
      artist: 'Coldplay',
      duration: '4:29',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACivTAFgaO_KVtvxyD_tTUXTfUWgZwwV2TSjAZuNkJCgTZl05ySd81YZFhZjNjiSXbRbEKniPdsf2HIDZfNiDPmgu3g9ka_oGSJLZ1YorknaDmKfJts4i5vMWpNAIlhWq8MrwbAu5Y6uyav4eC-_MSVVAQ2OYUDOb3Vgc6153bGr3Y6BQdbwsPX3729ah6mutFBhTEu1XZKeWzJi5wDzp6qyyvZO0jyTW2r7sp41pfbxRunN1593ByKw'
    },
    {
      id: 'song-3',
      title: 'Golden Hour',
      artist: 'JVKE',
      duration: '3:29',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3uolfm9NP9ZZ2iRG-29rQe5_x5ytK_5qw_zO77pUS840VHVoCHV4MXIC6t3ASTYL6CfyQGnb6SdjqV9eWd7IwSO3jgOuQcZWrYmZ_kZrdxPaF_B5jOoptV1h6QdDr3oIbhmHDjZckiMGGzM-l3nyk-RHnGsLAXyfqWSXeFXavQPyAKkPuivvMfTB-0n8j5fAzdFGqINPvdd82iS69Pq9G2W9NEqIg5UZ5lONDi5206YOC2W_2Uw5m7Q'
    },
    {
      id: 'song-4',
      title: 'Until I Found You',
      artist: 'Stephen Sanchez',
      duration: '2:58',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ'
    },
    {
      id: 'song-5',
      title: 'Lover',
      artist: 'Taylor Swift',
      duration: '3:41',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa94qwjL098W5Gwenrjsm6Gf2-NcsJU6qx5urin2Y4kn5ePUzvtCpGPBWyqK-GnEK7GBMXwipTyyHPfH4Y-FWjeqA9xBaFtwxUjJTpujEfJ53yhlsSjD3R7kq8L41VNliIu3xKJ77esNS-aOhag2dIlO9mbiqfbH9AAp_sQuPaXt6FagUb8Lvh7tzioYXSDJXfEMJCnUJVnsuHyYuF88CpOcf2Cai3kI89Su2R3YRr2Ht32cthzMy3jQ'
    }
  ],
  orders: []
};

// Internal cache and atomic write helpers
const getFilePath = (collectionName) => path.join(config.dataDir, `${collectionName}.json`);

export const db = {
  getCollection(collectionName) {
    const file = getFilePath(collectionName);
    if (!fs.existsSync(file)) {
      const initial = SEED_DATA[collectionName] || [];
      this.saveCollection(collectionName, initial);
      return initial;
    }
    try {
      const content = fs.readFileSync(file, 'utf-8');
      return JSON.parse(content || '[]');
    } catch (err) {
      console.error(`Error reading ${collectionName}.json:`, err);
      return [];
    }
  },

  saveCollection(collectionName, data) {
    const file = getFilePath(collectionName);
    const tempFile = `${file}.${crypto.randomBytes(4).toString('hex')}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempFile, file);
  },

  findAll(collectionName, filterFn = null) {
    const list = this.getCollection(collectionName);
    return filterFn ? list.filter(filterFn) : list;
  },

  findById(collectionName, id) {
    const list = this.getCollection(collectionName);
    return list.find((item) => String(item.id) === String(id)) || null;
  },

  create(collectionName, item) {
    const list = this.getCollection(collectionName);
    const newItem = {
      id: item.id || `${collectionName}-${crypto.randomBytes(6).toString('hex')}`,
      createdAt: new Date().toISOString(),
      ...item
    };
    list.unshift(newItem);
    this.saveCollection(collectionName, list);
    return newItem;
  },

  update(collectionName, id, updates) {
    const list = this.getCollection(collectionName);
    const index = list.findIndex((item) => String(item.id) === String(id));
    if (index === -1) return null;
    const updated = {
      ...list[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    list[index] = updated;
    this.saveCollection(collectionName, list);
    return updated;
  },

  deleteById(collectionName, id) {
    const list = this.getCollection(collectionName);
    const initialLen = list.length;
    const filtered = list.filter((item) => String(item.id) !== String(id));
    if (filtered.length === initialLen) return false;
    this.saveCollection(collectionName, filtered);
    return true;
  }
};

// Pre-initialize seed files on import
Object.keys(SEED_DATA).forEach((col) => {
  db.getCollection(col);
});
