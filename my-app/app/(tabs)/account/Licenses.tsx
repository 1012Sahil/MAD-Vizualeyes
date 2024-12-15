import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Licenses() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText style={styles.heading}>Licenses</ThemedText>

        <ThemedText style={styles.sectionHeading}>1. Overview</ThemedText>
        <ThemedText style={styles.text}>
          This application uses open-source libraries to provide functionality
          and enhance your user experience. Below is a list of the libraries
          and their respective licenses.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>2. Libraries and Licenses</ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.libraryName}>React Native</ThemedText> - MIT License{"\n"}
          A framework for building native apps using React.{"\n\n"}

          <ThemedText style={styles.libraryName}>Expo</ThemedText> - MIT License{"\n"}
          A platform for universal React apps.{"\n\n"}

          <ThemedText style={styles.libraryName}>Expo Router</ThemedText> - MIT License{"\n"}
          A file-based routing library for Expo and React Native.{"\n\n"}

          <ThemedText style={styles.libraryName}>React</ThemedText> - MIT License{"\n"}
          A JavaScript library for building user interfaces.{"\n\n"}

          <ThemedText style={styles.libraryName}>React Native Vector Icons</ThemedText> - MIT License{"\n"}
          Customizable icons for React Native.{"\n\n"}

          <ThemedText style={styles.libraryName}>Axios</ThemedText> - MIT License{"\n"}
          A promise-based HTTP client for JavaScript.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>3. License Details</ThemedText>
        <ThemedText style={styles.text}>
          Each library is subject to its respective license agreement. By using
          this app, you agree to adhere to these licenses. You can find full
          license texts on their respective GitHub repositories or official
          documentation.
        </ThemedText>

        <ThemedText style={styles.sectionHeading}>4. Acknowledgments</ThemedText>
        <ThemedText style={styles.text}>
          We extend our gratitude to the open-source community for their
          contributions and support. Without these libraries, this application
          would not have been possible.
        </ThemedText>

        <ThemedText style={styles.footer}>
          Last Updated: December 2024
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
  libraryName: {
    fontWeight: "bold",
    color: "#222",
  },
  footer: {
    marginTop: 16,
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
  },
});
