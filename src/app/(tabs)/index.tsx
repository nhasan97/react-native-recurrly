import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-2xl font-bold text-white">
        NativeWind is working ...woah! Alhamdulillah🎉
      </Text>

      <Link href="/second" asChild>
        <Pressable className="mt-4 rounded bg-white p-3">
          <Text className="font-bold text-blue-400">Go to Second Screen</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="mt-4 rounded bg-white p-3">
          <Text className="font-bold text-blue-400">Go to sign in</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="mt-4 rounded bg-white p-3">
          <Text className="font-bold text-blue-400">Go to sign up</Text>
        </Pressable>
      </Link>

      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claud Max Subscription
      </Link>
    </View>
  );
}
