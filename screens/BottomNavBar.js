import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BottomNavBar({ navigation }) {
  return (
    <View style={styles.navBarContainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CatalogScreen')}>
        <Icon name="list" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CartScreen')}>
        <Icon name="shopping-cart" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SettingsScreen')}>
        <Icon name="settings" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    height: '8%',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#3535419c',
    marginRight: '5%',
    marginLeft: '5%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
});
