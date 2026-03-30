import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-center text-primary">
        Welcome to React Native With Tailwind CSS!
      </Text>
      <Link href={'/onboarding'} className="text-accent underline">
      Go to Onboarding
      </Link>
       <Link href='/(auth)/sign-in' className="text-accent underline">
      Go to Sign In
      </Link>
        <Link href='/(auth)/sign-up' className="text-accent underline">
      Go to Sign Up
      </Link>
    </View>
  );
}