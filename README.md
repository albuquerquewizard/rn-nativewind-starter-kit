# React Native + Expo + NativeWind Starter Template 🚀

## ✨ Features
- **Expo Router** - File-based routing for React Native
- **NativeWind v4** - Tailwind CSS for React Native with full TypeScript support
- **TypeScript** - Full type safety out of the box
- **Expo SDK 53** - Latest stable Expo SDK
- **React 19** - Latest React version
- **Pre-configured** - Ready to use with minimal setup

## 🚀 Quick Start

1. **Clone this template**

   ```bash
   git clone <your-repo-url>
   cd <project-name>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development**

   ```bash
   npm start
   # or
   npx expo start
   ```

## 📁 Project Structure

```
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   └── global.css         # Tailwind CSS imports
├── components/             # Reusable components (create this)
├── assets/                 # Images, fonts, etc.
├── tailwind.config.js      # Tailwind configuration
├── babel.config.js         # Babel with NativeWind preset
├── metro.config.js         # Metro with NativeWind
└── nativewind-env.d.ts    # TypeScript types
```

## 🔧 Customization
1. **Update app name** in `package.json` and `app.json`
2. **Modify colors** in `tailwind.config.js`
3. **Add components** in the `components/` folder
4. **Update routing** in the `app/` directory

## 🆘If you encounter issues:
1. Clear Metro cache: `npx expo start --clear`
2. Reset project: `npm run reset-project`
3. Check NativeWind setup in configuration files
