import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';

const downloadedBooks = [
  { id: '1', source: require('../../assets/pj1.jpg'), isDownloaded: true },
  { id: '2', source: require('../../assets/doawk1.jpeg'), isDownloaded: true },
  { id: '3', source: require('../../assets/tltb.jpg'), isDownloaded: true },
  { id: '4', source: require('../../assets/hp1.jpg'), isDownloaded: true },
  { id: '5', source: require('../../assets/sfgae1.jpeg'), isDownloaded: true },
];

const downloadingBooks = [
  { id: '6', source: require('../../assets/hp1.jpg'), isLoading: true },
  { id: '7', source: require('../../assets/hp2.jpg'), isLoading: true },
  { id: '8', source: require('../../assets/hp3.jpg'), isLoading: true },
  { id: '9', source: require('../../assets/hp4.jpg'), isLoading: true },
  { id: '10', source: require('../../assets/hp5.jpg'), isLoading: true },
];

const Downloads = () => {
  const renderDownloadedItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.source} style={styles.bookCover} />
      {item.isDownloaded && (
        <View style={styles.downloadedOverlay}>
          <Text style={styles.downloadedText}>✓ Downloaded</Text>
        </View>
      )}
    </View>
  );

  const renderDownloadingItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.source} style={styles.bookCover} />
      {item.isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* First Row Title */}
      <Text style={styles.sectionTitle}>Downloaded Books</Text>

      {/* First Row of downloaded books */}
      <FlatList
        data={downloadedBooks}
        renderItem={renderDownloadedItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bookRow}
        pagingEnabled
      />

      {/* Second Row Title */}
      <Text style={styles.sectionTitle}>Downloading</Text>

      {/* Second Row of books being downloaded */}
      <FlatList
        data={downloadingBooks}
        renderItem={renderDownloadingItem}
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
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bookContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    position: 'relative',  // Ensures that overlays are positioned correctly
  },
  bookCover: {
    width: 120,
    height: 180,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 4,
    top: -10,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  downloadedOverlay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 128, 0, 0.7)',  // Semi-transparent green overlay for downloaded label
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  downloadedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Downloads;
