import { Linking } from 'react-native';
import { Pressable } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { Appearance } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { useRouter } from "expo-router";

// Corrected code starts here
export default function Account() {
  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <ThemedView style={{ flex: 1 }}>
          <LoginButtons />
          <ThemeSelector />
          <About />
        </ThemedView>
      </ScrollView>
    </ThemedSafeAreaView>
  );
}

function About() {
  const router = useRouter();

  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedText style={{ fontSize: 25, fontWeight: '600' }}>About</ThemedText>
      <ThemedView style={{ marginTop: 10 }}>
        <Pressable onPress={() => router.push("/account/AccountPage")}>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>Account</ThemedText>
        </Pressable>
        <Pressable onPress={() => router.push("/account/PrivacyPolicy")}>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>Privacy Policy</ThemedText>
        </Pressable>
        <Pressable onPress={() => router.push("./account/TermsOfService")}>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>Terms of Service</ThemedText>
        </Pressable>
        <Pressable onPress={() => router.push("./account/Licenses")}>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>Licenses</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

function ThemeSelector() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedText style={{ fontSize: 25, fontWeight: "600" }}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <ThemeButton title={"Dark"} selected={false} colorScheme="dark" />
        <ThemeButton title={"Light"} selected={false} colorScheme="light" />
        <ThemeButton title={"System"} selected={false} colorScheme={null} />
      </ThemedView>
    </ThemedView>
  );
}

function ThemeButton({
  title,
  selected,
  colorScheme,
}: {
  selected: boolean;
  title: string;
  colorScheme: "dark" | "light" | null;
}) {
  const theme = useColorScheme();

  return (
    <Pressable
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
        borderRadius: 5,
        flex: 0.3,
      }}
      onPress={() => {
        Appearance.setColorScheme(colorScheme);
      }}
    >
      <ThemedText style={{ width: "100%", textAlign: "center" }}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

function LoginButtons() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label={"Sign in with Google"}
        icon={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
        google={true}
      />
      <AuthButton
        label={"Sign in with Apple"}
        icon={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
        google={false}
      />
    </>
  );
}

function Header() {
  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedText style={{ fontSize: 25, fontWeight: "600" }}>Panels</ThemedText>
      <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
  );
}

function AuthButton({ label, icon, google }: { label: string; icon: any; google: boolean }) {
  const theme = useColorScheme() ?? "light";

  const handleGoogleSignIn = () => {
    alert('Trying to connect to Google...');
    // Use Linking to open the Gmail or Google login URL
    Linking.openURL('https://gmail.com');
  };

  const handleAppleSignIn = () => {
    alert('Trying to connect to Apple...');
    // Use Linking to open the Apple support or login page
    Linking.openURL('https://support.apple.com/en-in/111001');
  }; 

  return (
    <Pressable
      style={{
        backgroundColor: theme,
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 5,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
      }}
      onPress={google ? handleGoogleSignIn : handleAppleSignIn}
    >
      {icon}
      <ThemedText
        style={{
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {label}
      </ThemedText>
    </Pressable>
  );
}
