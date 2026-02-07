# 🐄 Match Backend - Livestock Breeding Management System

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

## 📖 Description

**Match Backend** is a comprehensive livestock breeding management system built with NestJS and TypeScript. The system provides intelligent breeding recommendations, tracks animal genealogy, manages performance records, and helps farmers make data-driven breeding decisions to improve their livestock quality and genetic diversity.

### 🎯 Key Features

- **Animal Management**: Complete livestock inventory with detailed profiles
- **Breeding Recommendations**: AI-powered breeding suggestions based on genetic diversity
- **Genealogy Tracking**: Comprehensive parent-child relationship management
- **Performance Monitoring**: Track milk yield, weight, and health status
- **Breeding Events**: Record and manage breeding activities and outcomes
- **User Management**: Multi-user support for farmers and agricultural professionals
- **Relatedness Estimates**: Calculate genetic relationships between animals

## 🏗️ System Architecture

### Supported Animal Types
- **Cattle**: Holstein, Friesian, Ankole, Brown Swiss, Girolando, Jersey
- **Pigs**: Large White, Duroc
- **Sheep**: Merino
- **Goats**: Local varieties

### Breeding Methods
- Natural breeding
- Artificial insemination
- Embryo transfer
- Other specialized methods

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/i-ganza007/Match_Backend.git
   cd Match_Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Configure your database connection
   DATABASE_URL="postgresql://username:password@localhost:5432/match_db"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run start:dev
   
   # Production mode
   npm run start:prod
   ```

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in background
docker-compose up -d
```

## 📊 Database Schema

### Core Models

#### User
- Personal information and location data
- Farm management details
- Breeding activity involvement

#### Animal
- Complete animal profiles with photos
- Genetic information and breed confidence
- Parent-child relationships
- Performance tracking

#### Breeding
- Breeding event records
- Method and date tracking
- Expected and actual outcomes
- User ratings and feedback

#### Performance Records
- Milk yield tracking
- Weight monitoring
- Health status updates
- Historical performance data

## 🔧 Development

### Project Structure
```
src/
├── animals/           # Animal management module
├── breeding_events/   # Breeding operations module
├── users/            # User management module
├── prisma-service/   # Database service layer
├── jwtservice/       # Authentication module
└── prisma/          # Database schema and migrations
```

### Available Scripts

```bash
# Development
npm run start:dev      # Start with hot reload
npm run start:debug    # Start with debugging

# Testing
npm run test           # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:cov      # Test coverage

# Code Quality
npm run lint          # ESLint checking
npm run format        # Prettier formatting

# Database
npx prisma studio     # Database GUI
npx prisma migrate    # Run migrations
```

## 🎨 UI/UX Designs

> **Figma Designs Coming Soon!**
> 
> We're working on comprehensive UI/UX designs for the frontend application. The designs will include:
> 
> - 📱 Mobile-first responsive layouts
> - 🖥️ Desktop dashboard interfaces
> - 🎯 User experience flows
> - 🎨 Component library and design system
> - 📊 Data visualization mockups
> 
> **Design files.**
<!-- Animal Profile Details -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1c5f20",
                        "terracotta": "#c05e3a",
                        "emerald-deep": "#062c1a",
                        "background-light": "#f6f8f6",
                        "background-dark": "#0a120b",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glass {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neumorphic-fab {
            background: #1c5f20;
            box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4), 
                        -2px -2px 8px rgba(255, 255, 255, 0.05);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30">
<div class="relative min-h-screen max-w-[430px] mx-auto overflow-x-hidden shadow-2xl">
<!-- Header Image & Hero Section -->
<div class="relative h-[460px] w-full overflow-hidden">
<div class="absolute inset-0 bg-center bg-no-repeat bg-cover scale-110" data-alt="Close up high-quality portrait of a healthy Rwandan cow" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwugccuUEHSc3y-bSEBBvWmaBoqgA2OTAjxDuPB0jZPkkCTdW_h_x6VrleAYol1Qr8zmA0y3arBgL-OMjGuC1Kz5KfifyPcd78S6pkklz0tCaMlmvd97xtzcelhYcmAtDIZHLC6yUzPQlz6JxojbrWuL7YWfa3U30pGdf7Rv-Y9TtHYeSiBJONqYr0Kas0N7Dv347_fQwubtQtZ10oaxD0JZ5GE5FH10Qtbb-inu6UPXW1uNTUEVIqGaNHr7mfzSPllADzQUEb1As");'>
<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-dark"></div>
</div>
<!-- Top App Bar (Overlaid) -->
<div class="absolute top-0 left-0 right-0 flex items-center p-6 justify-between z-20">
<div class="glass size-11 flex items-center justify-center rounded-full text-white cursor-pointer">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</div>
<h2 class="text-white text-lg font-bold tracking-tight">Kaze's Profile</h2>
<div class="flex gap-2">
<div class="glass size-11 flex items-center justify-center rounded-full text-white cursor-pointer">
<span class="material-symbols-outlined">share</span>
</div>
</div>
</div>
<!-- Glassy Stat Cards Overlaid on Hero -->
<div class="absolute bottom-6 left-0 right-0 px-4 flex flex-col gap-4 z-10">
<div class="grid grid-cols-2 gap-3">
<!-- Breed Card -->
<div class="glass rounded-xl p-4 flex flex-col justify-between h-28">
<p class="text-white/70 text-xs font-medium uppercase tracking-wider">Breed</p>
<div>
<p class="text-white text-xl font-bold">Ankole-Watusi</p>
<p class="text-terracotta text-xs font-semibold">Purebred Elite</p>
</div>
</div>
<!-- Milk Yield Card (Mini Chart) -->
<div class="glass rounded-xl p-4 flex flex-col justify-between h-28">
<div class="flex justify-between items-start">
<p class="text-white/70 text-xs font-medium uppercase tracking-wider">Milk Yield</p>
<p class="text-green-400 text-[10px] font-bold">+12%</p>
</div>
<div class="flex items-end gap-1 h-8">
<div class="bg-primary w-full rounded-t-sm" style="height: 40%"></div>
<div class="bg-primary w-full rounded-t-sm" style="height: 60%"></div>
<div class="bg-primary w-full rounded-t-sm" style="height: 50%"></div>
<div class="bg-primary w-full rounded-t-sm" style="height: 85%"></div>
<div class="bg-white w-full rounded-t-sm" style="height: 100%"></div>
</div>
<p class="text-white text-lg font-bold">28.5 L<span class="text-xs font-normal">/day</span></p>
</div>
</div>
<!-- Inbreeding Score Card -->
<div class="glass rounded-xl p-4 flex items-center justify-between">
<div class="flex flex-col">
<p class="text-white/70 text-xs font-medium uppercase tracking-wider">Inbreeding Score</p>
<p class="text-white text-xl font-bold">4.2%</p>
<p class="text-green-400 text-[10px] font-medium mt-1">Optimal Genetic Diversity</p>
</div>
<div class="relative size-14 flex items-center justify-center">
<svg class="size-full" viewbox="0 0 36 36">
<circle class="stroke-white/10" cx="18" cy="18" fill="none" r="16" stroke-width="3"></circle>
<circle class="stroke-primary" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="95" stroke-linecap="round" stroke-width="3"></circle>
</svg>
<span class="absolute text-[10px] font-bold">LOW</span>
</div>
</div>
</div>
</div>
<!-- Scrollable Content Section -->
<div class="relative px-4 pb-24 -mt-4 z-20">
<div class="glass rounded-t-3xl p-6 min-h-[500px] flex flex-col gap-8 shadow-inner">
<!-- Section: Key Traits -->
<div>
<h3 class="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Genetic Traits</h3>
<div class="space-y-4">
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<p class="text-white font-medium">Heat Tolerance</p>
<p class="text-white text-sm">Superior</p>
</div>
<div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-terracotta" style="width: 92%;"></div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<p class="text-white font-medium">Disease Resistance</p>
<p class="text-white text-sm">High</p>
</div>
<div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 78%;"></div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<p class="text-white font-medium">Growth Rate</p>
<p class="text-white text-sm">Average</p>
</div>
<div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-white/40" style="width: 54%;"></div>
</div>
</div>
</div>
</div>
<!-- Section: Lineage -->
<div>
<h3 class="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Lineage</h3>
<div class="relative border-l-2 border-primary/30 ml-2 pl-6 space-y-6">
<div class="relative">
<div class="absolute -left-[31px] top-1 size-3 rounded-full bg-primary ring-4 ring-background-dark"></div>
<p class="text-terracotta text-[10px] font-bold uppercase">Sire (Father)</p>
<p class="text-white font-bold">Biguma Gold #402</p>
<p class="text-white/50 text-xs italic">Imported Genetic - 2019</p>
</div>
<div class="relative">
<div class="absolute -left-[31px] top-1 size-3 rounded-full bg-primary/40 ring-4 ring-background-dark"></div>
<p class="text-terracotta text-[10px] font-bold uppercase">Dam (Mother)</p>
<p class="text-white font-bold">Nyampinga Queen</p>
<p class="text-white/50 text-xs italic">Local Elite Registry</p>
</div>
</div>
</div>
<!-- Section: Notes/History -->
<div>
<h3 class="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4">Health Records</h3>
<div class="bg-emerald-deep/40 rounded-xl p-4 border border-white/5">
<div class="flex gap-4 items-start">
<div class="bg-primary/20 p-2 rounded-lg text-primary">
<span class="material-symbols-outlined">vaccines</span>
</div>
<div>
<p class="text-white font-semibold">FMD Vaccination</p>
<p class="text-white/60 text-xs mt-1">Last administered Oct 12, 2023. Next due in 2 months.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Floating Action Button -->
<button class="fixed bottom-8 right-8 neumorphic-fab size-16 rounded-full flex items-center justify-center text-white z-50">
<span class="material-symbols-outlined text-3xl">edit</span>
</button>
<!-- Bottom Navigation Spacer -->
<div class="h-10 bg-background-dark"></div>
</div>
</body></html>

<!-- Breeder Conversation -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Breeder Conversation</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS with Config -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#11d41e",
                        "primary-dark": "#0ea618",
                        "background-light": "#f6f8f6",
                        "background-dark": "#102211",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                    backdropBlur: {
                        'xs': '2px',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
        }
        
        /* Glassmorphism Utilities */
        .glass-panel {
            background: rgba(16, 34, 17, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-message-incoming {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .glass-message-outgoing {
            background: linear-gradient(135deg, rgba(17, 212, 30, 0.8) 0%, rgba(14, 166, 24, 0.9) 100%);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 15px -3px rgba(17, 212, 30, 0.3);
        }

        /* Background Image Animation */
        .bg-zoom {
            animation: zoomEffect 20s infinite alternate;
        }
        @keyframes zoomEffect {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display h-screen w-full overflow-hidden bg-background-dark text-white selection:bg-primary selection:text-white">
<!-- Background Layer -->
<div class="fixed inset-0 z-0 pointer-events-none">
<div class="absolute inset-0 bg-black/40 z-10"></div> <!-- Overlay for contrast -->
<div class="w-full h-full bg-cover bg-center bg-no-repeat blur-md bg-zoom scale-105" data-alt="Blurred lush green rolling hills of a Rwandan farm landscape" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxI_IUze0V2zQ3Q4EvlddshMWYb6g1T7lBSGUeltWjnxI8kL2da3aQKgcj6rB8ifwwZH90stzVy8N41xhIhsSUm3r0pnJRZqZNUVGrNBJ9xdjVH54OwHIrootCgq7hEhImtFctCrAui-n5e-sccRCSidkyLWWuiP-Q_ZewRw230vRMu5EO9fsYcHBtQHt4DJKVLWfaUZF8aPKusrPgU70DTKfThhP-f4pqWPU-iESScUvn-f1u817BfbouvhMfEa7jg1mOorXW2EM');">
</div>
</div>
<!-- Main App Container -->
<div class="relative z-10 flex flex-col h-full w-full max-w-md mx-auto shadow-2xl overflow-hidden bg-transparent border-x border-white/5">
<!-- Header -->
<header class="flex items-center justify-between p-4 pt-6 glass-panel rounded-b-xl z-30 sticky top-0">
<button class="size-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
</button>
<div class="flex flex-col items-center flex-1 mx-2">
<div class="relative">
<div class="size-12 rounded-full border-2 border-primary overflow-hidden">
<img alt="Portrait of Jean-Paul the breeder smiling warmly" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHJ0AROg-JwtBI-y-7F6T_jNHjEtdWk_ekKZRZWKq90E-zGkYjnrbpMku4dlmtag9MutuPN19JnBIAVdXFL1tdj708nc35VujaLaMyf8txSdAgICcqTEJ8QUGAOMcpcgm2fhQn-LxQOpg9Og8gmYwzqIV3RukUUH2uWgm5lXqMxYdNVGwHu59Z7lE4Q1cN10SxAjRYsu8zF0wgT_6Mspy2xMBORNq2rlbFHYOwy32Ayo-XeC77s1_CkWba2eujyDMDDwiM10PHY8E"/>
</div>
<div class="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-gray-200">
<img class="w-4 h-4 object-contain" data-alt="Small icon representing a Jersey cow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA36yzkoJYk1pxOPssbpWghdqDoMcHa3et43FOoCT8RAlIGl1XxvelF3E-2wH_GoP4Y8-tDix7B8sNisZO9ux2oL9rAfKy7VCyG9uhel9sFnL3o0x2k7K8Bn5AD1N-f3Vt1q2jJZ9833mVFq7k2TMiHz_Ac3O2NXnQAylV4In1G74gSpsftoHuAQsg-MEeoFKbR6JVIQPGdQOs8N_ptouQisSU2blXdEoAtzTKQHgMJ5AlKCWGYyKXPuXHlLQCQxbZ10Q1RQggsx5o"/>
</div>
</div>
<h1 class="text-sm font-bold mt-1 text-white text-shadow-sm">Jean-Paul (Breeder)</h1>
<span class="text-[10px] text-green-200 font-medium">Active now</span>
</div>
<button class="size-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">info</span>
</button>
</header>
<!-- Chat Area -->
<main class="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth pb-4">
<!-- Timestamp -->
<div class="flex justify-center">
<span class="text-[10px] bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-gray-300">Today, 9:41 AM</span>
</div>
<!-- Message 1: Incoming -->
<div class="flex items-end gap-3 group">
<div class="size-8 rounded-full overflow-hidden shrink-0 border border-white/10 self-end mb-1">
<img class="w-full h-full object-cover" data-alt="Small avatar of Jean-Paul" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPfKKP2o3ZSI2_MPiUOIEVRDTDZTQZTFVsB8gK7-SzwGXrsxMpEONG-1lFCwBFkChitVyz84YCYwP0tMQ3zo7nFoqQ3QzCJtLInReSMvSSRF4DxHVJ_1Cgi-C7Vf6KT39f4gUveZIZMteR0L30brE-4sTjCvJxKrPYXhlF_9Oup330fWbl3s7JxpZDv9vBLWPOQ71hF-YRmrGwX30VFvqj6brTdpnSKn0A4VqZMbkIxU2PJEIZ9tEAOMWOei0YK4MebBJrmLhQlCc"/>
</div>
<div class="flex flex-col gap-1 max-w-[75%]">
<span class="text-xs text-gray-300 ml-1">Jean-Paul</span>
<div class="glass-message-incoming p-3.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed text-white">
<p>Muraho! I received your inquiry about the Jersey bull genetics.</p>
</div>
</div>
</div>
<!-- Message 2: Outgoing -->
<div class="flex items-end gap-3 justify-end group">
<div class="flex flex-col gap-1 items-end max-w-[75%]">
<div class="glass-message-outgoing p-3.5 rounded-2xl rounded-br-sm text-sm leading-relaxed text-white">
<p>Yes, I am looking to improve milk yield for the next season. Is he available?</p>
</div>
<span class="text-[10px] text-gray-300 mr-1 flex items-center gap-1">
                        Read 9:45 AM <span class="material-symbols-outlined text-[14px]">done_all</span>
</span>
</div>
</div>
<!-- Message 3: Incoming with Media -->
<div class="flex items-end gap-3 group">
<div class="size-8 rounded-full overflow-hidden shrink-0 border border-white/10 self-end mb-1">
<img class="w-full h-full object-cover" data-alt="Small avatar of Jean-Paul" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw9Ktw0telGg3nwtoPxn8HYcUFSLJLSL4060Y9cXanE6JkKievtfMU8SypVKJNbf5pcgX4PuT_ubD3fj3A2yrpZC00Uge_mM2uYXhvVB-BUeZKUMQ53QN5Se-72kM3fUPrw4NPZUQvvfWucOEKYdGtUsoKDo8TcxKDfmu34r6DiPNT-L52lV6zvTIbhg8BDmnQh6DzN-3TWx3Dxl_XWTclNihgaxVIjWzvttilECKtZOyDvWQgGMZY7oLSQuCVcA2jatTAkLeY21c"/>
</div>
<div class="flex flex-col gap-1 max-w-[80%]">
<span class="text-xs text-gray-300 ml-1">Jean-Paul</span>
<div class="glass-message-incoming p-3 rounded-2xl rounded-bl-sm flex flex-col gap-2">
<p class="text-sm px-1 pt-1">He is available. Here is his recent health certificate and profile.</p>
<div class="relative rounded-xl overflow-hidden mt-1 group cursor-pointer">
<img class="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A healthy brown Jersey cow grazing in a field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNquQW5mLuXUAmbHg_VGLI2NTWh-PQD56BNJTxQOIprN2BL1OKpDfv8GlNVb4Qab4-IneE-a5I3dv7y65rZY0qCaWRoca5RTgsZizc-hMmz8cvAZ_4GYNFXX0wRiy_jJO5U6-YleAGIwO2e-Xsjc6lz9KKRU_cw_t1r4UnS8HF3WFAIo9HnjNlVd7Vygdv1LDNesgj-T5QYLI8Zifsf8P8czdo0UJXIO1wJe0Nu_B4TrfzOrJ2tBGIIpq_98eSgZEOR6Pn3CmkTO0"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span class="text-xs font-medium text-white flex items-center gap-1">
<span class="material-symbols-outlined text-sm">visibility</span> View details
                                </span>
</div>
</div>
</div>
</div>
</div>
<!-- Message 4: Outgoing -->
<div class="flex items-end gap-3 justify-end group">
<div class="flex flex-col gap-1 items-end max-w-[75%]">
<div class="glass-message-outgoing p-3.5 rounded-2xl rounded-br-sm text-sm leading-relaxed text-white">
<p>Perfect. Can we meet to finalize?</p>
</div>
</div>
</div>
<div class="h-24"></div> <!-- Spacer for footer -->
</main>
<!-- Footer / Action Area -->
<div class="absolute bottom-0 w-full z-30">
<!-- Quick Actions Bar (Floating) -->
<div class="w-full px-4 mb-2">
<div class="glass-panel rounded-2xl p-2 flex justify-between items-center gap-2 overflow-x-auto no-scrollbar">
<button class="flex flex-col items-center gap-1 px-3 py-2 min-w-[80px] rounded-xl hover:bg-white/10 transition-colors group">
<div class="size-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
<span class="material-symbols-outlined text-primary text-sm group-hover:text-white transition-colors">photo_camera</span>
</div>
<span class="text-[10px] font-medium text-gray-200">Photo</span>
</button>
<button class="flex flex-col items-center gap-1 px-3 py-2 min-w-[80px] rounded-xl hover:bg-white/10 transition-colors group">
<div class="size-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
<span class="material-symbols-outlined text-primary text-sm group-hover:text-white transition-colors">location_on</span>
</div>
<span class="text-[10px] font-medium text-gray-200">Location</span>
</button>
<button class="flex flex-col items-center gap-1 px-3 py-2 min-w-[80px] rounded-xl hover:bg-white/10 transition-colors group">
<div class="size-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
<span class="material-symbols-outlined text-primary text-sm group-hover:text-white transition-colors">calendar_month</span>
</div>
<span class="text-[10px] font-medium text-gray-200">Meeting</span>
</button>
<button class="flex flex-col items-center gap-1 px-3 py-2 min-w-[80px] rounded-xl hover:bg-white/10 transition-colors group">
<div class="size-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
<span class="material-symbols-outlined text-primary text-sm group-hover:text-white transition-colors">payments</span>
</div>
<span class="text-[10px] font-medium text-gray-200">Offer</span>
</button>
</div>
</div>
<!-- Input Bar -->
<div class="bg-background-dark/80 backdrop-blur-xl border-t border-white/10 p-4 pb-8">
<div class="flex items-end gap-3">
<button class="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined">add_circle</span>
</button>
<div class="flex-1 relative">
<textarea class="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 resize-none min-h-[44px] max-h-32" placeholder="Type a message..." rows="1"></textarea>
</div>
<button class="bg-primary hover:bg-primary-dark text-white p-3 rounded-full flex items-center justify-center shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
<span class="material-symbols-outlined filled" style="font-variation-settings: 'FILL' 1;">send</span>
</button>
</div>
</div>
</div>
</div>
</body></html>

<!-- Breeding Matches -->
<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Breeding Matches</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "primary": "#1c5f20",
                    "accent-orange": "#d35400",
                    "terracotta": "#E07A5F",
                    "background-light": "#f6f8f6",
                    "background-dark": "#050505",
                },
                fontFamily: {
                    "display": ["Inter", "sans-serif"]
                },
                borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "3xl": "2.5rem", "full": "9999px"},
            },
        },
    }
</script>
<style>.glass-card {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.25);
        box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .glass-card-stack-1 {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .glass-card-stack-2 {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.05);
    }.liquid-gauge {
        background: linear-gradient(180deg, #4ade80 0%, #16a34a 100%);
        box-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
        position: relative;
        overflow: hidden;
    }
    .liquid-gauge::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transform: skewX(-20deg);
        filter: blur(2px);
    }
    .match-glow {
        box-shadow: 0 0 35px rgba(34, 197, 94, 0.5);
    }
    .super-like-glow {
        box-shadow: 0 0 25px rgba(234, 179, 8, 0.3);
    }
    .reject-glow {
        box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
    }
</style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
</style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white min-h-screen flex flex-col overflow-hidden relative selection:bg-primary selection:text-white">
<div class="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
<div class="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
<div class="flex items-center bg-transparent p-6 pb-2 justify-between z-20 relative">
<div class="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-3xl">menu</span>
</div>
<div class="flex flex-col items-center">
<h2 class="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Elite Sires</h2>
<h1 class="text-white text-lg font-bold tracking-tight">Breeding Matches</h1>
</div>
<div class="flex w-12 items-center justify-end">
<button class="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/5 backdrop-blur-md transition-colors">
<span class="material-symbols-outlined text-white text-xl">tune</span>
</button>
</div>
</div>
<div class="flex-1 relative px-6 mt-2 flex items-center justify-center z-10 w-full max-w-md mx-auto">
<div class="absolute w-[85%] h-[80%] glass-card-stack-2 rounded-[2.5rem] rotate-6 translate-y-8 scale-90 blur-sm"></div>
<div class="absolute w-[92%] h-[80%] glass-card-stack-1 rounded-[2.5rem] -rotate-3 translate-y-3 scale-95 blur-[1px]"></div>
<div class="glass-card relative w-full h-full max-h-[620px] rounded-[2.5rem] overflow-hidden flex flex-col z-20">
<div class="relative h-[65%] w-full group overflow-hidden">
<div class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-1000 group-hover:scale-105 filter saturate-[1.15] contrast-[1.05]" data-alt="High fidelity photo of a healthy Holstein-Friesian cow with professional lighting" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCH5bm989_D3HyyoGwhcjF44HJwrpP-4dDUiUssdxnlowfMj9OaM093Qlkff6QiRfBX3sgRR_Os3TWkAZLSCROjdakDltdrYlM5BhFlXv_Bi7vUbaFYImo2Rxc4htPm3KMRjnuwhONwOPVISAyVZdjTb9apLRcT1Xu8WrLWvp52vjdIc3F8wQU_el3swG67R9CkF51ryLFlavOLRdZow9XQn_Di23d_XZtIjaPE3_CBtyc6zucRqEkd1y4vtdcVfDcSOE-C3YQ36mM");'>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
<div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent opacity-60"></div>
<div class="absolute top-5 right-5">
<div class="flex items-center gap-1.5 bg-terracotta/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/10">
<span class="material-symbols-outlined text-[16px] text-white">shield_with_heart</span>
<span class="text-white text-[11px] font-bold uppercase tracking-wider">0.2% Inbreeding</span>
</div>
</div>
<div class="absolute bottom-0 left-0 w-full p-6 pb-8">
<div class="flex items-center gap-2 mb-2">
<span class="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white">Top 1% Genetic Merit</span>
</div>
<h3 class="text-white text-4xl font-black tracking-tight drop-shadow-lg">Holstein-Friesian</h3>
<div class="flex items-center gap-2 mt-2 text-white/90">
<span class="material-symbols-outlined text-green-400 text-sm">location_on</span>
<p class="text-sm font-medium tracking-wide">Rwandan Highlands • Nyagatare</p>
</div>
</div>
</div>
<div class="flex-1 px-6 py-4 flex flex-col justify-center gap-4 bg-gradient-to-b from-white/5 to-transparent">
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<div class="flex flex-col">
<span class="text-white/60 text-xs font-semibold uppercase tracking-wider">Milk Yield</span>
<span class="text-white text-lg font-bold">Excellent</span>
</div>
<div class="flex items-baseline gap-1">
<span class="text-3xl font-bold text-white">32L</span>
<span class="text-white/50 text-sm font-medium">/day</span>
</div>
</div>
<div class="relative h-3 w-full bg-white/10 rounded-full overflow-hidden shadow-inner border border-white/5">
<div class="absolute inset-y-0 left-0 bg-white/5 w-full"></div>
<div class="h-full rounded-full liquid-gauge relative" style="width: 92%;">
<div class="absolute right-0 top-0 bottom-0 w-[10px] bg-white/40 blur-[4px]"></div>
</div>
</div>
<div class="flex items-center gap-1.5 mt-1">
<span class="material-symbols-outlined text-green-400 text-sm">trending_up</span>
<p class="text-green-400 text-xs font-medium">+15% vs Regional Avg</p>
</div>
</div>
</div>
</div>
</div>
<div class="px-6 py-6 pb-10 flex justify-center items-center gap-6 z-20 w-full max-w-md mx-auto">
<button class="group flex size-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-red-500 shadow-lg hover:bg-black/60 hover:scale-110 active:scale-95 transition-all duration-300 reject-glow">
<span class="material-symbols-outlined text-3xl group-hover:text-red-400 transition-colors">close</span>
</button>
<button class="group flex size-20 items-center justify-center rounded-full bg-gradient-to-tr from-green-600 to-green-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 match-glow border border-white/20">
<span class="material-symbols-outlined text-4xl font-bold drop-shadow-md" style="font-variation-settings: 'FILL' 1">favorite</span>
</button>
<button class="group flex size-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-amber-400 shadow-lg hover:bg-black/60 hover:scale-110 active:scale-95 transition-all duration-300 super-like-glow">
<span class="material-symbols-outlined text-3xl group-hover:text-amber-300 transition-colors" style="font-variation-settings: 'FILL' 1">star</span>
</button>
</div>

</body></html>

<!-- Login Screen -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Login Screen</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&amp;family=Noto+Sans:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f2cc0d",
                        "background-light": "#f8f8f5",
                        "background-dark": "#221f10",
                    },
                    fontFamily: {
                        "display": ["Inter", "Noto Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display antialiased">
<!-- Main Container with Background Image -->
<div class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center" data-alt="Blurred rolling hills of Rwanda tea plantation landscape" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpzH-IzFbfoedUjyrYY3aYxsYZQKO56id8J-r6jghyp4iLoAcYpdsnuw7-7yhDePTxnrMIYSkG6zmenDAK3H86ViJGVt8c8AQBgQfxx0pxc6KQ59oOw97wXZQ84bfckwX-V_v6D2_mbPrmyUd-hlIIpdQTJAQtS9ZIJ3WqZ0YJJsKiPEOiAmpzae2r_CNtDQVmXDXwPg470wlN5S0K0iKarH7D855iIB0p80nq1whaU_oyfThqjYI1Vrs5HP558s7Ko_qFo49B4mg');">
<!-- Glassmorphism Overlay/Backdrop Blur -->
<div class="absolute inset-0 bg-[#221f10]/70 backdrop-blur-md"></div>
<!-- Glassy Login Card -->
<div class="relative w-full max-w-md p-6 mx-4">
<!-- Top Bar (Back Button) -->
<div class="flex items-center justify-between mb-8">
<button class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_back</span>
</button>
<div class="w-10"></div> <!-- Spacer for centering if needed -->
</div>
<div class="flex flex-col gap-6 bg-[#27251b]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
<!-- Headline -->
<div class="text-center space-y-2">
<h1 class="text-white text-3xl font-bold tracking-tight">Welcome Back</h1>
<p class="text-gray-300 text-sm font-medium">Access premium genetics for your farm</p>
</div>
<!-- Form Fields -->
<div class="space-y-4">
<!-- Email/Phone Input -->
<div class="group relative">
<label class="block text-gray-200 text-sm font-medium mb-2 pl-1" for="email">Email or Phone</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<span class="material-symbols-outlined text-[20px]">mail</span>
</div>
<input class="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-white/30 backdrop-blur-sm" id="email" placeholder="Enter your email or phone" type="text"/>
</div>
</div>
<!-- Password Input -->
<div class="group relative">
<label class="block text-gray-200 text-sm font-medium mb-2 pl-1" for="password">Password</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<span class="material-symbols-outlined text-[20px]">lock</span>
</div>
<input class="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-11 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-white/30 backdrop-blur-sm" id="password" placeholder="Enter your password" type="password"/>
<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
</div>
</div>
</div>
<!-- Forgot Password -->
<div class="flex justify-end">
<a class="text-primary text-sm font-medium hover:text-yellow-300 transition-colors" href="#">Forgot Password?</a>
</div>
<!-- Main Login Button -->
<button class="w-full h-14 rounded-xl bg-primary text-black font-bold text-lg shadow-[0_0_20px_rgba(242,204,13,0.3)] hover:shadow-[0_0_30px_rgba(242,204,13,0.5)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
<span>Log In</span>
<span class="material-symbols-outlined text-[20px]">login</span>
</button>
<!-- Divider -->
<div class="relative flex py-2 items-center">
<div class="flex-grow border-t border-white/10"></div>
<span class="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-wider">Or continue with</span>
<div class="flex-grow border-t border-white/10"></div>
</div>
<!-- Biometric Options -->
<div class="flex justify-center gap-6">
<button class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center group transition-all duration-300 hover:scale-110 hover:border-primary/50">
<span class="material-symbols-outlined text-white/70 group-hover:text-primary text-[32px] transition-colors">fingerprint</span>
</button>
<button class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center group transition-all duration-300 hover:scale-110 hover:border-primary/50">
<span class="material-symbols-outlined text-white/70 group-hover:text-primary text-[32px] transition-colors">face</span>
</button>
</div>
<!-- Sign Up Link -->
<div class="text-center mt-2">
<p class="text-gray-400 text-sm">
                        Don't have an account? 
                        <a class="text-white font-semibold hover:text-primary transition-colors underline decoration-primary/50 underline-offset-4" href="#">Sign Up</a>
</p>
</div>
</div>
<!-- Bottom decorative element -->
<div class="mt-8 text-center opacity-60">
<p class="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Protected by Biometrics</p>
</div>
</div>
</div>
</body></html>

<!-- Sign Up Screen -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sign Up Screen</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#19e65e",
                        "background-light": "#f6f8f6",
                        "background-dark": "#112116",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom glassmorphism utilities */
        .glass-panel {
            background: rgba(17, 33, 22, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .glass-input {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        
        .glass-input:focus {
            background: rgba(255, 255, 255, 0.08);
            border-color: #19e65e;
            box-shadow: 0 0 15px rgba(25, 230, 94, 0.1);
        }

        .shine-button {
            position: relative;
            overflow: hidden;
        }

        .shine-button::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg);
            animation: shine 6s infinite;
        }

        @keyframes shine {
            0% { left: -100%; }
            20% { left: 200%; }
            100% { left: 200%; }
        }

        /* Abstract golden accents in background */
        .golden-glow {
            background: radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15), transparent 60%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-black">
<div class="relative flex min-h-screen w-full flex-col overflow-hidden">
<!-- Background Decorations -->
<div class="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]"></div>
<div class="absolute bottom-[-10%] left-[-20%] h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[80px] golden-glow"></div>
<div class="absolute top-[40%] left-[20%] h-[300px] w-[300px] rounded-full bg-blue-900/20 blur-[90px]"></div>
<!-- Top App Bar -->
<div class="relative z-10 flex items-center px-6 pt-6 pb-2 justify-between">
<button class="text-white/80 hover:text-white flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10">
<span class="material-symbols-outlined" style="font-size: 24px;">arrow_back</span>
</button>
<h2 class="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Sign Up</h2>
</div>
<!-- Page Indicators -->
<div class="relative z-10 flex w-full flex-row items-center justify-center gap-3 py-6">
<div class="h-2.5 w-8 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div class="h-2.5 w-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/10"></div>
<div class="h-2.5 w-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/10"></div>
</div>
<!-- Main Content -->
<div class="relative z-10 flex flex-col px-6 flex-1">
<!-- Headlines -->
<div class="pb-6">
<h1 class="text-white tracking-tight text-[32px] font-bold leading-tight pb-2">Create Account</h1>
<p class="text-white/70 text-base font-normal leading-normal">Join the premium network for genetic matching.</p>
</div>
<!-- Form Container -->
<div class="glass-panel w-full rounded-2xl p-6 mb-6 shadow-xl">
<div class="flex flex-col gap-5">
<!-- Name Input -->
<div class="flex flex-col gap-2">
<label class="text-white/90 text-sm font-medium ml-1">Full Name</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">person</span>
<input class="glass-input w-full rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-0" placeholder="Enter your full name" type="text"/>
</div>
</div>
<!-- Phone Input -->
<div class="flex flex-col gap-2">
<label class="text-white/90 text-sm font-medium ml-1">Phone Number</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">call</span>
<input class="glass-input w-full rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-0" placeholder="+250 7XX XXX XXX" type="tel"/>
</div>
</div>
<!-- Password Input -->
<div class="flex flex-col gap-2">
<label class="text-white/90 text-sm font-medium ml-1">Password</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">lock</span>
<input class="glass-input w-full rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-0" placeholder="Create a password" type="password" value="Pass123"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/40 cursor-pointer hover:text-white/70">visibility_off</span>
</div>
<!-- Password Strength Bar -->
<div class="mt-2 flex flex-col gap-1">
<div class="flex justify-between items-center px-1">
<span class="text-xs font-medium text-emerald-400">Strong</span>
<span class="text-xs text-white/40">Password Strength</span>
</div>
<div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-600 via-emerald-500 to-primary relative overflow-hidden">
<!-- Simple CSS ripple effect overlay -->
<div class="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Action Button -->
<div class="mt-auto mb-8">
<button class="shine-button w-full bg-primary hover:bg-green-400 text-background-dark font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(25,230,94,0.3)] transition-all transform active:scale-[0.98]">
                    Create Account
                </button>
<p class="text-center text-white/50 text-sm mt-6">
                    Already have an account? <a class="text-primary hover:text-green-300 font-medium transition-colors" href="#">Sign In</a>
</p>
</div>
</div>
</div>
</body></html>

<!-- Animal Profile Details -->
<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1c5f20",
                        "terracotta": "#c05e3a",
                        "emerald-deep": "#062c1a",
                        "background-light": "#f6f8f6",
                        "background-dark": "#0a120b",
                        "gold": "#fbbf24",
                    },
                    fontFamily: {
                        "display": ["Inter"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }
        .glass-card {
            background: rgba(6, 44, 26, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neumorphic-fab {
            background: linear-gradient(135deg, #1c5f20, #0d3811);
            box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5), 
                        -4px -4px 12px rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-glow {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }
        .hero-sticky {
            position: sticky;
            top: 0;
            z-index: 0;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-dark font-display text-white selection:bg-gold/30">
<div class="relative min-h-screen max-w-[430px] mx-auto overflow-x-hidden shadow-2xl bg-background-dark">
<div class="hero-sticky h-[520px] w-full overflow-hidden relative">
<div class="absolute inset-0 bg-center bg-no-repeat bg-cover transform scale-125 origin-center" data-alt="Close up high-quality portrait of a healthy Rwandan cow" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwugccuUEHSc3y-bSEBBvWmaBoqgA2OTAjxDuPB0jZPkkCTdW_h_x6VrleAYol1Qr8zmA0y3arBgL-OMjGuC1Kz5KfifyPcd78S6pkklz0tCaMlmvd97xtzcelhYcmAtDIZHLC6yUzPQlz6JxojbrWuL7YWfa3U30pGdf7Rv-Y9TtHYeSiBJONqYr0Kas0N7Dv347_fQwubtQtZ10oaxD0JZ5GE5FH10Qtbb-inu6UPXW1uNTUEVIqGaNHr7mfzSPllADzQUEb1As");'>
<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark/90"></div>
</div>
<div class="absolute top-0 left-0 right-0 flex items-center p-6 justify-between z-20">
<div class="glass size-11 flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-white/10 transition">
<span class="material-symbols-outlined">arrow_back_ios_new</span>
</div>
<h2 class="text-white/90 text-lg font-bold tracking-tight drop-shadow-md">Kaze's Profile</h2>
<div class="flex gap-2">
<div class="glass size-11 flex items-center justify-center rounded-full text-white cursor-pointer hover:bg-white/10 transition">
<span class="material-symbols-outlined">share</span>
</div>
</div>
</div>
<div class="absolute bottom-24 left-0 right-0 px-4 flex flex-col gap-4 z-10">
<div class="grid grid-cols-2 gap-3">
<div class="glass rounded-xl p-4 flex flex-col justify-between h-28 border-l-2 border-l-gold/30">
<p class="text-white/60 text-[10px] font-bold uppercase tracking-widest">Breed</p>
<div>
<p class="text-white text-xl font-bold tracking-tight">Ankole-Watusi</p>
<p class="text-terracotta text-xs font-semibold mt-0.5">Purebred Elite</p>
</div>
</div>
<div class="glass rounded-xl p-4 flex flex-col justify-between h-28 border-l-2 border-l-gold/30">
<div class="flex justify-between items-start">
<p class="text-white/60 text-[10px] font-bold uppercase tracking-widest">Milk Yield</p>
<p class="text-gold text-[10px] font-bold text-glow">+12%</p>
</div>
<div class="flex items-end gap-1.5 h-8">
<div class="bg-gold/30 w-full rounded-t-sm" style="height: 40%"></div>
<div class="bg-gold/50 w-full rounded-t-sm" style="height: 60%"></div>
<div class="bg-gold/70 w-full rounded-t-sm" style="height: 50%"></div>
<div class="bg-gold/90 w-full rounded-t-sm" style="height: 85%"></div>
<div class="bg-gold w-full rounded-t-sm shadow-[0_0_10px_rgba(251,191,36,0.6)]" style="height: 100%"></div>
</div>
<p class="text-gold text-2xl font-bold text-glow">28.5 L<span class="text-xs font-medium text-white/60 ml-1">/day</span></p>
</div>
</div>
<div class="glass rounded-xl p-4 flex items-center justify-between border-l-2 border-l-gold/30">
<div class="flex flex-col">
<p class="text-white/60 text-[10px] font-bold uppercase tracking-widest">Inbreeding Score</p>
<p class="text-gold text-2xl font-bold text-glow mt-1">4.2%</p>
<p class="text-emerald-400 text-[10px] font-medium mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-xs">check_circle</span> Optimal Diversity
                    </p>
</div>
<div class="relative size-14 flex items-center justify-center">
<svg class="size-full -rotate-90" viewBox="0 0 36 36">
<circle class="stroke-white/5" cx="18" cy="18" fill="none" r="16" stroke-width="2.5"></circle>
<circle class="stroke-gold drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100" stroke-dashoffset="95.8" stroke-linecap="round" stroke-width="2.5"></circle>
</svg>
<span class="absolute text-[9px] font-bold text-white tracking-wider">LOW</span>
</div>
</div>
</div>
</div>
<div class="relative z-30 -mt-16 pb-32">
<div class="glass rounded-t-[2.5rem] p-6 pt-10 min-h-[600px] flex flex-col gap-10 border-t border-white/10 backdrop-blur-xl bg-background-dark/60">
<div class="w-12 h-1 bg-white/20 rounded-full mx-auto -mt-4 mb-2"></div>
<div>
<h3 class="text-gold/80 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
<span class="w-4 h-[1px] bg-gold/50"></span>Genetic Traits
                </h3>
<div class="space-y-5">
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<p class="text-white font-medium text-sm">Heat Tolerance</p>
<p class="text-gold text-xs font-bold">Superior</p>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
<div class="h-full bg-gradient-to-r from-terracotta to-gold w-[92%] shadow-[0_0_10px_rgba(192,94,58,0.4)]"></div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<p class="text-white font-medium text-sm">Disease Resistance</p>
<p class="text-emerald-400 text-xs font-bold">High</p>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
<div class="h-full bg-gradient-to-r from-primary to-emerald-400 w-[78%]"></div>
</div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between items-end">
<p class="text-white font-medium text-sm">Growth Rate</p>
<p class="text-white/60 text-xs font-bold">Average</p>
</div>
<div class="h-1.5 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
<div class="h-full bg-white/30 w-[54%]"></div>
</div>
</div>
</div>
</div>
<div>
<h3 class="text-gold/80 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
<span class="w-4 h-[1px] bg-gold/50"></span>Lineage
                </h3>
<div class="relative border-l border-white/10 ml-2 pl-8 space-y-8">
<div class="relative">
<div class="absolute -left-[37px] top-1.5 size-4 rounded-full bg-background-dark border-2 border-gold shadow-[0_0_10px_rgba(251,191,36,0.3)] z-10"></div>
<p class="text-terracotta text-[10px] font-bold uppercase tracking-wider mb-1">Sire (Father)</p>
<div class="glass-card p-3 rounded-lg border border-white/5">
<p class="text-white font-bold text-base">Biguma Gold #402</p>
<div class="flex items-center gap-2 mt-1">
<span class="material-symbols-outlined text-gold text-[14px]">stars</span>
<p class="text-white/50 text-[11px] italic">Imported Genetic - 2019</p>
</div>
</div>
</div>
<div class="relative">
<div class="absolute -left-[37px] top-1.5 size-4 rounded-full bg-background-dark border-2 border-white/30 z-10"></div>
<p class="text-terracotta text-[10px] font-bold uppercase tracking-wider mb-1">Dam (Mother)</p>
<div class="glass-card p-3 rounded-lg border border-white/5">
<p class="text-white font-bold text-base">Nyampinga Queen</p>
<p class="text-white/50 text-[11px] italic mt-1">Local Elite Registry</p>
</div>
</div>
</div>
</div>
<div>
<h3 class="text-gold/80 text-[10px] font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
<span class="w-4 h-[1px] bg-gold/50"></span>Health Records
                </h3>
<div class="glass-card rounded-xl p-5 border border-white/5 flex gap-4 items-start">
<div class="bg-primary/20 p-2.5 rounded-full text-emerald-400 border border-emerald-500/20">
<span class="material-symbols-outlined">vaccines</span>
</div>
<div>
<p class="text-white font-semibold text-sm">FMD Vaccination</p>
<p class="text-white/50 text-xs mt-1 leading-relaxed">Administered Oct 12, 2023 by Dr. Mateso. Next booster required in <span class="text-white font-bold">2 months</span>.</p>
</div>
</div>
</div>
</div>
</div>
<button class="fixed bottom-8 right-6 neumorphic-fab size-16 rounded-full flex items-center justify-center text-white z-50 transition transform active:scale-95 hover:shadow-lg hover:shadow-primary/40 group">
<span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">edit</span>
</button>
<div class="h-6 bg-background-dark"></div>
</div>

</body></html>

<!-- Multi-Species Dashboard -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Multi-Species Dashboard</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind Config -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#13ec80",
                        "background-light": "#f6f8f7",
                        "background-dark": "#102219",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
                    backgroundImage: {
                        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        'glass-border': 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                    }
                },
            },
        }
    </script>
<style>
        /* Custom Scrollbar for horizontal scrolling */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-background-dark">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top App Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div class="flex items-center gap-3">
<div class="relative">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait of a Rwandan farmer smiling" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-DBEkugIdKd3fH9-lLyKWKGIVOgtsc2ht725l0RZq2ulXuDSPZFusrBIyEqmGyvVZxi0WOckggKpHa3mgrEA7urw251_y8G8ip96CZIq6K35cHB-75pHrqlXdKX8SG0sTbGULL-pblVUMTm9_YNOc2PlmGAd5XnVLP8ToaEaCKzKEo8tFGUKO-4kDugtFLN41SkhqKeiwCKaeBo7Wol5QrUgib2cX5LAtPx-wBVp3IiYsuuSEuUZE0VrGVSz6uCMV6ORrSVJf29Q");'>
</div>
<div class="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-background-dark"></div>
</div>
<div class="flex flex-col">
<span class="text-xs font-medium text-gray-500 dark:text-gray-400">Welcome back</span>
<h2 class="text-base font-bold leading-tight tracking-tight">Jean-Paul</h2>
</div>
</div>
<button class="relative flex items-center justify-center size-10 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition-all">
<span class="material-symbols-outlined text-white" style="font-size: 24px;">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
</button>
</header>
<!-- Main Content -->
<main class="flex flex-col gap-6 p-4 pb-24">
<!-- Multi-Species Selector -->
<div class="w-full">
<div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
<!-- Active Chip -->
<button class="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-4 pr-6 shadow-lg shadow-primary/20 transition-transform active:scale-95">
<span class="material-symbols-outlined text-background-dark">grid_view</span>
<p class="text-background-dark text-sm font-bold">All</p>
</button>
<!-- Cow Chip -->
<button class="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 border border-white/5 pl-4 pr-6 hover:bg-white/10 transition-all active:scale-95">
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">grass</span>
<p class="text-white text-sm font-medium">Cows</p>
</button>
<!-- Goat Chip -->
<button class="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 border border-white/5 pl-4 pr-6 hover:bg-white/10 transition-all active:scale-95">
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">cruelty_free</span>
<p class="text-white text-sm font-medium">Goats</p>
</button>
<!-- Sheep Chip -->
<button class="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 border border-white/5 pl-4 pr-6 hover:bg-white/10 transition-all active:scale-95">
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">cloud</span>
<p class="text-white text-sm font-medium">Sheep</p>
</button>
<!-- Pig Chip -->
<button class="group flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white/5 border border-white/5 pl-4 pr-6 hover:bg-white/10 transition-all active:scale-95">
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">savings</span>
<p class="text-white text-sm font-medium">Pigs</p>
</button>
</div>
</div>
<!-- Hero Image -->
<div class="relative w-full rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[16/9] shadow-2xl shadow-black/50 group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Stunning Boer Goat standing proudly in a field with golden hour lighting" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV1wc9cLK_kA9t_qS6xZeFdY_O_o8g7lZiNT09q-BXJ044bnNXdbC6jr08T28UOqcattiX1GZuvTUR0bv3kJ_s6kdTCXz9C_GgIogh0FO5ofq9nSVVBoync-eYNCMS4NMn9sgWnqzoihSopQTuEuGwexX0owNXxUyqVW_wDrf-5Rk7Hs_Wdwe0qawQmpvl4DacR9cibqQVu7aX0wCQrH-z0o7RxX1zs60I30nG_ycoZFqp-bzTlqqygIuLtdyk7tKXrwAPiv0euDI");'>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-6 w-full">
<div class="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/20 backdrop-blur-md px-3 py-1 border border-primary/30">
<span class="material-symbols-outlined text-primary text-[16px]">verified</span>
<span class="text-xs font-bold text-primary uppercase tracking-wider">Top Match</span>
</div>
<h1 class="text-3xl font-bold text-white leading-tight mb-2">Premium Genetics Match</h1>
<p class="text-gray-300 text-sm line-clamp-2">Enhance your herd with this superior Boer Goat lineage, optimized for high yield and resilience.</p>
<button class="mt-4 w-full bg-white text-background-dark font-bold py-3 px-6 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2">
                        View Details
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
<!-- Stats Section -->
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between px-1">
<h3 class="text-lg font-bold text-white tracking-tight">Your Herd</h3>
<button class="text-primary text-sm font-semibold hover:text-white transition-colors">View All</button>
</div>
<div class="grid grid-cols-2 gap-3">
<!-- Cow Stat -->
<div class="col-span-2 relative overflow-hidden rounded-2xl bg-[#1c2e25] border border-white/5 p-5 group">
<div class="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-primary">grass</span>
</div>
<div class="relative z-10 flex flex-col gap-1">
<div class="flex items-center gap-2 mb-2">
<div class="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-lg">grass</span>
</div>
<span class="text-gray-400 font-medium text-sm">Cows</span>
</div>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-bold text-white">3</span>
<span class="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">+1 this month</span>
</div>
</div>
</div>
<!-- Goat Stat -->
<div class="relative overflow-hidden rounded-2xl bg-[#283930]/50 backdrop-blur-md border border-white/5 p-5 group hover:bg-[#283930] transition-colors">
<div class="relative z-10 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="size-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<span class="material-symbols-outlined text-lg">cruelty_free</span>
</div>
<span class="material-symbols-outlined text-gray-600">more_horiz</span>
</div>
<div>
<span class="text-gray-400 font-medium text-sm block mb-1">Goats</span>
<span class="text-2xl font-bold text-white">12</span>
</div>
</div>
</div>
<!-- Pig Stat -->
<div class="relative overflow-hidden rounded-2xl bg-[#283930]/50 backdrop-blur-md border border-white/5 p-5 group hover:bg-[#283930] transition-colors">
<div class="relative z-10 flex flex-col gap-3">
<div class="flex items-center justify-between">
<div class="size-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
<span class="material-symbols-outlined text-lg">savings</span>
</div>
<span class="material-symbols-outlined text-gray-600">more_horiz</span>
</div>
<div>
<span class="text-gray-400 font-medium text-sm block mb-1">Pigs</span>
<span class="text-2xl font-bold text-white">5</span>
</div>
</div>
</div>
</div>
</div>
<!-- Additional Promo / Graph Placeholder -->
<div class="rounded-2xl bg-gradient-to-br from-[#1c2e25] to-background-dark border border-white/5 p-6 flex items-center justify-between">
<div>
<p class="text-sm text-gray-400 mb-1">Total Herd Value</p>
<h3 class="text-xl font-bold text-white tracking-tight">RWF 4,500,000</h3>
</div>
<div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
<span class="material-symbols-outlined">trending_up</span>
</div>
</div>
</main>
<!-- Bottom Navigation (Simulated) -->
<nav class="fixed bottom-0 left-0 w-full bg-background-dark/90 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex justify-between items-center z-50">
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined filled">grid_view</span>
<span class="text-[10px] font-medium">Home</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined">search</span>
<span class="text-[10px] font-medium">Match</span>
</button>
<button class="flex items-center justify-center size-12 -mt-8 bg-primary text-background-dark rounded-full shadow-lg shadow-primary/30 border-4 border-background-dark">
<span class="material-symbols-outlined text-2xl">add</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-[10px] font-medium">Stats</span>
</button>
<button class="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>
</body></html>

<!-- Sheep Genetic Profile -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sheep Genetic Profile</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS with Config -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#11d41e",
                        "background-light": "#f6f8f6",
                        "background-dark": "#102211",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                    boxShadow: {
                        'neumorphic-dark': '6px 6px 12px #0a150a, -6px -6px 12px #162f18',
                        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                    }
                },
            },
        }
    </script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #102211; 
        }
        ::-webkit-scrollbar-thumb {
            background: #11d41e; 
            border-radius: 3px;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden">
<div class="relative flex min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden">
<!-- Top App Bar with Glassmorphism -->
<div class="sticky top-0 z-50 flex items-center justify-between p-4 pb-2 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
<div class="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-white/5 rounded-full transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Dorper Sheep</h2>
<div class="flex size-12 items-center justify-center">
<button class="flex items-center justify-center rounded-full size-10 bg-transparent text-white hover:bg-white/5 transition-colors cursor-pointer">
<span class="material-symbols-outlined text-2xl">share</span>
</button>
</div>
</div>
<!-- Scrollable Content -->
<div class="flex-1 overflow-y-auto pb-24"> <!-- Padding bottom for FAB space -->
<!-- Header Image -->
<div class="@container">
<div class="@[480px]:px-4 @[480px]:py-3 p-0">
<div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden @[480px]:rounded-xl min-h-[360px] relative shadow-lg" data-alt="Dorper sheep standing in a lush green pasture under sunlight" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAfNFXL63r7f9ZGahd0HiqywzK92heh82D7jFE8M9eCEHgNkjNJqdk4MUsXS-BHdbmmabSN0Dl9a5jCdE2HqwV32lUWor_whyrFDkrwJo_wbk0GECGMUw3b7cbgQ4tes_-ICAzoo0SkY_zJhX8bLhbSscl0ZPWrI0L8wTDeKftFpvcdAv2WA_0mEMK54hubplksGtnWR9nMtu9e9QbysBMhokoM-WgkGL3GPqlYYlgujuO1x9URUgaylFGy3Y1fkiTO7zj9Qphhm0");'>
<!-- Gradient Overlay for text readability if needed later, or aesthetic -->
<div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
<!-- Floating info on image -->
<div class="relative z-10 p-6">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 mb-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="text-xs font-bold text-primary uppercase tracking-wider">Premium Genetics</span>
</div>
<h1 class="text-3xl font-bold text-white mb-1">D-742 Alpha</h1>
<p class="text-gray-300 text-sm">Eastern Province, Rwanda</p>
</div>
</div>
</div>
</div>
<!-- Profile Stats (Glassmorphism) -->
<div class="flex flex-wrap gap-3 px-4 py-4">
<div class="glass-panel flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-2 rounded-2xl p-4 items-center text-center hover:bg-white/5 transition-colors duration-300 cursor-default group">
<div class="p-2 rounded-full bg-primary/10 mb-1 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-xl">biotech</span>
</div>
<p class="text-white tracking-tight text-xl font-bold leading-tight">98%</p>
<p class="text-gray-400 text-xs font-medium uppercase tracking-wide">Purity</p>
</div>
<div class="glass-panel flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-2 rounded-2xl p-4 items-center text-center hover:bg-white/5 transition-colors duration-300 cursor-default group">
<div class="p-2 rounded-full bg-primary/10 mb-1 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-xl">restaurant</span>
</div>
<p class="text-white tracking-tight text-xl font-bold leading-tight">High</p>
<p class="text-gray-400 text-xs font-medium uppercase tracking-wide">Meat Yield</p>
</div>
<div class="glass-panel flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-2 rounded-2xl p-4 items-center text-center hover:bg-white/5 transition-colors duration-300 cursor-default group">
<div class="p-2 rounded-full bg-primary/10 mb-1 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-xl">checkroom</span>
</div>
<p class="text-white tracking-tight text-xl font-bold leading-tight">A+</p>
<p class="text-gray-400 text-xs font-medium uppercase tracking-wide">Wool</p>
</div>
</div>
<!-- Section Header -->
<div class="px-4 pt-6 pb-2 flex items-center justify-between">
<h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Genetic Markers</h3>
<span class="text-primary text-sm font-medium cursor-pointer hover:underline">View Full Report</span>
</div>
<!-- Charts Section -->
<div class="flex flex-col gap-6 px-4 py-4">
<!-- Wool Quality Chart (Glassy Card) -->
<div class="glass-panel rounded-2xl p-5 w-full">
<div class="flex justify-between items-start mb-6">
<div class="flex flex-col gap-1">
<p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Wool Micron Count</p>
<div class="flex items-baseline gap-2">
<p class="text-white tracking-tight text-3xl font-bold leading-tight">28μ</p>
<span class="text-primary text-sm font-bold flex items-center">
<span class="material-symbols-outlined text-sm mr-0.5">trending_down</span>
                                    -2%
                                </span>
</div>
</div>
<div class="p-2 bg-white/5 rounded-lg">
<span class="material-symbols-outlined text-gray-400">bar_chart</span>
</div>
</div>
<div class="grid gap-y-4 grid-cols-[auto_1fr] items-center">
<p class="text-gray-400 text-xs font-bold w-12 text-right pr-3">Fine</p>
<div class="h-3 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary/80 rounded-full shadow-[0_0_10px_rgba(17,212,30,0.5)]" style="width: 75%;"></div>
</div>
<p class="text-gray-400 text-xs font-bold w-12 text-right pr-3">Med</p>
<div class="h-3 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary/40 rounded-full" style="width: 45%;"></div>
</div>
<p class="text-gray-400 text-xs font-bold w-12 text-right pr-3">Coarse</p>
<div class="h-3 w-full bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary/20 rounded-full" style="width: 15%;"></div>
</div>
</div>
</div>
<!-- Growth Rate Chart (Glassy Card) -->
<div class="glass-panel rounded-2xl p-5 w-full">
<div class="flex justify-between items-start mb-2">
<div class="flex flex-col gap-1">
<p class="text-gray-400 text-xs font-medium uppercase tracking-wider">Growth Rate</p>
<div class="flex items-baseline gap-2">
<p class="text-white tracking-tight text-3xl font-bold leading-tight">4.5kg</p>
<span class="text-gray-500 text-sm">/ month</span>
</div>
</div>
<div class="p-2 bg-white/5 rounded-lg">
<span class="material-symbols-outlined text-gray-400">show_chart</span>
</div>
</div>
<div class="flex w-full flex-col gap-4 py-2">
<div class="h-[140px] w-full relative">
<!-- Custom Chart SVG -->
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 350 120">
<defs>
<lineargradient id="gradient-fill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#11d41e" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#11d41e" stop-opacity="0.0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>
<!-- Grid Lines -->
<line stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="350" y1="0" y2="0"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="350" y1="60" y2="60"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="350" y1="120" y2="120"></line>
<!-- Area Fill -->
<path d="M0,100 C50,100 80,60 120,50 C160,40 200,80 250,30 C300,-20 350,10 350,10 V120 H0 Z" fill="url(#gradient-fill)"></path>
<!-- Line Path -->
<path d="M0,100 C50,100 80,60 120,50 C160,40 200,80 250,30 C300,-20 350,10 350,10" fill="none" filter="url(#glow)" stroke="#11d41e" stroke-linecap="round" stroke-width="3"></path>
<!-- Data Point -->
<circle cx="250" cy="30" fill="#102211" r="4" stroke="#11d41e" stroke-width="2"></circle>
</svg>
</div>
<div class="flex justify-between px-2">
<p class="text-gray-500 text-xs font-medium">Q1</p>
<p class="text-gray-500 text-xs font-medium">Q2</p>
<p class="text-gray-500 text-xs font-medium">Q3</p>
<p class="text-primary text-xs font-bold">Current</p>
</div>
</div>
</div>
<!-- Spacer -->
<div class="h-4"></div>
</div>
</div>
<!-- Floating Edit Button (Neumorphic) -->
<div class="fixed bottom-6 right-6 z-50">
<button class="flex h-14 w-14 items-center justify-center rounded-full bg-background-dark text-primary shadow-neumorphic-dark hover:text-white transition-all duration-300 active:shadow-inner">
<span class="material-symbols-outlined text-2xl">edit</span>
</button>
</div>
</div>
</body></html>

<!-- Interactive Breeder Map -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Interactive Breeder Map</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1c5f20",
                        "emerald-accent": "#10b981",
                        "terracotta-accent": "#e07a5f",
                        "background-light": "#f6f8f6",
                        "background-dark": "#131f14",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .glass {
            background: rgba(30, 37, 30, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .map-mesh {
            background-image: radial-gradient(circle at 2px 2px, rgba(28, 95, 32, 0.15) 1px, transparent 0);
            background-size: 24px 24px;
        }
        .glow-line {
            box-shadow: 0 0 15px rgba(28, 95, 32, 0.4);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-white overflow-hidden h-screen flex flex-col">
<!-- Top Navigation Bar -->
<header class="relative z-20 flex items-center bg-transparent p-4 pb-2 justify-between">
<div class="text-white flex size-12 shrink-0 items-center justify-start">
<span class="material-symbols-outlined">menu</span>
</div>
<h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Breeder Map</h2>
<div class="flex w-12 items-center justify-end">
<button class="flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary/20 text-white transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main class="relative flex-1 overflow-hidden">
<!-- Map Background (Simulation) -->
<div class="absolute inset-0 z-0 bg-background-dark map-mesh" data-location="Rwanda Topographic Map" style="">
<!-- Simulated glowing river lines / topographic features -->
<svg class="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
<path class="glow-line" d="M-50 200 Q 100 150, 200 300 T 400 250 T 600 400" fill="none" stroke="#1c5f20" stroke-width="2"></path>
<path class="glow-line" d="M-50 500 Q 150 450, 250 600 T 500 550" fill="none" stroke="#1c5f20" stroke-width="1.5"></path>
<path class="glow-line" d="M200 -50 Q 250 150, 150 300 T 200 500" fill="none" stroke="#1c5f20" stroke-width="1"></path>
</svg>
<!-- Map Pins (Active - Emerald) -->
<div class="absolute top-1/3 left-1/4">
<div class="relative flex items-center justify-center">
<div class="absolute w-8 h-8 bg-emerald-accent/30 rounded-full scale-150 animate-ping"></div>
<div class="relative z-10 w-4 h-4 bg-emerald-accent rounded-full border-2 border-white shadow-[0_0_10px_#10b981]"></div>
</div>
</div>
<div class="absolute top-1/2 left-2/3">
<div class="relative flex items-center justify-center">
<div class="absolute w-8 h-8 bg-emerald-accent/30 rounded-full scale-150"></div>
<div class="relative z-10 w-4 h-4 bg-emerald-accent rounded-full border-2 border-white shadow-[0_0_10px_#10b981]"></div>
</div>
</div>
<!-- Map Pins (Pending - Terracotta) -->
<div class="absolute top-2/3 left-1/2">
<div class="relative flex items-center justify-center">
<div class="absolute w-8 h-8 bg-terracotta-accent/30 rounded-full scale-150 animate-pulse"></div>
<div class="relative z-10 w-4 h-4 bg-terracotta-accent rounded-full border-2 border-white shadow-[0_0_10px_#e07a5f]"></div>
</div>
</div>
</div>
<!-- Floating Search Bar -->
<div class="absolute top-4 inset-x-4 z-30">
<div class="glass rounded-xl flex items-center h-14 px-4 shadow-2xl">
<span class="material-symbols-outlined text-white/60">search</span>
<input class="bg-transparent border-none focus:ring-0 text-white placeholder:text-white/40 flex-1 px-3 text-base" placeholder="Search genetic breeders..." type="text"/>
<button class="p-2 text-primary">
<span class="material-symbols-outlined">mic</span>
</button>
</div>
</div>
<!-- Legend Chips -->
<div class="absolute top-24 left-4 z-20 flex gap-2">
<div class="glass flex h-8 items-center gap-2 rounded-full pl-3 pr-4">
<div class="w-2 h-2 rounded-full bg-emerald-accent"></div>
<p class="text-white text-xs font-medium">Active</p>
</div>
<div class="glass flex h-8 items-center gap-2 rounded-full pl-3 pr-4">
<div class="w-2 h-2 rounded-full bg-terracotta-accent"></div>
<p class="text-white text-xs font-medium">Pending</p>
</div>
</div>
<!-- Floating Zoom Controls -->
<div class="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
<button class="glass size-12 flex items-center justify-center rounded-xl shadow-lg">
<span class="material-symbols-outlined">add</span>
</button>
<button class="glass size-12 flex items-center justify-center rounded-xl shadow-lg">
<span class="material-symbols-outlined">remove</span>
</button>
<button class="glass size-12 flex items-center justify-center rounded-xl mt-4 bg-primary/40">
<span class="material-symbols-outlined">my_location</span>
</button>
</div>
<!-- Farmer Summary Card (Revealed state) -->
<div class="absolute bottom-10 inset-x-4 z-30">
<div class="glass rounded-xl p-4 shadow-2xl overflow-hidden relative">
<!-- Card Glow -->
<div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
<div class="flex items-center justify-between gap-4">
<div class="flex flex-col gap-1 flex-1">
<div class="flex items-center gap-2">
<span class="text-emerald-accent text-[10px] font-bold tracking-widest uppercase">Active Farmer</span>
<div class="w-1 h-1 rounded-full bg-white/30"></div>
<span class="text-white/60 text-[10px] font-medium uppercase">Kigali Highlands</span>
</div>
<p class="text-white text-lg font-bold leading-tight">Ankole-Watusi Bull</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-yellow-500 text-xs" style="font-variation-settings: 'FILL' 1">star</span>
<p class="text-white/80 text-xs font-medium">4.9 (124 matches)</p>
</div>
<button class="mt-4 flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white gap-2 text-sm font-semibold transition-transform active:scale-95 w-fit">
<span>View Profile</span>
<span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div class="relative w-28 h-28 rounded-xl overflow-hidden border border-white/10 shrink-0">
<img alt="Majestic Ankole bull in green field" class="w-full h-full object-cover" data-alt="Majestic Ankole bull with long horns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTqNqTRuXzSNQAAAkq44pUE6tHtIx8FgSu-tsBKYrQUmp5URG53Ip4PPkijbxLTOeU_2Dq8g2v40fLulW4Imh5eYw5TNDmy2LDM7ygv7jpn_ae4RirZj1Q-ITeIhwNUS9L6eR-FjbC8kkEpuPCK48oyenFN7iHWTWfMUAYT736bAU0QPlMDvhBHcIHHCBkIFlqknI7gv6APqFIRQHIZL6GdNl6BcBOIyAAdXJ_CWCWAFMRqu-GgqJ3tfTerYvDy04EvU9u4BPCBZ4"/>
</div>
</div>
</div>
</div>
<!-- iOS Bottom Indicator -->
<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-40"></div>
</main>
<!-- Navigation Tab Bar -->
<nav class="glass border-t-0 py-2 px-6 flex justify-between items-center z-50">
<div class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">map</span>
<span class="text-[10px] font-bold">Explore</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined">diversity_2</span>
<span class="text-[10px] font-medium">Genetics</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined">chat_bubble</span>
<span class="text-[10px] font-medium">Messages</span>
</div>
<div class="flex flex-col items-center gap-1 text-white/40">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-medium">Account</span>
</div>
</nav>
</body></html>

<!-- Match Success Celebration -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Match Success Celebration</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Icons -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
            extend: {
                colors: {
                "primary": "#eebd2b",
                "background-light": "#f8f7f6",
                "background-dark": "#221d10",
                },
                fontFamily: {
                "display": ["Epilogue", "sans-serif"]
                },
                borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                animation: {
                    'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    'float': 'float 6s ease-in-out infinite',
                },
                keyframes: {
                    float: {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px)' },
                    }
                }
            },
            },
        }
    </script>
<style>
        /* Custom utilities for glassmorphism and decorations */
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-circle {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        .text-glow {
            text-shadow: 0 0 20px rgba(238, 189, 43, 0.5);
        }

        .confetti-piece {
            position: absolute;
            width: 8px;
            height: 14px;
            background: #eebd2b;
            opacity: 0.7;
        }

        /* Abstract bg pattern */
        .bg-pattern {
            background-image: radial-gradient(circle at 50% 0%, rgba(238, 189, 43, 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 40%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-white h-screen w-full overflow-hidden flex flex-col relative bg-pattern">
<!-- Simulated Confetti Background Elements (Static Representation) -->
<div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
<!-- Gold Confetti -->
<div class="absolute top-[15%] left-[10%] w-3 h-3 bg-primary rounded-sm rotate-12 opacity-60"></div>
<div class="absolute top-[25%] right-[15%] w-2 h-4 bg-primary rounded-sm -rotate-45 opacity-80"></div>
<div class="absolute top-[10%] right-[30%] w-3 h-3 border-2 border-primary rounded-full opacity-50"></div>
<div class="absolute bottom-[40%] left-[5%] w-2 h-2 bg-primary rounded-full opacity-60"></div>
<!-- Green Confetti (Genetic Growth Theme) -->
<div class="absolute top-[20%] left-[25%] w-2 h-5 bg-emerald-500 rounded-sm rotate-90 opacity-60"></div>
<div class="absolute top-[30%] right-[5%] w-3 h-3 bg-emerald-400 rounded-full opacity-50"></div>
<div class="absolute bottom-[35%] right-[20%] w-2 h-4 bg-emerald-500 rounded-sm rotate-12 opacity-70"></div>
<!-- Blurs -->
<div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
</div>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col items-center justify-center px-6 relative z-10 w-full max-w-md mx-auto">
<!-- Celebration Header -->
<div class="text-center mb-8 animate-[float_4s_ease-in-out_infinite]">
<div class="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10 border border-primary/30">
<span class="material-icons-round text-primary text-2xl">stars</span>
</div>
<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-amber-100 text-glow leading-tight tracking-tight">
                It's a<br/>Match!
            </h1>
<p class="text-white/60 mt-3 text-lg font-medium">96% Genetic Compatibility</p>
</div>
<!-- The Match Visuals -->
<div class="relative w-full flex items-center justify-center h-64 mt-4">
<!-- Left Animal: Boer Goat -->
<div class="absolute left-2 top-1/2 -translate-y-1/2 z-10">
<div class="w-36 h-36 glass-circle rounded-full p-2 relative flex items-center justify-center transform -rotate-6 transition-transform duration-700 hover:rotate-0 hover:z-30 hover:scale-105">
<div class="w-full h-full rounded-full overflow-hidden relative">
<img alt="Close up portrait of a Boer goat with distinctive brown head and white body" class="w-full h-full object-cover" data-alt="Close up portrait of a Boer goat with distinctive brown head and white body" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCds4ssulAa0EEy8Dab64aamb9GexT1KOAITortTZqcVodWp2br0LNYvUCOBCai1-xllGN8tcU0Ss--Lf_g3hpX8zC3svKNv8XkXbXM5dAIS8Oz7Ih10NXkrdn1dMlSdsu-SnDgP0wfswZmFarLT8_ocNXNcJG4NNRJ12Tnf6DJWlc03xx3KCFNxGsNj-PJ_EvXJ-Q2K3_YupZlTjEPBim9M1qwmXn2z5kXwmFC4j62KMkkDlcavJXtyiLuqGqNM8yG2_33ubBaiGg"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<!-- Badge -->
<div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background-dark/80 backdrop-blur border border-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        Boer Premium
                    </div>
</div>
</div>
<!-- Right Animal: Local Breed -->
<div class="absolute right-2 top-1/2 -translate-y-1/2 z-10">
<div class="w-36 h-36 glass-circle rounded-full p-2 relative flex items-center justify-center transform rotate-6 transition-transform duration-700 hover:rotate-0 hover:z-30 hover:scale-105">
<div class="w-full h-full rounded-full overflow-hidden relative">
<img alt="Close up of a Rwandan local goat breed grazing in a field" class="w-full h-full object-cover" data-alt="Close up of a Rwandan local goat breed grazing in a field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF5B2CwrbBjoRJakx9qVhbjx-rY2rp6paNXjaDf1YX89TP2Ll8CXjEOLl7S0SqISTKkYEu63n5mnwJDVOC7Ac552cz5z8Etn21I-4u0NP_6RBIQj4Agg0n_SKZXibaFAaZoDFarnrextgbmWHEjOjkRlJbfcak9AsTHaRuuTXhnY-mMVB5R3rwr2PLHs28eZwlH6XKP0XW7lGLIBDgCceW9jpT_B0Ic8fD_XFjLh8b0nJ1JqkjABscBV-swY54vTrmyB85NafAi5s"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<!-- Badge -->
<div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background-dark/80 backdrop-blur border border-white/10 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        Local Mubende
                    </div>
</div>
</div>
<!-- Connecting Heart (Center) -->
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(238,189,43,0.6)] animate-pulse-slow border-4 border-background-dark">
<span class="material-icons-round text-background-dark text-4xl">favorite</span>
</div>
</div>
<!-- Connecting Line Glow -->
<div class="absolute left-[20%] right-[20%] top-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[1px] z-0"></div>
</div>
<!-- Additional Match Details Text -->
<div class="mt-8 text-center px-4">
<p class="text-white/80 text-sm leading-relaxed">
<span class="text-primary font-bold">Great match!</span> The offspring are projected to have <span class="text-white font-semibold">25% higher growth rates</span> and improved disease resistance.
            </p>
</div>
</main>
<!-- Bottom Actions Glass Card -->
<div class="w-full max-w-md mx-auto p-4 z-20">
<div class="glass-panel rounded-lg p-5 w-full flex flex-col gap-3 shadow-2xl">
<!-- Primary Action -->
<button class="w-full bg-primary text-background-dark font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95">
<span class="material-icons-round">chat_bubble</span>
                Message Breeder
            </button>
<!-- Secondary Action -->
<button class="w-full bg-white/5 border border-white/10 text-white font-semibold text-lg py-4 rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2">
<span class="material-icons-round">analytics</span>
                View Genetic Details
            </button>
<button class="w-full text-white/40 text-sm font-medium py-2 hover:text-white transition-colors">
                Keep swiping
            </button>
</div>
</div>
</body></html>

<!-- Breeder Messages List -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Breeder Messages List</title>
<!-- Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&amp;family=Spline+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Config -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#11d41e",
                        "background-light": "#f6f8f6",
                        "background-dark": "#102211",
                        "glass-surface": "rgba(255, 255, 255, 0.05)",
                        "glass-border": "rgba(255, 255, 255, 0.1)",
                    },
                    fontFamily: {
                        "display": ["Spline Sans", "sans-serif"],
                        "body": ["Noto Sans", "sans-serif"],
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                    backgroundImage: {
                        'rwandan-night': 'radial-gradient(circle at 50% 0%, #1a3c28 0%, #102211 60%, #050b05 100%)',
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar for clean look */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-display antialiased selection:bg-primary selection:text-white">
<!-- Main Container -->
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-rwandan-night">
<!-- Background Ambient Glows -->
<div class="fixed top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
<div class="fixed bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none"></div>
<!-- Top App Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#102211]/30 border-b border-white/5">
<button class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 active:scale-95">
<span class="material-symbols-outlined text-white">arrow_back</span>
</button>
<h1 class="flex-1 text-center text-xl font-bold tracking-tight text-white drop-shadow-sm">Messages</h1>
<button class="flex items-center justify-center rounded-full px-3 py-1.5 transition-colors hover:bg-white/5">
<span class="text-sm font-semibold text-primary tracking-wide">New Chat</span>
</button>
</header>
<!-- Search Bar -->
<div class="px-6 py-4 z-10">
<div class="relative group">
<div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
<span class="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="block w-full rounded-2xl border border-white/10 bg-glass-surface py-3.5 pl-12 pr-4 text-white placeholder-gray-400 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 focus:ring-0 focus:outline-none transition-all shadow-lg shadow-black/20" placeholder="Search breeders or livestock..." type="text"/>
</div>
</div>
<!-- Messages List -->
<main class="flex-1 px-4 pb-8 space-y-3 z-10">
<!-- Item 1: Active Match (Golden Highlight) -->
<div class="group relative flex items-center gap-4 rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-900/20 to-transparent p-3 pr-4 shadow-[0_0_20px_rgba(234,179,8,0.1)] backdrop-blur-md transition-all active:scale-[0.98]">
<div class="absolute -left-[1px] top-1/2 h-1/2 w-1 -translate-y-1/2 rounded-r-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
<div class="relative shrink-0">
<div class="h-16 w-16 overflow-hidden rounded-full ring-2 ring-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
<img alt="Portrait of a healthy brown bull in a field" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz2fkWPuoSCSY-A6QT0DWMqeY42H3iwLgaQlgGQlNLkTz3hVv0vLxsrM-fUUyup0-7yHeJE7pvl4nb6lc_-77BZMDwZ5v6FWnS2g0hSqNf2JZIDLKx1xpadrVYPDTCHmArJxtSAoYOb6wWu3vh-kOc0xKbZibmFaqZrlWLylb0FCb_IAGzb0TxBUcapi7_61ByVy3jX30fnBF-P1TmwbWw-pCRS8UidubcaE4Ga023O-FVfbmeZbSDUMgexnI19pVLIxAJkNvGvxY"/>
</div>
<!-- Online Status -->
<div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-[#102211] bg-primary shadow-[0_0_8px_rgba(17,212,30,0.8)]"></div>
</div>
<div class="flex flex-1 flex-col justify-center min-w-0">
<div class="flex items-center justify-between mb-0.5">
<h3 class="font-display text-lg font-bold text-white truncate pr-2">Jean-Paul (Golden Match)</h3>
<span class="shrink-0 text-xs font-medium text-yellow-500">Now</span>
</div>
<p class="truncate text-sm font-medium text-yellow-100/80">Is the bull available for transport to Musanze?</p>
</div>
</div>
<!-- Item 2 -->
<div class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-glass-surface p-3 pr-4 backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]">
<div class="relative shrink-0">
<div class="h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
<img alt="Black and white dairy cow grazing" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbueZVF_vLGlnUfVQQP3M0V5z3Y1PPcIGqYk9Fcs36AWbAteimZN98T87Xt7zOdYwiY_mOuauyeZnd1EOM2Hi6MFn9lpVhk1LbYpd6tfbbApaXX9vIt2aSIkWBmyB6mTKsOnTZVyCl0q76gP3pzGKJzlySgwkIxdEj1j62YAcYFTaJu7AT6Mmvo6N0UniHGKRQ9BMGveze1VCpEpq5sNw53f9rxwDav9jJ-Pn3nLlVK1-C4W7Lfm1EUVkk3l7-ycUZc48GfPOa1o"/>
</div>
<div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-[#102211] bg-primary shadow-[0_0_8px_rgba(17,212,30,0.8)]"></div>
</div>
<div class="flex flex-1 flex-col justify-center min-w-0">
<div class="flex items-center justify-between mb-0.5">
<h3 class="font-display text-lg font-semibold text-white truncate pr-2">Marie Uwase</h3>
<span class="shrink-0 text-xs font-medium text-gray-400">2m ago</span>
</div>
<p class="truncate text-sm text-gray-400 group-hover:text-gray-300">Excellent milk yields reported from the last batch.</p>
</div>
</div>
<!-- Item 3 -->
<div class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-glass-surface p-3 pr-4 backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]">
<div class="relative shrink-0">
<div class="h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
<img alt="Modern laboratory equipment for genetics" class="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN4Oihws7n2R16y1yF6WTNRYrA3zs0idX-WucgFhA4Sdo65SnWUgcNyecwHwuxzX8OnevtdcCxFAkCyR1aZjpYNL7OE8KAOVlhCwQN5f9hRmqQavjP7IGHLQh4v0YTm77qiwngZ1QymI8ZnyJnf2KeGm0TnhgN5k5GdOaReqgCzGNQlcITr0fGryTZvLnpdpAkCZhrz_8t2rySaOMd7lB1ghV-QqQddqMmf8pVJYvBoOYfTLiI7F64jgC23lbjOO1r3-nmAZMMgok"/>
</div>
<!-- Offline/Away Status (Grey) -->
<div class="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-[#102211] bg-gray-500"></div>
</div>
<div class="flex flex-1 flex-col justify-center min-w-0">
<div class="flex items-center justify-between mb-0.5">
<h3 class="font-display text-lg font-semibold text-white truncate pr-2">Kigali Genetics</h3>
<span class="shrink-0 text-xs font-medium text-gray-400">1h ago</span>
</div>
<div class="flex items-center gap-1 text-gray-400 group-hover:text-gray-300">
<span class="material-symbols-outlined text-[16px]">attach_file</span>
<p class="truncate text-sm">Genetic report attached for review.</p>
</div>
</div>
</div>
<!-- Item 4 -->
<div class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-glass-surface p-3 pr-4 backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]">
<div class="relative shrink-0">
<div class="h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
<img alt="Close up of a goat face" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-YK3WrDcycUpx5MwV_ETFUpR2L_yKbixNhY3qYDIpB90mQI-IWFDLdvCCIGa49lT5mVeTsQDgBj0fv25mo0uh_0B9wyx8KLel2f2h2LhzmBN8jS_7geCb2G_EHZ3FwnMlZR-i14vQBVTDTXMGsMVjCPub15j_vxeVkVT8Wsa5nMLgKCLYFAFdrtzTPAPTsMo3WMNGVXitvJv80ZTY2_c0USPu_TJaPYS6vMIejX9ylR--L6BgxDCogJq2PUqDc7DSdOb56DVP47g"/>
</div>
</div>
<div class="flex flex-1 flex-col justify-center min-w-0">
<div class="flex items-center justify-between mb-0.5">
<h3 class="font-display text-lg font-semibold text-white truncate pr-2">Emmanuel N.</h3>
<span class="shrink-0 text-xs font-medium text-gray-400">Yesterday</span>
</div>
<p class="truncate text-sm text-gray-400 group-hover:text-gray-300">Can we schedule a viewing for Saturday?</p>
</div>
</div>
<!-- Item 5 -->
<div class="group flex items-center gap-4 rounded-2xl border border-white/5 bg-glass-surface p-3 pr-4 backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]">
<div class="relative shrink-0">
<div class="h-16 w-16 overflow-hidden rounded-full ring-1 ring-white/10">
<img alt="Flock of sheep in a green field" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8hzNT5OE4O4DaKW-_vyERXTzBWhbGE0A9qvdXhcHYOpNP32lUS_LUSPHrkFKq1Kl8pY9miiSqwhXmtG2L8Wl9AABd8C0uBbD6sjhxJlAuXbsfQ-AY3edP9kgyBmnVEo8OeDAIqkeSfL90fmJEBS88yaGe9Uh9MXO8099p0Ca86-UaquCt4tV743RpHzdEzIX7aG4C-qrzO12RMVtBG6I79WDkY_iNMR51CA_1-yRow5dqIGXaavx0amCC3aWwjCHK3U5J08wppJo"/>
</div>
</div>
<div class="flex flex-1 flex-col justify-center min-w-0">
<div class="flex items-center justify-between mb-0.5">
<h3 class="font-display text-lg font-semibold text-white truncate pr-2">Cooperative Abahizi</h3>
<span class="shrink-0 text-xs font-medium text-gray-400">Yesterday</span>
</div>
<p class="truncate text-sm text-gray-400 group-hover:text-gray-300">The vaccination records are updated.</p>
</div>
</div>
</main>
<!-- Floating Action Button (Optional for "Compose") -->
<button class="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[0_0_20px_rgba(17,212,30,0.4)] transition-transform hover:scale-105 active:scale-95 z-40">
<span class="material-symbols-outlined text-black" style="font-size: 28px;">add_comment</span>
</button>
</div>
</body></html>

## 📈 Performance Features

- **Genetic Diversity Scoring**: Algorithms to calculate breeding compatibility
- **Inbreeding Risk Assessment**: Prevent harmful genetic combinations
- **Breed Composition Matching**: Optimize offspring characteristics
- **Performance Prediction**: Forecast expected outcomes based on parent data

## 🔐 Security

- JWT-based authentication
- Role-based access control
- Data encryption for sensitive information
- Secure API endpoints with validation

## 📚 API Documentation

The API documentation will be available at:
- Development: `http://localhost:3000/api/docs`
- Swagger/OpenAPI specification included

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation for new features
- Use conventional commit messages

## 📦 Deployment



### Production Checklist
- [ ] Database migrations applied
- [ ] Environment variables configured
- [ ] Monitoring tools setup
- [ ] Backup strategies implemented

## 🐛 Troubleshooting

### Common Issues

**Database Connection**
```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Test connection
npx prisma db pull
```

**Prisma Issues**
```bash
# Reset database (development only)
npx prisma migrate reset

# Regenerate client
npx prisma generate
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer**: [i-ganza007](https://github.com/i-ganza007)
- **Project Type**: Livestock Breeding Management System
- **Status**: In Development 🚧

## 📞 Support

For support and questions:
- 📧 Email: [ianganza4@gmail.com/i.ganza@alustudent.com]
- 🐛 Issues: [GitHub Issues](https://github.com/i-ganza007/Match_Backend/issues)
- 📖 Documentation: [Project Wiki](https://github.com/i-ganza007/Match_Backend/wiki)

## 🙏 Acknowledgments

- NestJS framework for the robust backend architecture
- Prisma for the excellent database toolkit
- The open-source community for invaluable tools and resources
- Agricultural experts who provided domain knowledge

---

<p align="center">
  Made with ❤️ for improving livestock breeding practices
</p>
