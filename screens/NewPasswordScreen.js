import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { sharedStyles } from './styles';

export default function NewPasswordScreen({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      console.log('New Password:', newPassword);
    } else {
      console.log('Passwords do not match.');
    }
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity style={sharedStyles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Icon name="lock" size={50} color="white" />
      </View>
      <Text style={sharedStyles.title}>Set New Password</Text>
      <Text style={sharedStyles.subtitle}>
        Enter and confirm your new password.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          style={styles.input}
          secureTextEntry
          placeholder="New Password"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', outline: 'transparent' } }}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
          placeholder="Confirm Password"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', outline: 'transparent' } }}
        />
      </View>
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={sharedStyles.buttonLogin}
        labelStyle={sharedStyles.loginButtonLabel}
      >
        Save New Password
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#3535419c',
    height: 45,
    color: 'white',
    marginBottom: 16,
    borderRadius: 8, // Optional: add border radius for rounded corners
  },
});
