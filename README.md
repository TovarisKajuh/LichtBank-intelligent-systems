# LichtPakt - Intelligent Solar Energy Systems

A modern, high-conversion landing page for LichtPakt, a solar energy company serving Vienna and the surrounding region. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations and micro-interactions
- **Lead Capture Form**: Multi-step funnel form integrated with LeadConnector CRM
- **AI Chat Widget**: ElevenLabs ConvAI integration for customer support
- **Responsive Design**: Mobile-first approach with full responsiveness
- **German Localization**: Content tailored for the Austrian market

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TovarisKajuh/LichtPakt-intelligent-systems.git
   cd LichtPakt-intelligent-systems
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── components/
│   ├── ui/
│   │   └── Button.tsx       # Reusable button component
│   ├── Navbar.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with dashboard mockup
│   ├── Features.tsx         # 3-step installation process
│   ├── ValueProposition.tsx # Value cards section
│   ├── SocialProof.tsx      # Customer testimonials
│   ├── Comparison.tsx       # Feature comparison table
│   ├── FAQ.tsx              # Accordion FAQ section
│   ├── FunnelForm.tsx       # Lead capture form
│   └── Footer.tsx           # Footer with contact info
├── App.tsx                  # Main app component
├── index.tsx                # React entry point
├── index.html               # HTML template
└── vite.config.ts           # Vite configuration
```

## License

All rights reserved.
