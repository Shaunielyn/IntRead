import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/book-stack.png')} style={styles.image} />
      <Text style={styles.title}>Int. Read</Text>
      

      <Link href="./home" style={styles.link}>Get Started</Link>
      <Text style={styles.subtitle}>May you enjoy reading~</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    backgroundHeight: '50vh',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    position: 'relative',  // Allows positioning with top
    top: -100,              // Moves the image 10px upward
    objectFit: 'contain',  // Ensure the image keeps its aspect ratio
  },

  title: {
    fontFamily: 'Sansita',
    fontWeight: 'bold',
    fontSize: 40,
    top: -100,

  },

  subtitle: {
  fontFamily: 'QwitcherGrypen-Regular',
  fontSize: 30,
  alignItems: 'flex-start',
  },

  link: {
    fontSize: 15,
    color: '#fff',
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  
});