import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { sharedStyles } from './styles';

export default function EnterCodeScreen({ navigation }) {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerifyCode = () => {
    console.log('Code:', code.join(''));
  };

  return (
    <View style={sharedStyles.container}>
      <TouchableOpacity style={sharedStyles.closeButton} onPress={() => navigation.goBack()}>
        <Icon name="angle-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Icon name="lock" size={50} color="white" />
      </View>
      <Text style={sharedStyles.title}>Enter Recovery Code</Text>
      <Text style={sharedStyles.subtitle}>
        Enter the 4-digit code sent to your email.
      </Text>
      <View style={styles.inputContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            value={value}
            onChangeText={(text) => handleCodeChange(index, text)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            mode="outlined"
            theme={{ colors: { text: 'white', primary: 'transparent', background: 'transparent', outline: 'transparent' } }}
          />
        ))}
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('NewPasswordScreen')}
        style={sharedStyles.buttonLogin}
        labelStyle={sharedStyles.loginButtonLabel}
      >
        Verify Code
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#3535419c',
    height: 45,
    color: 'white',
    textAlign: 'center',
    borderRadius: 8, // Optional: add border radius for rounded corners
  },
});
