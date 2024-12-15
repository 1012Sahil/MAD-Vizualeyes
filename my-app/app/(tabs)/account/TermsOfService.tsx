import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function TermsOfService() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText style={styles.heading}>Terms of Service</ThemedText>
        <ThemedText style={styles.sectionHeading}>1. Agreement to Terms</ThemedText>
        <ThemedText style={styles.text}>
          By using our wallpaper app, you agree to comply with these Terms of
          Service. If you do not agree, please refrain from using the app.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>2. User Responsibilities</ThemedText>
        <ThemedText style={styles.text}>
          Users must ensure that uploaded wallpapers do not infringe copyright
          or violate any laws. Any misuse of the app may result in suspension or
          termination of your account.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>3. App Usage</ThemedText>
        <ThemedText style={styles.text}>
          - You may download wallpapers for personal use only.{"\n"}
          - Redistribution of downloaded content is prohibited without
          permission.{"\n"}
          - Uploads must meet community guidelines and be appropriate for all
          audiences.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>4. Disclaimers</ThemedText>
        <ThemedText style={styles.text}>
          The app is provided "as is," and we do not guarantee uninterrupted or
          error-free operation. We are not responsible for any issues arising
          from the use of the app.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>5. Updates to Terms</ThemedText>
        <ThemedText style={styles.text}>
          We reserve the right to modify these terms at any time. Continued use
          of the app after changes implies acceptance of the updated terms.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>6. Contact Us</ThemedText>
        <ThemedText style={styles.text}>
          If you have any questions about these Terms of Service, please contact
          us through the support section of the app.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  content: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#444",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});
