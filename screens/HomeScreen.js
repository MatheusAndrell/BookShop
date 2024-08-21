import React from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavBar from './BottomNavBar';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="notifications" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>Which book do you want to buy</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={24} color="gray" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for books..."
              placeholderTextColor="gray"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-list" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Popular Books</Text>

      <View style={styles.bookContainer}>
        <Image source={require('../assets/popular-book.jpg')} style={styles.bookImage} />
        <View style={styles.bookDetails}>
          <Text style={styles.bookTitle}>Harry Potter</Text>
          <TouchableOpacity style={styles.heartButton}>
            <Icon name="favorite" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <BottomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2a',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
  },
  menuButton: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2a2a38',
    borderRadius: 8,
  },
  headerContainer: {
    marginTop: '10%',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  notificationButton: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2a2a38',
    borderRadius: 8,
  },
  pageTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingRight: '40%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3535419c',
    borderRadius: 8,
    paddingLeft: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    height: 45,
  },
  filterButton: {
    marginLeft: 8,
    backgroundColor: '#b51a28',
    borderRadius: 8,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 16,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  bookContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: '5%',
  },
  bookImage: {
    width: '60%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  bookDetails: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '7%',
    paddingRight: '7%',
  },
  bookTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  heartButton: {
    backgroundColor: '#b51a28',
    borderRadius: 50,
    padding: 6,
  },
});