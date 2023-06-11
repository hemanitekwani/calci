    import React, { useState } from 'react';
    import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
    import FormInput from '../Components/FormInput';
    import FormButton from '../Components/FormButton';
    import SocialButton from '../Components/SocialButton';
    import { auth } from '../config/firebase';
   
    
    const LoginScreen = ({ navigation }) => {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
    
        const handleLogin = () => {
        if (email && password) {
          auth.signInWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate('HomeScreen');
            })
            .catch((error) => {
              Alert.alert('Error', error.message);
            });
        } else {
          Alert.alert('Error', 'Email and password fields are required');
        }
      };
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Login Screen</Text>
          <Image source={require('../assets/r.png')} style={styles.logo} />
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholder="Password"
            iconType="lock"
            secureTextEntry={true}
          />
          <FormButton buttonTitle="Sign In" onPress={handleLogin} />
          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
           
            backgroundColor="#ffe7ea"
            onPress={() => {}}
          />
           <Text
           style={styles.loginText}

            onPress={() => navigation.navigate('Signup')}>
            Don't have an account? Create here
            </Text>
        
        </View>
      );
    };
    
    export default LoginScreen;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 40,
        bottom: 20,
        backgroundColor: 'white',
      },
      logo: {
        height: 140,
        width: 150,
        resizeMode: 'cover',
        fontStyle:'bold',
      },
      text: {
        fontFamily: 'sans-serif',
        fontSize: 30,
        marginBottom: 15,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 40,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'serif',
      },
      loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
      },
    
    
    });
    
