import { db } from '../storage/db.js';

const BOUQUET_CATALOG = {
  flowers: [
    { id: 'roses', name: 'Roses', emoji: '🌹', description: 'Classic eternal love' },
    { id: 'tulips', name: 'Tulips', emoji: '🌷', description: 'Grace and joy' },
    { id: 'sunflowers', name: 'Sunflowers', emoji: '🌻', description: 'Warmth and adoration' },
    { id: 'daisies', name: 'Daisies', emoji: '🌼', description: 'Innocence and new beginnings' },
    { id: 'lavender', name: 'Lavender', emoji: '🪻', description: 'Serenity and calm thoughts' }
  ],
  wrappings: [
    { id: 'pink', name: 'Blush Pink', colorCode: '#F8BBD0' },
    { id: 'green', name: 'Sage Green', colorCode: '#C8E6C9' },
    { id: 'yellow', name: 'Warm Cream', colorCode: '#FFF9C4' },
    { id: 'lilac', name: 'Soft Lilac', colorCode: '#E1BEE7' }
  ],
  ribbons: [
    { id: 'brown', name: 'Vintage Craft Twine' },
    { id: 'red', name: 'Crimson Satin' },
    { id: 'purple', name: 'Velvet Plum' },
    { id: 'gold', name: 'Golden Silk' }
  ]
};

export const bouquetController = {
  getCatalog(req, res) {
    res.json({ success: true, data: BOUQUET_CATALOG });
  },

  getBouquets(req, res) {
    try {
      const bouquets = db.findAll('bouquets');
      res.json({ success: true, count: bouquets.length, data: bouquets });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getBouquetById(req, res) {
    try {
      const bouquet = db.findById('bouquets', req.params.id);
      if (!bouquet) {
        return res.status(404).json({ success: false, message: 'Bouquet not found' });
      }
      res.json({ success: true, data: bouquet });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  sendBouquet(req, res) {
    try {
      const {
        flowerId = 'roses',
        flowerName = 'Roses',
        wrappingColor = 'pink',
        ribbonColor = 'brown',
        recipientName = 'Someone Special',
        senderName = 'Someone who cares',
        noteMessage = 'For you 🌷 May your days bloom with as much joy as you bring to mine!'
      } = req.body;

      const bouquet = db.create('bouquets', {
        flowerId,
        flowerName,
        wrappingColor,
        ribbonColor,
        recipientName,
        senderName,
        noteMessage,
        status: 'delivered'
      });

      res.status(201).json({
        success: true,
        message: `Virtual bouquet delivered to ${recipientName} 💐!`,
        data: bouquet
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
