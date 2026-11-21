# AURA Luxury Acoustic — Immersive 3D E-Commerce Platform

An ultra-premium, dark luxury minimalist 3D spatial audio and bespoke acoustic hardware e-commerce platform built from the **AURA Luxury Acoustic** Google Stitch design system.

## Screens & Features

1. **Discover (`view-discover`)**
   - Flagship **AURA ONE** showcase card ($890 USD) with interactive `5Hz — 48,000Hz` frequency response curve and live frequency/dB cursor readout.
   - Category filter rail (`All Hardware`, `Spatial Over-Ear`, `In-Ear Monitors`, `Desktop DACs`, `Limited Edition`) and expandable `Archive`.
   - Bookmarking & Quick-Inspect hardware telemetry sheet.

2. **3D Studio (`view-3d-studio`)**
   - 360° interactive orbit (`0°`–`359° AZIMUTH`) and camera angle presets (`Front 3/4`, `Ear Cup`, `Internal Core`, `Suspension`).
   - Dual render mode: switch between the Stitch Anechoic Studio Render and a real-time 60 FPS **Three.js WebGL 3D Mesh**.
   - **Explode Layers** mode with interactive engineering callout tags (`01 // CNC Titanium Shell`, `02 // Helmholtz Resonator`, `03 // 40mm Beryllium Transducer`, `04 // Lambskin Contour Seal`).
   - **Spatial Acoustics Simulator** powered by the browser's Web Audio API with a real-time 10-band spectrum analyzer and DSP profile switchers (`HRTF V3`, `Zero-Lag < 1.2ms UWB`, `Dolby Atmos`).

3. **Customizer (`view-customizer` — Atelier Configurator Mark IV)**
   - Live finish selection (`Obsidian Titanium`, `Brushed Bronze` +$60, `Forged Carbon` +$120, `Ceramic Pearl` +$90).
   - Cushion & headband selection (`Italian Calfskin Leather`, `Alcantara Track Suede`, `Cooling Breathable Knit`).
   - Real-time 16-character laser hinge monogram preview.
   - Acoustic signature presets (`Reference Flat`, `Warm Spatial`, `Concert Live`, `Bass Extender`).

4. **Vault / Cart & Razorpay Payment Gateway (`view-vault-cart`)**
   - 15-minute reservation countdown and interactive 360° drag-to-inspect rotator chamber.
   - Complementary Studio Gear carousel (`Magnetic Charging Stand`, `Braided 4.4mm Cable`, `Walnut & Titanium Case`).
   - **Razorpay Payment Gateway** supporting `USD ($)` and `INR (₹)`, UPI/QR, Cards, Netbanking, and No-Cost EMI with backend order creation (`/api/razorpay/create-order`), HMAC-SHA256 signature verification (`/api/razorpay/verify-payment`), and numbered **Bespoke Acoustic Certificate** minting.

## Running Locally

```bash
node server.js
```

Then open `http://localhost:3000` in your browser.
