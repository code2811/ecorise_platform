// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Weather endpoint
app.post('/api/weather', (req, res) => {
  const forecast = `
Tomorrow: Sunny, 26°C - 30°C
Day After: Partly Cloudy, 25°C - 29°C
3 Days Later: Light Rain, 22°C - 27°C
  `;
  res.json({ forecast });
});

// AI Advisor endpoint
app.post('/api/chat', (req, res) => {
  const msg = (req.body.message || '').toLowerCase();
  const s = req.body.sensorData || {};

  let response = "Hello! I can help with farming advice.";

  if (msg.includes('plant') || msg.includes('crop')) {
    response = `With soil moisture around ${s.soilMoisture}% and pH ${s.soilPH}, tomatoes, peppers, and leafy greens are good options.`;
  } else if (msg.includes('irrigation') || msg.includes('water')) {
    if (s.soilMoisture < 50) {
      response = "Soil is getting dry, schedule irrigation within the next few hours.";
    } else {
      response = "Soil moisture looks fine, no irrigation needed right now.";
    }
  } else if (msg.includes('pest') || msg.includes('insect')) {
    response = "Scout your field for aphids and caterpillars; use organic controls like neem or soap spray first.";
  } else if (msg.includes('fertilizer') || msg.includes('compost')) {
    response = "Use compost or well‑decomposed manure to slowly improve soil organic matter and buffer pH.";
  }

  res.json({ response });
});

// Start server
app.listen(port, () => {
  console.log(`EcoRise backend listening at http://localhost:${port}`);
});
