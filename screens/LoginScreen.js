import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Phone:', phone);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="close" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, optio.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
          underlineColor="transparent"
          mode="flat"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', underlineColor: 'transparent' } }}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          underlineColor="transparent"
          mode="flat"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', underlineColor: 'transparent' } }}
        />
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
            color="white"
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Save password</Text>
        </View>
        <TouchableOpacity onPress={() => { /* handle forget password */ }}>
          <Text style={styles.forgetPassword}>Forget password</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.buttonLogin}
        labelStyle={styles.loginButtonLabel}
      >
        Sign In
      </Button>
      <Button
        onPress={handleLogin}
        style={styles.buttonRegister}
        labelStyle={styles.registerButtonLabel}
      >
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1e1e2a',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    padding: 8,
    backgroundColor: '#2a2a38',
    borderRadius: 8,
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'left',
    color: 'white',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'left',
    color: 'gray',
  },
  inputContainer: {
    backgroundColor: '#2b2b39',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 7,
    fontSize: 15,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#3535419c',
    height: 45,
    color: 'white',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 4,
  },
  checkboxLabel: {
    color: 'white',
  },
  forgetPassword: {
    color: '#b51a28',
  },
  buttonLogin: {
    marginTop: 16,
    borderRadius: 6,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#b51a28',
  },
  loginButtonLabel: {
    color: 'white',
  },
  buttonRegister: {
    marginTop: 16,
    backgroundColor: 'transparent',
  },
  registerButtonLabel: {
    color: '#b51a28',
  },
});
