import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';

// Sample data for books, including images
const bookData = [
  { id: '1', title: 'Harry Potter', image: require('../../assets/hp1.jpg') },
  { id: '2', title: 'Harry Potter', image: require('../../assets/hp2.jpg') },
  { id: '3', title: 'Harry Potter', image: require('../../assets/hp3.jpg') },
  { id: '4', title: 'Harry Potter', image: require('../../assets/hp4.jpg') },
  { id: '5', title: 'Harry Potter', image: require('../../assets/hp5.jpg') },
  { id: '6', title: 'Harry Potter', image: require('../../assets/hp6.jpg') },
  { id: '7', title: 'To all the Boys I\'ve Loved Before', image: require('../../assets/tltb.jpg') },
  { id: '8', title: 'Diary of a Wimpy Kid', image: require('../../assets/doawk1.jpeg') },
  { id: '9', title: 'Percy Jackson', image: require('../../assets/pj1.jpg') },
  { id: '10', title: 'The School for Good and Evil', image: require('../../assets/sfgae1.jpeg') },
  // Add more books as needed with corresponding images
];

const Books = () => {
  const [search, setSearch] = useState('');

  // Find the first matching book based on the search input
  const foundBook = bookData.find(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* Display the search icon image */}
        <Image source={require('../../assets/search.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search books"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {/* Conditional message based on search */}
      {search.length === 0 ? (
        <Text style={styles.message}>Please enter a book title to search.</Text>
      ) : (
        foundBook ? (
          <View style={styles.bookDetails}>
            <Image source={foundBook.image} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{foundBook.title}</Text>
          </View>
        ) : (
          <Text style={styles.message}>No books found for "{search}".</Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1, // Ensures the container takes full height
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  bookDetails: {
    marginTop: 20,
    alignItems: 'center',
  },
  bookImage: {
    width: 100, // Adjust the width of the book image
    height: 150, // Adjust the height of the book image
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Books;
