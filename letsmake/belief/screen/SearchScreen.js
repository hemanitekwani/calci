
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a book"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.title}>{item.volumeInfo.title}</Text>
            {item.volumeInfo.imageLinks && (
              <Image style={styles.image} source={{ uri: item.volumeInfo.imageLinks.thumbnail }} />
            )}
            <Text style={styles.author}>By {item.volumeInfo.authors?.join(', ')}</Text>
            <Text style={styles.description}>{item.volumeInfo.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  bookContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 5,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
});

export default SearchScreen;
