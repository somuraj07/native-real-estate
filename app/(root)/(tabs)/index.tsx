import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text className ="font-bolt text-lg my-10">welcome to realeaste</Text>
    <Link href='/signin' >signin</Link>
    <Link href='/explore' >explore</Link>
    <Link href='/profile' >profile</Link>
    <Link href='/properties/1' >properties</Link>

    </View>
  );
}
