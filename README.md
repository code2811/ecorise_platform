# ecorise_platform

EcoRise is a **web-based platform for Rwandan farmers** that combines real-time sensor data, carbon credit tracking, and an AI agricultural advisor to support sustainable farming and climate-smart decision-making.

---

## 🚀 Features

### Dashboard
- **Live Sensor Data**: Soil moisture, pH, temperature, and air humidity.
- **AI Weather Forecast**: 7-day forecast with temperature, rainfall probability, and farming recommendations.
- **Recommendations**: Automated advice based on current conditions.

### Carbon Credits
- Track contributions from:
  - Trees planted
  - Composting
  - No-till farming
- View **total carbon credits** and estimated monetary value.
- Tips on how to earn more credits.

### AI Agricultural Advisor
- Chat with an AI advisor for:
  - Best crops for current conditions
  - Irrigation and soil advice
  - Pest and disease management
  - Sustainable farming practices
- Advisor uses current sensor data for tailored guidance.

---

## 💻 Tech Stack
- **Frontend:** HTML, TailwindCSS, JavaScript  
- **AI Integration:** Anthropic Claude API (weather forecast & chat advisor)  
- **Deployment:** Fully frontend, no backend required  

---

## ⚡ Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd ecorise
Open in VS Code and use Live Server:

Right-click index.html → Open with Live Server

Set up your API key (for AI services):

const API_KEY = 'YOUR_API_KEY_HERE';


Replace 'YOUR_API_KEY_HERE' with your Anthropic Claude API key.

Use the platform

Click tabs to switch between Dashboard, Carbon Credits, and AI Advisor

Click Get Forecast to fetch weather

Type questions into AI Advisor and press Enter or click Send

📌 Notes

Sensor data is simulated for demo purposes.

Keep your API key secure when deploying.

Works fully in-browser; no backend setup required.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
