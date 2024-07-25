import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { sharedStyles } from './styles';

export default function GetStartedScreen({ navigation }) {
  return (

    <View style={sharedStyles.container}>
      <View style={styles.content}>
        <View style={styles.containerImg}>
          <Image source={require('../assets/img-book.png')} style={styles.image} />
        </View>
        <Text style={sharedStyles.title}>Book Shop</Text>
        <Text style={sharedStyles.subtitleGet}>
          Discover and purchase your favorite books with ease.
        </Text>
        <View style={styles.containerBtn}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}
            style={[sharedStyles.buttonLogin]}
            labelStyle={sharedStyles.loginButtonLabel}
          >
            Get Started
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 24,
  },
  containerBtn: {
    width: '100%',
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  }
});
