import React from 'react';
import { View, Image,Button,TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const dots= ({selected}) => {
   let backgroundColor;
   backgroundColor= selected ? 'rgba(0,0,0,0.8)': 'rgba(0,0,0,0.3)';
   return (
    <View
    style ={{
        width:5,
        height:5,
        marginHorizontal:3,

    }}
    />
   );

}

const Skip=({...props}) => (
    <Button
        title='Skip'
        color="#000000"
        {...props}
    />
);

const Next=({...props}) => (
    <Button
        title='Next'
        style={{marginHorizantal:10}}
        color="#000000"
        {...props}
    />
);
const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
 <Onboarding
 SkipButtonComponent={Skip}
 NextButtonComponent={Next}
 DoneButtonComponent={Done}
        onSkip={()=>navigation.replace("Login")}
        onNext={()=>navigation.navigate("Login")}
    pages={[
    {
    backgroundColor: "#8aecff",
    image: <Image source={require('../assets/u.png')} />,
    title: 'Welcome',
    subtitle: 'Welcome to our e-library and quiz app! Explore endless books and challenge your knowledge with our fun quizzes. Join now and lets get started on a journey of discovery.',
    },
    {
        backgroundColor: '#a6e4d0',
        image: <Image source={require('../assets/you.png')} />,
        title: 'Welcome',
        subtitle: 'Welcome to our e-library and quiz app! Explore endless books and challenge your knowledge with our fun quizzes. Join now and lets get started on a journey of discovery',
        },
    ]}
  />
);
};
export default OnboardingScreen;
           
  
