import { Router } from 'express';
import giftRoutes from './giftRoutes.js';
import playlistRoutes from './playlistRoutes.js';
import bouquetRoutes from './bouquetRoutes.js';
import scrapRoutes from './scrapRoutes.js';
import giftCardRoutes from './giftCardRoutes.js';
import uploadRoutes from './uploadRoutes.js';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Digital Gifts Paradise Backend',
    timestamp: new Date().toISOString(),
    endpoints: {
      gifts: '/api/gifts',
      playlists: '/api/playlists',
      bouquets: '/api/bouquets',
      scraps: '/api/scraps',
      giftcards: '/api/giftcards',
      upload: '/api/upload'
    }
  });
});

router.use('/gifts', giftRoutes);
router.use('/playlists', playlistRoutes);
router.use('/bouquets', bouquetRoutes);
router.use('/scraps', scrapRoutes);
router.use('/giftcards', giftCardRoutes);
router.use('/upload', uploadRoutes);

export default router;
