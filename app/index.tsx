import { Text, View, Linking, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="font-bold text-4xl text-blue-600 mb-4">
        Welcome to My Starter Template
      </Text>
      <Text className="text-gray-700 text-lg text-center mb-6">
        Start building something amazing by editing app/index.tsx
      </Text>
      <Pressable
        onPress={() => Linking.openURL("https://tomilola.com.ng")}
        className="text-blue-500 px-6 py-3 text-xs hover:text-blue-600 underline"
      >
        <Text>Built by Tomi</Text>
      </Pressable>
    </View>
  );
}
