import crypto from 'crypto';
import { db } from '../storage/db.js';

export const giftCardController = {
  getCards(req, res) {
    try {
      const { category } = req.query;
      let cards = db.findAll('giftcards');
      if (category && category !== 'All') {
        cards = cards.filter((c) => c.category === category);
      }
      res.json({ success: true, count: cards.length, data: cards });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  orderCard(req, res) {
    try {
      const {
        cardId,
        cardTitle = 'Digital Gift Card',
        amount = 500,
        personalNote = '',
        deliveryDate = new Date().toISOString().split('T')[0],
        instant = false,
        recipientEmail = ''
      } = req.body;

      const voucherCode = `DGP-${crypto.randomBytes(3).toString('hex').toUpperCase()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;

      const order = db.create('orders', {
        type: 'giftcard',
        cardId,
        cardTitle,
        amount: Number(amount) || 500,
        personalNote,
        deliveryDate,
        instant,
        recipientEmail,
        voucherCode,
        status: instant ? 'delivered' : 'scheduled'
      });

      res.status(201).json({
        success: true,
        message: instant 
          ? `Instant voucher code ${voucherCode} issued!`
          : `Order placed for delivery on ${deliveryDate}`,
        data: order,
        voucherCode
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getOrders(req, res) {
    try {
      const orders = db.findAll('orders');
      res.json({ success: true, count: orders.length, data: orders });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
