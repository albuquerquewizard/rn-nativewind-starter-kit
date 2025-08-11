#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 React Native + Expo + NativeWind Template Setup\n');

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupTemplate() {
  try {
    // Get project details
    const projectName = await question('Enter your project name: ');
    const projectDescription = await question('Enter project description (optional): ');
    
    if (!projectName.trim()) {
      console.log('❌ Project name is required!');
      process.exit(1);
    }

    // Update package.json
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.name = projectName.toLowerCase().replace(/\s+/g, '-');
    if (projectDescription) {
      packageJson.description = projectDescription;
    }
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Update app.json
    const appJsonPath = path.join(process.cwd(), 'app.json');
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
    
    appJson.expo.name = projectName;
    appJson.expo.slug = projectName.toLowerCase().replace(/\s+/g, '-');
    if (projectDescription) {
      appJson.expo.description = projectDescription;
    }
    
    fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));

    // Create components directory if it doesn't exist
    const componentsDir = path.join(process.cwd(), 'components');
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir);
      console.log('✅ Created components directory');
    }

    // Create a sample component
    const sampleComponent = `import { Text, View } from "react-native";

export default function SampleComponent() {
  return (
    <View className="p-4 bg-gray-100 rounded-lg">
      <Text className="text-lg font-semibold text-gray-800">
        Sample Component
      </Text>
      <Text className="text-gray-600 mt-2">
        This is a sample component to get you started!
      </Text>
    </View>
  );
}`;

    const sampleComponentPath = path.join(componentsDir, 'SampleComponent.tsx');
    fs.writeFileSync(sampleComponentPath, sampleComponent);

    console.log('\n🎉 Template setup complete!');
    console.log(`\n📱 Your project "${projectName}" is ready to use.`);
    console.log('\n🚀 Next steps:');
    console.log('1. npm install');
    console.log('2. npm start');
    console.log('\n✨ Happy coding!');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

setupTemplate();
