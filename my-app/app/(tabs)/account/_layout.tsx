import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function AccountLayout() {
  const theme = useColorScheme() ?? "light";

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Account",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        options={{
          title: "Privacy Policy",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="TermsOfService"
        options={{
          title: "Terms Of Service",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
