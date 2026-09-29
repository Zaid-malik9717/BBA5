import { db } from '../storage/db.js';

const SCRAP_TEMPLATES = [
  {
    id: 'tmpl-1',
    name: 'Sunny Laughs',
    category: 'Our Memories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa94qwjL098W5Gwenrjsm6Gf2-NcsJU6qx5urin2Y4kn5ePUzvtCpGPBWyqK-GnEK7GBMXwipTyyHPfH4Y-FWjeqA9xBaFtwxUjJTpujEfJ53yhlsSjD3R7kq8L41VNliIu3xKJ77esNS-aOhag2dIlO9mbiqfbH9AAp_sQuPaXt6FagUb8Lvh7tzioYXSDJXfEMJCnUJVnsuHyYuF88CpOcf2Cai3kI89Su2R3YRr2Ht32cthzMy3jQ',
    caption: "Summer '23 ✨"
  },
  {
    id: 'tmpl-2',
    name: 'Picnic Afternoon',
    category: 'Our Memories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZzVZ61EUEkbPCgICYbvVGndVsChbIOmw0-HLX9liREnTuTLvY2TjuHQ5ToVJhLNLesLqTgO3edQ65jl60GTl_X2FdDlykTo9JiK2mEkT1RBcUxZrgXI_IpTj_Ug5spx6yp1p9vdz3J1IsCimswVy6vCY6k20DumW4w1ASG1IMnK0guB7raZ1wMTBW7PAlwUzcA7C7MXoUSfJYdEPDy87H427NJw3mHXhL_8MtCfZ9H4BVHxe4IyiJrw',
    caption: 'Sunshine & Smiles ☀️'
  },
  {
    id: 'tmpl-3',
    name: 'Special Celebration',
    category: 'Birthday',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHnvRuUSMmf8rHWz4668ek8KXcdAjcGiy5pNn-ShF9QQWPo9gffqpHxNeMoACNAZ3NooY_CCm_wdkJX0TSctYT6GgD_PC4E0qORNKDKOkLnVB69j6SnHEIOjNrluNywlRcghctiY5FAzPWEIx0rWIKRVVPq1fbD4hMfSkJvZaZw3A5HYotEaKdoVlS8DQYdrjp0lybfqFiIkQgn9dP8-OyFCQ_Pdb9nNf7_yQhHoxZ03eTw2BJpX53-g',
    caption: 'Another Year Cooler 🎂'
  },
  {
    id: 'tmpl-4',
    name: 'Timeless Bouquet',
    category: 'Anniversary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaRUc8tKgRCH3R48PdM0wnlAU48lhvIcwOD6eqOeYOY58WM5ifkajSvWpZC-KywZjYXmItqCVHERkG06utnT53yxu6BphmAAg-_vyXAM-jwqHRb-qORU2Mgub58rE08ANPz3Gi_u25EHbZXPJehQNYhR_7pc2LQAO5Fuw4sQK3ZnsIVQtW5PVW5xLi9fMWHgWqF6GUO_QZtdWP8VePALZa0ht5BGLQ8V_rpJ4W3GtJj--SE3CEMG3EQ',
    caption: 'To Infinite Love 🌹'
  }
];

export const scrapController = {
  getTemplates(req, res) {
    const { category } = req.query;
    let list = SCRAP_TEMPLATES;
    if (category && category !== 'Our Memories') {
      list = list.filter((t) => t.category === category);
    }
    res.json({ success: true, count: list.length, data: list });
  },

  getScraps(req, res) {
    try {
      const scraps = db.findAll('scraps');
      res.json({ success: true, count: scraps.length, data: scraps });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getScrapById(req, res) {
    try {
      const scrap = db.findById('scraps', req.params.id);
      if (!scrap) {
        return res.status(404).json({ success: false, message: 'Memory not found' });
      }
      res.json({ success: true, data: scrap });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  createScrap(req, res) {
    try {
      const {
        title = 'Untitled Memory',
        category = 'Our Memories',
        caption = '',
        selectedPhoto = '',
        activeSticker = 'favorite',
        frameColor = 'white'
      } = req.body;

      const newScrap = db.create('scraps', {
        title,
        category,
        caption,
        selectedPhoto,
        activeSticker,
        frameColor
      });

      res.status(201).json({
        success: true,
        message: 'Scrapbook memory saved to your collection! ✨',
        data: newScrap
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  deleteScrap(req, res) {
    try {
      const deleted = db.deleteById('scraps', req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'Memory not found' });
      }
      res.json({ success: true, message: 'Memory deleted' });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
