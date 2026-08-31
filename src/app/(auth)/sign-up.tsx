import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text className="mb-20">SignUp</Text>

      <Link href="/">go to Sign In</Link>
    </View>
  );
};

export default SignUp;
