import { Router } from 'express';
import { scrapController } from '../controllers/scrapController.js';

const router = Router();

router.get('/', scrapController.getScraps);
router.get('/templates', scrapController.getTemplates);
router.post('/', scrapController.createScrap);
router.get('/:id', scrapController.getScrapById);
router.delete('/:id', scrapController.deleteScrap);

export default router;
