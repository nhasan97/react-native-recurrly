import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text className="mb-20">SignIn</Text>

      <Link href="/(auth)/sign-up"> go to Sign Up</Link>
    </View>
  );
};

export default SignIn;
