import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">

      <Link href='/subscriptions/spotify' className="text-accent underline">
        Subscribe to spotify
      </Link>

      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: "ChatGpt" }
      }} className="text-accent underline">
        Subscribe to ChatGpt
      </Link>
    </SafeAreaView>
  );
}