import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { sharedStyles } from './styles';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Email:', email);
    // Implement password reset logic here
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity style={sharedStyles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={sharedStyles.title}>Reset Password</Text>
      <Text style={sharedStyles.subtitle}>
        Enter your email address to receive a password reset link.
      </Text>
      <View style={sharedStyles.inputContainer}>
        <Text style={sharedStyles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={sharedStyles.input}
          keyboardType="email-address"
          underlineColor="transparent"
          mode="flat"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', underlineColor: 'transparent' } }}
        />
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('EnterCodeScreen')}
        style={sharedStyles.buttonLogin}
        labelStyle={sharedStyles.loginButtonLabel}
      >
        Send Reset Link
      </Button>
    </View>
  );
}
