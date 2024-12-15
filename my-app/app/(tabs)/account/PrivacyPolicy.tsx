import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function PrivacyPolicy() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedText style={styles.title}>Privacy Policy</ThemedText>
        <ThemedText style={styles.sectionTitle}>Introduction</ThemedText>
        <ThemedText style={styles.text}>
          Welcome to WallpaperApp! Your privacy is important to us. This Privacy
          Policy outlines how we collect, use, and protect your information when
          you use our app to download and upload wallpapers.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          Information We Collect
        </ThemedText>
        <ThemedText style={styles.text}>
          - **Personal Information**: We may collect your name, email address,
          and profile picture when you create an account.
          {"\n"}- **Uploaded Content**: Wallpapers you upload to the app.
          {"\n"}- **Usage Data**: Information about how you interact with the
          app, such as pages visited, wallpapers downloaded, and preferences.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          How We Use Your Data
        </ThemedText>
        <ThemedText style={styles.text}>
          - To provide and improve the app's functionality.
          {"\n"}- To recommend wallpapers based on your preferences.
          {"\n"}- To communicate with you regarding updates, promotions, or
          support.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Data Sharing</ThemedText>
        <ThemedText style={styles.text}>
          We do not sell or share your data with third parties except:
          {"\n"}- When required by law.
          {"\n"}- To trusted service providers helping us operate the app.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          Security of Your Information
        </ThemedText>
        <ThemedText style={styles.text}>
          We take reasonable measures to protect your data, including encryption
          and secure servers. However, no method of transmission over the
          internet is 100% secure.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Your Rights</ThemedText>
        <ThemedText style={styles.text}>
          - Access, update, or delete your account information.
          {"\n"}- Opt-out of receiving promotional communications.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          Changes to this Policy
        </ThemedText>
        <ThemedText style={styles.text}>
          We may update this Privacy Policy from time to time. You will be
          notified of significant changes via email or an in-app notification.
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>Contact Us</ThemedText>
        <ThemedText style={styles.text}>
          If you have any questions about this Privacy Policy, contact us at
          support@wallpaperapp.com.
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
    color: "#444",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 10,
  },
});
