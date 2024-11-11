import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';

const firstRowBooks = [
  { id: '1', source: require('../../assets/pj1.jpg') },
  { id: '2', source: require('../../assets/doawk1.jpeg') },
  { id: '3', source: require('../../assets/tltb.jpg') },
  { id: '4', source: require('../../assets/hp1.jpg') },
  { id: '5', source: require('../../assets/sfgae1.jpeg') },
];

const secondRowBooks = [
  { id: '6', source: require('../../assets/hp1.jpg') },
  { id: '7', source: require('../../assets/hp2.jpg') },
  { id: '8', source: require('../../assets/hp3.jpg') },
  { id: '9', source: require('../../assets/hp4.jpg') },
  { id: '10', source: require('../../assets/hp5.jpg') },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.source} style={styles.bookCover} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* First Row Title */}
      <Text style={styles.sectionTitle}>Hot Picks</Text>

      {/* First Row of books */}
      <FlatList
        data={firstRowBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bookRow}
        pagingEnabled
      />

      {/* Second Row Title */}
      <Text style={styles.sectionTitle}>J.K. Rowling</Text>

      {/* Second Row of books */}
      <FlatList
        data={secondRowBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.bookRow, { marginTop: 20 }]} // Add some space between rows
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    paddingVertical: 20,
  },
  bookRow: {
    alignItems: 'center', // Center the book covers in the scroll
    paddingHorizontal: 10, // Add padding to the start and end of the list
  },
  bookContainer: {
    marginHorizontal: 10,  // Adds space between the book covers
    alignItems: 'center',   // Center the book covers inside their containers
  },
  bookCover: {
    width: 120,            // Adjusted width for mobile
    height: 180,           // Adjusted height for a more balanced aspect ratio
    borderRadius: 8,       // Slightly smaller border radius for a clean look
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,    // Reduced opacity for a more subtle shadow
    shadowRadius: 3,       // Slightly increased for softer shadow edges
    elevation: 4, 
    top: -10,         // Adjusted elevation for less prominent shadow
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20, // Adds space above and below the title
    alignSelf: 'flex-start', // Align title to the left
    marginLeft: 20,          // Adds padding to the left
  },
});

export default Home;
