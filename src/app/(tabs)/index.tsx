import { Link } from "expo-router";
import { Text, View } from "react-native";
import '../global.css';
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-3xl font-bold text-success">
        Hello NativeWind!
      </Text>
      <Link href="/onboarding" asChild>
        <Text className="mt-4 rounded bg-primary text-white p-4">
          Go to Onboarding
        </Text>
      </Link>
       <Link href="/(auth)/signin" asChild>
        <Text className="mt-4 rounded bg-primary text-white p-4">
          Go to Sign In
        </Text>
      </Link>
       <Link href="/(auth)/signup" asChild>
        <Text className="mt-4 rounded bg-primary text-white p-4">
          Go to Onboarding
        </Text>
      </Link>
      <Link href="subscriptions/spotify"> Spotify Subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id:"claude"},
      }}> Claude Max Subscription</Link>
          </View>
  );
}