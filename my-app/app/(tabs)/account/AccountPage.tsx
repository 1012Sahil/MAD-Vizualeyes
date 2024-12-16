import React from 'react';
import { View, Pressable, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

export default function AccountPage() {
    const router = useRouter();
  return (
    <ThemedView style={styles.profileContainer}>
      <ThemedView style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://www.example.com/user-profile-pic.jpg' }} // Replace with actual profile image URL
          style={styles.profilePic}
        />
        <ThemedText>Sangeet Sharma</ThemedText>
        <ThemedText style={styles.email}>sangeet@example.com</ThemedText>
      </ThemedView>

      <ThemedView style={styles.settingsContainer}>
        <Pressable style={styles.optionButton}>
          <ThemedText style={styles.optionText}>username : obtused</ThemedText>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <ThemedText style={styles.optionText}>DOB : 24-oct-2002</ThemedText>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <ThemedText style={styles.optionText}>Sex : Male</ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.logoutContainer}>
        <Pressable style={styles.logoutButton} onPress={() =>{ alert('Logging out')
            router.back();
        }}>
          <ThemedText style={styles.logoutText}>Logout</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Simple white background
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc', // Light gray border
    marginBottom: 15,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Dark gray text color
  },
  email: {
    fontSize: 16,
    color: '#666', // Light gray for the email
  },
  settingsContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  optionButton: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9', // Light gray background for options
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd', // Light border color
  },
  optionText: {
    fontSize: 18,
    color: '#333', // Dark text color
  },
  logoutContainer: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  logoutButton: {
    backgroundColor: '#000000', // Red background for logout
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text for logout button
  },
});
