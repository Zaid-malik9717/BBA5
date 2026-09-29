import crypto from 'crypto';
import { db } from '../storage/db.js';

export const giftController = {
  getGifts(req, res) {
    try {
      const gifts = db.findAll('gifts');
      res.json({ success: true, count: gifts.length, data: gifts });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getGiftById(req, res) {
    try {
      const gift = db.findById('gifts', req.params.id);
      if (!gift) {
        return res.status(404).json({ success: false, message: 'Gift not found' });
      }
      res.json({ success: true, data: gift });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getGiftByShareCode(req, res) {
    try {
      const { code } = req.params;
      const gifts = db.findAll('gifts', (g) => g.shareCode === code);
      if (!gifts.length) {
        return res.status(404).json({ success: false, message: 'Shared gift not found' });
      }
      res.json({ success: true, data: gifts[0] });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  createGift(req, res) {
    try {
      const {
        recipientName,
        senderName = 'Someone Special',
        noteMessage = '',
        selectedMusic = 'Golden Hour - JVKE',
        selectedSticker = '💖',
        photoUrl = '',
        status = 'draft'
      } = req.body;

      if (!recipientName) {
        return res.status(400).json({ success: false, message: 'Recipient name is required' });
      }

      const shareCode = crypto.randomBytes(4).toString('hex');
      const newGift = db.create('gifts', {
        recipientName,
        senderName,
        noteMessage,
        selectedMusic,
        selectedSticker,
        photoUrl,
        status,
        shareCode
      });

      res.status(201).json({
        success: true,
        message: 'Gift created successfully',
        data: newGift,
        shareUrl: `/view-gift/${shareCode}`
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  updateGift(req, res) {
    try {
      const updated = db.update('gifts', req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Gift not found' });
      }
      res.json({ success: true, message: 'Gift updated successfully', data: updated });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  sendGift(req, res) {
    try {
      const gift = db.findById('gifts', req.params.id);
      if (!gift) {
        return res.status(404).json({ success: false, message: 'Gift not found' });
      }

      const shareCode = gift.shareCode || crypto.randomBytes(4).toString('hex');
      const updated = db.update('gifts', req.params.id, {
        status: 'sent',
        shareCode,
        sentAt: new Date().toISOString()
      });

      res.json({
        success: true,
        message: `Gift successfully sent to ${updated.recipientName}!`,
        data: updated,
        shareCode,
        shareUrl: `/view-gift/${shareCode}`
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  deleteGift(req, res) {
    try {
      const success = db.deleteById('gifts', req.params.id);
      if (!success) {
        return res.status(404).json({ success: false, message: 'Gift not found' });
      }
      res.json({ success: true, message: 'Gift deleted' });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
