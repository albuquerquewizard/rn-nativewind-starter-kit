# 🚀 How to Use This Template

This is a starter template for React Native apps with Expo Router and NativeWind. Here's how to use it effectively:

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (optional but recommended)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## 🔄 Using as a Template

### Option 1: Clone and Customize

1. **Clone this repository**

   ```bash
   git clone <your-repo-url> my-new-app
   cd my-new-app
   ```

2. **Run the setup script**

   ```bash

   npm run setup
   ```

   This will prompt you for your project name and description, then automatically update all configuration files.

3. **Install dependencies**

   ```bash

   npm install
   ```

4. **Start developing**

   ```bash
   npm start
   ```

### Option 2: Manual Setup

1. **Update project details**
   - Edit `package.json` - change name and description
   - Edit `app.json` - update expo.name, expo.slug, and expo.description

2. **Customize the app**
   - Modify `app/index.tsx` for your home screen
   - Add new routes in the `app/` directory
   - Create components in the `components/` directory

## 🎯 What's Included

- ✅ **Expo Router** - File-based routing system
- ✅ **NativeWind v4** - Tailwind CSS for React Native
- ✅ **TypeScript** - Full type safety
- ✅ **Pre-configured** - All config files are ready
- ✅ **Sample code** - Working example with blue text
- ✅ **Component structure** - Ready for scaling

## 🏗️ Project Structure

```
my-app/
├── app/                    # Your app screens and routing
│   ├── _layout.tsx        # Root layout (imports global.css)
│   ├── index.tsx          # Home screen
│   └── global.css         # Tailwind imports
├── components/             # Reusable components
├── assets/                 # Images, fonts, etc.
├── scripts/                # Setup and utility scripts
├── tailwind.config.js      # Tailwind configuration
├── babel.config.js         # Babel with NativeWind
├── metro.config.js         # Metro bundler config
└── nativewind-env.d.ts    # TypeScript types

```
