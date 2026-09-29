import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/index.js';
import apiRoutes from './routes/index.js';

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Allow development frontend requests
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded files
app.use('/uploads', express.static(config.uploadDir));

// API Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Digital Gifts Paradise API ✨',
    health: '/api/health',
    version: '1.0.0'
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API Route ${req.method} ${req.originalUrl} not found`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start server
app.listen(config.port, () => {
  console.log(`🌸 Digital Gifts Paradise API running on http://localhost:${config.port}`);
  console.log(`✨ Environment: ${config.nodeEnv}`);
});

export default app;
