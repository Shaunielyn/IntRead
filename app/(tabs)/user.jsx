import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';

const User = () => {
  const userData = {
    avatar: require('../../assets/book-stack.png'), // Replace with your avatar image path
    name: 'Shaunie Lyn Puentenegra',
    email: 'Shaunie123@gmail.com',
    downloadedBooks: 5,  // Example of downloaded books count
  };

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [settingsVisible, setSettingsVisible] = useState(false);  // Control visibility of settings

  // About Alert
  const handleAboutPress = () => {
    Alert.alert(
      'About the App',
      'This app allows users to browse and download books, stay updated on availability, and manage their reading list with ease.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };

  // Toggle settings visibility
  const handleSettingsPress = () => {
    setSettingsVisible(!settingsVisible);
  };

  // Toggle notification preferences
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    Alert.alert(
      'Notification Preferences',
      `Notifications have been ${!notificationsEnabled ? 'enabled' : 'disabled'}.`
    );
  };

  // Handle account management
  const manageAccount = () => {
    Alert.alert(
      'Account Management',
      'You can manage your account here. Features such as updating your profile, changing passwords, and privacy settings are available.',
      [
        { text: 'Change Password', onPress: () => Alert.alert('Change Password', 'Password change functionality coming soon!') },
        { text: 'Update Profile', onPress: () => Alert.alert('Update Profile', 'Profile update functionality coming soon!') },
        { text: 'Privacy Settings', onPress: () => Alert.alert('Privacy Settings', 'Privacy settings functionality coming soon!') },
        { text: 'Close', style: 'cancel' },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* User Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={userData.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
      </View>

      {/* Downloaded Books Info */}
      <View style={styles.booksInfo}>
        <Text style={styles.booksCount}>{userData.downloadedBooks}</Text>
        <Text style={styles.booksLabel}>Downloaded Books</Text>
      </View>

      {/* Settings Option */}
      <TouchableOpacity style={styles.optionButton} onPress={handleSettingsPress}>
        <Text style={styles.optionButtonText}>Settings</Text>
      </TouchableOpacity>

      {/* Show settings options if settingsVisible is true */}
      {settingsVisible && (
        <View style={styles.settingsContainer}>
          {/* Notification Preferences */}
          <View style={styles.settingsItem}>
            <Text style={styles.settingsText}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          </View>

          {/* Account Management */}
          <TouchableOpacity style={styles.optionButton} onPress={manageAccount}>
            <Text style={styles.optionButtonText}>Account Management</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* About Option */}
      <TouchableOpacity style={styles.optionButton} onPress={handleAboutPress}>
        <Text style={styles.optionButtonText}>About</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  booksInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  booksCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  booksLabel: {
    fontSize: 18,
    color: '#888',
  },
  optionButton: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  optionButtonText: {
    color: '#333',
    fontSize: 18,
  },
  settingsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  settingsText: {
    fontSize: 18,
    color: '#333',
  },
});

export default User;
