import { Router } from 'express';
import { playlistController } from '../controllers/playlistController.js';

const router = Router();

router.get('/', playlistController.getPlaylists);
router.post('/', playlistController.createPlaylist);
router.get('/songs', playlistController.getCatalogSongs);
router.get('/:id', playlistController.getPlaylistById);
router.delete('/:id', playlistController.deletePlaylist);

export default router;
