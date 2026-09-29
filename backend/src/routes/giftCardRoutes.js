import { Router } from 'express';
import { giftCardController } from '../controllers/giftCardController.js';

const router = Router();

router.get('/', giftCardController.getCards);
router.post('/order', giftCardController.orderCard);
router.get('/orders', giftCardController.getOrders);

export default router;
