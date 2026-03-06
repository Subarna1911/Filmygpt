# 🎬 FilmyGPT

> A Netflix-inspired movie discovery platform powered by AI — search naturally, discover intelligently.

## 📖 Overview

**FilmyGPT** is a full-stack movie discovery web application that combines the visual experience of a streaming platform with the power of AI-driven recommendations. Users can browse trending movies, watch trailers, manage a personal watchlist, and use natural language to get personalized movie suggestions powered by an LLM.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure Sign Up / Sign In / Sign Out via Firebase Auth |
| 🎞️ **Movie Browsing** | Now Playing, Popular, Top Rated, and Upcoming movies via TMDB API |
| 🤖 **AI Movie Search** | Natural language search powered by OpenRouter (GPT-4o-mini) |
| 🌍 **Multilingual Support** | UI localization for English, Hindi, Nepali, and Spanish |
| 🎬 **Trailers** | Embedded YouTube trailers on hero banner and on hover |
| 📋 **My Watchlist** | Add/remove movies to a personal watchlist (Redux-persisted) |
| 🌗 **Theme Toggle** | Seamless Dark / Light mode switching |
| 💎 **Shimmer Loading** | Skeleton loading states for a polished UX |
| 🎠 **Swiper Carousel** | Smooth horizontal movie carousels per category |
| 📱 **Responsive Design** | Fully responsive across desktop and mobile |

---

## 🏗️ Architecture

```
FilmyGPT/
├── src/                          # React frontend (Vite)
│   ├── components/               # Reusable UI components
│   │   ├── Header.jsx            # Navigation with auth & theme toggle
│   │   ├── VideoBackground.jsx   # Hero trailer player
│   │   ├── MovieCard.jsx         # Card with hover trailer preview
│   │   ├── GptSearchBar.jsx      # AI-powered search input
│   │   ├── GptMovieSuggestions.jsx # AI result display
│   │   └── ...
│   ├── pages/                    # Route-level page components
│   │   ├── Homepage.jsx          # Landing / Browse page
│   │   ├── GptSearchPage.jsx     # AI Search page
│   │   └── Mylist.jsx            # Personal watchlist page
│   ├── hooks/                    # Custom React hooks
│   │   ├── useGptSearch.js       # AI search orchestration
│   │   ├── useNowPlayingMovies.js# TMDB data fetching
│   │   └── useHoverTrailer.js    # Hover trailer logic
│   ├── utils/                    # Redux store, API config, constants
│   │   ├── appStore.js           # Redux store
│   │   ├── movieSlice.js         # Movie state
│   │   ├── gptSearchSlice.js     # GPT results state
│   │   ├── configSlice.js        # Language / theme config
│   │   ├── watchlistSlice.js     # Watchlist state
│   │   ├── openRouterApi.js      # Backend proxy caller
│   │   └── firebase.js           # Firebase init
│   └── ContextApi/               # React context providers
│
└── backend/                      # Express.js API server
    ├── server.js                 # CORS proxy for OpenRouter API
    └── .env                      # OPENROUTER_API_KEY
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool & dev server |
| Redux Toolkit | Global state management |
| React Router DOM v7 | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| Swiper.js | Movie carousels |
| Lucide React | Icon library |
| Firebase | User authentication & analytics |

### Backend
| Technology | Purpose |
|---|---|
| Express.js v5 | REST API server |
| node-fetch | Server-side HTTP requests |
| cors | Cross-origin request handling |
| dotenv | Environment variable management |
| nodemon | Development auto-reload |

### External APIs
| API | Purpose |
|---|---|
| [TMDB API](https://developer.themoviedb.org/) | Movie data, posters, trailers |
| [OpenRouter](https://openrouter.ai/) (GPT-4o-mini) | AI movie recommendations |
| Firebase Auth | User management |
| YouTube Embed | Trailer playback |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- A [TMDB API key](https://developer.themoviedb.org/docs/getting-started)
- An [OpenRouter API key](https://openrouter.ai/keys)
- A [Firebase project](https://console.firebase.google.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/filmygpt.git
cd filmygpt
```

---

### 2. Frontend Setup

```bash
npm install
```

Create a `.env` file in the **root** directory:

```env
VITE_TMDB_API=your_tmdb_bearer_token_here
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

Start the frontend dev server:

```bash
npm run dev
# Runs on http://localhost:5173
```

---

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **`backend/`** directory:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Start the backend server:

```bash
# Development (with hot reload)
npm run dev

# Production
npm start

# Runs on http://localhost:5000
```

---

## 🤖 How AI Search Works

```
User types a query
        │
        ▼
GptSearchBar.jsx  →  useGptSearch.js hook
        │
        ▼
POST /api/movies  (Express backend — avoids CORS & hides API key)
        │
        ▼
OpenRouter API (GPT-4o-mini) — returns movie name list
        │
        ▼
Each movie name  →  TMDB Search API  →  fetches poster, rating, details
        │
        ▼
Redux gptSearchSlice  →  GptMovieSuggestions.jsx renders results
```

---

## 🔒 Environment Variables Reference

### Root `.env`
| Variable | Description |
|---|---|
| `VITE_TMDB_API` | TMDB Bearer token (from API settings) |

### `backend/.env`
| Variable | Description |
|---|---|
| `OPENROUTER_API_KEY` | OpenRouter API key |

> ⚠️ **Never commit `.env` files.** Both are already listed in `.gitignore`.

---

## 📦 Available Scripts

### Frontend
| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend
| Command | Description |
|---|---|
| `npm run dev` | Start with nodemon (hot reload) |
| `npm start` | Start production server |

---

## 🌐 Deployment

### Frontend — Firebase Hosting

```bash
npm run build
firebase deploy
```

> The `firebase.json` and `.firebaserc` are already configured in this project.

### Backend

Deploy the `backend/` directory to any Node.js-compatible host:
- [Render](https://render.com/) — `npm start` as the start command
- [Railway](https://railway.app/)
- [Vercel](https://vercel.com/) (serverless functions)

> 📝 After deploying the backend, update `openRouterApi.js` to use your production backend URL instead of `http://localhost:5000`.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---
<p align="center">Built with ❤️ using React, Firebase & OpenRouter</p>