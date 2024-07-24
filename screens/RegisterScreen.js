import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { sharedStyles, registerStyles } from './styles';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity style={sharedStyles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={sharedStyles.title}>Register</Text>
      <View style={sharedStyles.inputContainer}>
        <Text style={sharedStyles.inputLabel}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={sharedStyles.input}
        />
        <Text style={sharedStyles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={sharedStyles.input}
          keyboardType="email-address"
        />
        <Text style={sharedStyles.inputLabel}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={sharedStyles.input}
          keyboardType="phone-pad"
        />
        <Text style={sharedStyles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={sharedStyles.input}
          secureTextEntry
        />
        <Text style={sharedStyles.inputLabel}>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={sharedStyles.input}
          secureTextEntry
        />
      </View>
      <Button
        mode="contained"
        onPress={handleRegister}
        style={sharedStyles.buttonLogin}
        labelStyle={sharedStyles.loginButtonLabel}
      >
        Register
      </Button>
    </View>
  );
}
