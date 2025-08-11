import { Text, View } from "react-native";

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
}