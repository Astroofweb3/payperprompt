require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const CIRCLE_API_KEY = process.env.CIRCLE_API_KEY;
const payments = [];

app.post('/api/prompt', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' });

  const cost = (0.000001 * prompt.length).toFixed(6);
  const payment = {
    id: Date.now(),
    prompt: prompt,
    cost: cost,
    status: 'settled',
    timestamp: new Date().toISOString()
  };
  payments.push(payment);

  res.json({
    response: `Agent processed: "${prompt}"`,
    payment: payment
  });
});

app.get('/api/payments', (req, res) => {
  res.json(payments);
});

app.listen(process.env.PORT, () => {
  console.log(`PayPerPrompt running on port ${process.env.PORT}`);
});
