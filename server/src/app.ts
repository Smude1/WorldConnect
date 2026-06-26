import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// API route groups placeholders
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
