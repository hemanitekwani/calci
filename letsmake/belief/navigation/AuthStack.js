
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import SignupScreen from '../screen/SignupScreen';
import LoginScreen from '../screen/LoginScreen';
import OnboardingScreen from '../screen/OnboardingScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from '../screen/SplashScreen'; 

const Drawer= createDrawerNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    routeName = 'splash';
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    
    <Drawer.Navigator initialRouteName={routeName}>
      <Drawer.Screen
        name="splash"
        component={SplashScreen}
        options={{ header: () => null }}
      />
      <Drawer.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />

       
      <Drawer.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />


          </View>
        ),
      })}
    />
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{ header: () => null }}
    />
  </Drawer.Navigator>
);
};

export default AuthStack;
        

