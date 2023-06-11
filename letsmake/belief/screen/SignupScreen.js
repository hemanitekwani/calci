import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; 




const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home'); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'serif', bottom: 80, fontSize: 30, fontWeight: 'bold' }}>Signup Screen</Text>
      <Image source={require('../assets/r.png')} style={styles.logo} />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        alignItems='center'
        justifyContent='center'
        
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="password"
        iconType="lock"
        secureTextEntry={true}
      />
     
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
      <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>   
    </View>
  );
};
export default SignupScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    paddingTop: 80,
    bottom: 70,
    backgroundColor: 'white',
    height:30,
  
  },
  logo: {
    height: 80,
    width: 160,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'sans-serif',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  button: {
    backgroundColor: 'blue',
    height:60,
    width:200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    marginTop:30,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
