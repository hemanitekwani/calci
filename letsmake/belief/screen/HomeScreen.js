
import React from 'react';
import { cond, greaterThan, interpolate } from 'react-native-reanimated';
import { View, Text, StyleSheet, Image, TextInput, Button, FlatList, ImageBackground,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Linking } from 'react-native';

import axios from 'axios';
import { useState } from 'react';
import TakeQuizScreen from './TakeQuizScreen';
import AudioBooksScreen from './AudioBooksScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [previewLink, setPreviewLink] = useState(null);

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

  const handlePreview = (previewLink) => {
    setPreviewLink(previewLink);
    Linking.openURL(previewLink);
  };

  const HomeScreenContent = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.logo}
          source={require('../assets/stop.png')}
        >
          <Text style={styles.text}>Home Screen</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
            placeholder="Search for a book"
            autoCorrect={true}
          />
       
 
         

       <Button title="Search" marginBottom='90' onPress={handleSearch} />

          
          

          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <View style={styles.bookContainer}>
                <Text>{item.volumeInfo.title}</Text>
                <Image
                  style={styles.bookImage}
                  source={{
                    uri: item.volumeInfo.imageLinks?.thumbnail || '',
                  }}
                />
                {item.volumeInfo.previewLink && (
                  <Button
                    title="Preview"
                    onPress={() => {
                      handlePreview(item.volumeInfo.previewLink);
                      Linking.openURL(previewLink);
                    }}
                  />
                )}
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </ImageBackground>
      </View>
    );
  };
  
  return (
    <Drawer.Navigator initialRouteName="Homee">
      <Drawer.Screen
        name="Homee"
        component={HomeScreenContent}
        options={{ header: () => null }}
      />
      <Drawer.Screen
        name="Take Quiz"
        component={TakeQuizScreen}
      />
      <Drawer.Screen
        name="Audio Books"
        component={AudioBooksScreen}
      />
    </Drawer.Navigator>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    header: 50,
    backgroundColor:'white',
  },
  
  text: {
    top:50,
    textAlign:'center',
    fontSize: 40,
    fontWeight: 'bold',
    color:'white',
    
    
  },
  logo: {
    
    height:750,
    width: 500,
    resizeMode:'cover',
    backgroundColor:'brown',
  },
  input: {
    marginTop:90,
    marginBottom:60,
    height: 60,
    width: '90%',
    marginVertical: 60,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    marginLeft:60,
    color:'white',
    fontSize:20,
  },
  bookContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  bookImage: {
    height: 200,
    width: 150,
    marginBottom: 10,
  },
  
 
});

export default HomeScreen;
