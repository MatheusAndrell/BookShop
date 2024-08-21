import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { sharedStyles, loginStyles } from './styles';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Phone:', phone);
    console.log('Password:', password);
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity style={sharedStyles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="close" size={24} color="white" />
      </TouchableOpacity>
      <Text style={sharedStyles.title}>Sign In</Text>
      <Text style={sharedStyles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, optio.
      </Text>
      <View style={sharedStyles.inputContainer}>
        <Text style={sharedStyles.inputLabel}>Phone Number</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={sharedStyles.input}
          keyboardType="phone-pad"
          underlineColor="transparent"
          mode="flat"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', underlineColor: 'transparent' } }}
        />
        <Text style={sharedStyles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={sharedStyles.input}
          secureTextEntry
          underlineColor="transparent"
          mode="flat"
          theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', underlineColor: 'transparent' } }}
        />
      </View>
      <View style={sharedStyles.optionsContainer}>
        <View style={sharedStyles.checkboxContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={() => setRememberMe(!rememberMe)}
            color="white"
          />
          <Text style={sharedStyles.checkboxLabel}>Save password</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={sharedStyles.forgetPassword}>Forget password</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('HomeScreen')}
        style={sharedStyles.buttonLogin}
        labelStyle={sharedStyles.loginButtonLabel}
      >
        Sign In
      </Button>
      <Button
        onPress={() => navigation.navigate('RegisterScreen')}
        style={sharedStyles.buttonRegister}
        labelStyle={sharedStyles.registerButtonLabel}
      >
        Sign Up
      </Button>
    </View>
  );
}
