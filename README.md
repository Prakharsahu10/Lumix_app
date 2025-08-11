# 🎬 Lumix - Movie Discovery App

<div align="center">
  <img src="./assets/images/logo.png" alt="Lumix Logo" width="120" height="120" />
  
  <h3>✨ Discover, Explore, and Enjoy Movies Like Never Before ✨</h3>
  
  [![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-~53.0.20-black.svg)](https://expo.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-blue.svg)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  
  <br />
  
  **A beautiful, modern React Native movie discovery app built with Expo and TypeScript**
</div>

---

## 🌟 Features

### 🏠 **Home Experience**

- **Trending Movies** - Discover what's hot with beautiful ranking overlays
- **Popular Collections** - Curated movie recommendations
- **Seamless Navigation** - Smooth transitions and intuitive UI

### 🔍 **Smart Search**

- **Real-time Search** - Find movies instantly as you type
- **Advanced Filtering** - Sort by genre, year, rating, and more
- **Search History** - Quick access to previous searches with Appwrite integration

### 🎭 **Movie Details**

- **Rich Information** - Cast, crew, synopsis, and ratings
- **High-Quality Posters** - Crystal clear movie artwork
- **User Reviews** - Community ratings and feedback

### 👤 **User Profile**

- **Personal Dashboard** - Track your movie journey
- **Favorites Management** - Keep track of movies you love
- **Watch History** - See what you've explored
- **Customizable Settings** - Personalize your experience

---

## 🛠️ Tech Stack

<div align="center">

|                                                      Frontend                                                      |                                                        Backend                                                        |                                                         Styling                                                         |                                                    Development                                                    |
| :----------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| ![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black) |      ![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)      | ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
|          ![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)           | ![TMDB API](https://img.shields.io/badge/TMDB%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white) |   ![NativeWind](https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)    |       ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)       |

</div>

### 🎨 **Core Technologies**

- **React Native 0.79.5** - Cross-platform mobile development
- **Expo Router** - File-based routing system
- **TypeScript** - Type-safe development
- **TailwindCSS + NativeWind** - Utility-first styling
- **Appwrite** - Backend-as-a-Service for data management
- **TMDB API** - Movie data and imagery

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator / Android Emulator (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Prakharsahu10/Lumix_app.git
   cd Lumix_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Add your API keys to `.env`:

   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run on your preferred platform**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

---

## 📱 Screenshots

<div align="center">
  <h3>🎬 App Showcase</h3>
  
  | Home Screen | Search | Movie Details | Profile |
  |:----------:|:------:|:-------------:|:-------:|
  | 🏠 Trending movies and recommendations | 🔍 Real-time search with filters | 🎭 Detailed movie information | 👤 User dashboard and settings |
  
  <p><em>Beautiful dark theme with smooth animations and intuitive navigation</em></p>
</div>

---

## 🏗️ Project Structure

```
lumix/
├── 📱 app/                    # App Router pages
│   ├── (tabs)/               # Tab-based navigation
│   │   ├── index.tsx         # Home screen
│   │   ├── search.tsx        # Search screen
│   │   ├── profile.tsx       # Profile screen
│   │   └── _layout.tsx       # Tab layout
│   ├── movies/               # Movie-related screens
│   │   └── [id].tsx          # Movie details page
│   ├── _layout.tsx           # Root layout
│   └── +not-found.tsx        # 404 page
├── 🎨 components/            # Reusable UI components
│   ├── MovieCard.tsx         # Movie card component
│   ├── TrendingCard.tsx      # Trending movie card
│   ├── ParallaxScrollView.tsx
│   └── ui/                   # UI primitives
├── 🔧 services/              # API and business logic
│   └── appwrite.ts           # Appwrite configuration
├── 🎯 constants/             # App constants
│   ├── Colors.ts             # Color definitions
│   ├── icons.ts              # Icon mappings
│   └── images.ts             # Image mappings
├── 🎪 assets/                # Static assets
│   ├── fonts/                # Custom fonts
│   └── images/               # App images and icons
└── 📄 Config files           # Expo, TypeScript, Tailwind config
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# TMDB API Configuration
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key_here

# Appwrite Configuration
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

### Getting API Keys

1. **TMDB API Key**

   - Visit [TMDB API](https://developers.themoviedb.org/3)
   - Create an account and request an API key
   - Add it to your `.env` file

2. **Appwrite Setup**
   - Create an [Appwrite](https://appwrite.io/) account
   - Set up a new project
   - Create a database and collection for search tracking
   - Copy the IDs to your `.env` file

---

## 🎨 Design System

### Color Palette

- **Primary**: Dark theme with purple accents
- **Secondary**: Gold highlights for ratings
- **Background**: Deep space gradient
- **Text**: Clean white and gray hierarchy

### Typography

- **Primary Font**: SpaceMono for headers
- **Body Text**: System fonts for optimal readability

### Components

- **Cards**: Glassmorphism design with subtle shadows
- **Navigation**: Bottom tab bar with smooth animations
- **Buttons**: Consistent styling with haptic feedback

---

## 🚦 Development Scripts

```bash
# Development
npm start          # Start Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web

# Code Quality
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking

# Project Management
npm run reset-project  # Reset to clean state
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic

### Issue Reporting

- Use the issue tracker for bugs and feature requests
- Provide detailed reproduction steps
- Include screenshots for UI issues

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **TMDB** for providing comprehensive movie data
- **Appwrite** for backend services
- **Expo** for the amazing development platform
- **React Native community** for inspiration and tools

---

<div align="center">
  <h3>Made with ❤️ by <a href="https://github.com/Prakharsahu10">Prakharsahu10</a></h3>
  
  <p>
    <a href="https://github.com/Prakharsahu10/Lumix_app/issues">🐛 Report Bug</a> •
    <a href="https://github.com/Prakharsahu10/Lumix_app/issues">✨ Request Feature</a> •
    <a href="https://github.com/Prakharsahu10">👨‍💻 Follow Developer</a>
  </p>
  
  <br />
  
  **⭐ Don't forget to star this repo if you found it helpful! ⭐**
</div>
