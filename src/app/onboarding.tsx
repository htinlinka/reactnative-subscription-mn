import { Text, View } from "react-native";
import './global.css';
export default function Onboarding() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-3xl font-bold text-success">
        This is Onboarding Page
      </Text>
    </View>
  );
}