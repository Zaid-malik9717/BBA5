import { Router } from 'express';
import { upload } from '../middleware/upload.js';
import { uploadController } from '../controllers/uploadController.js';

const router = Router();

router.post('/', upload.single('photo'), uploadController.uploadFile);

export default router;
