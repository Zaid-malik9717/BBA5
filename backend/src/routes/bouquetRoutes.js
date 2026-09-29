import { Router } from 'express';
import { bouquetController } from '../controllers/bouquetController.js';

const router = Router();

router.get('/', bouquetController.getBouquets);
router.get('/catalog', bouquetController.getCatalog);
router.post('/', bouquetController.sendBouquet);
router.get('/:id', bouquetController.getBouquetById);

export default router;
