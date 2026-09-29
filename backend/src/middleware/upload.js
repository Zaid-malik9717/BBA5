import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { config } from '../config/index.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueSuffix = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    cb(null, `gift-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|svg/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype.toLowerCase();
  if (allowedTypes.test(ext) && (allowedTypes.test(mime) || mime === 'image/svg+xml')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (JPG, PNG, GIF, WEBP, SVG) are allowed'));
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter
});
