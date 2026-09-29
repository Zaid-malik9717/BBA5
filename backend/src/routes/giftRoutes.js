import { Router } from 'express';
import { giftController } from '../controllers/giftController.js';

const router = Router();

router.get('/', giftController.getGifts);
router.post('/', giftController.createGift);
router.get('/share/:code', giftController.getGiftByShareCode);
router.get('/:id', giftController.getGiftById);
router.put('/:id', giftController.updateGift);
router.post('/:id/send', giftController.sendGift);
router.delete('/:id', giftController.deleteGift);

export default router;
