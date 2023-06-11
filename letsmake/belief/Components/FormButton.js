//import {useFonts} from 'expo-font';
import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import { windowHeight} from '../utils/Dimentions';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';


const FormButton=({buttonTitle,...rest}) => {
  

        return (
            <TouchableOpacity style={styles.buttonContainer} {...rest}>
              <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
          );
        };
        
   
export default FormButton;
 
const styles= StyleSheet.create({
 buttonContainer: {
    marginTop:10,
    width:'100%',
     height:windowHeight/15,
     backgroundColor:"#2e64e5",
     padding:10,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:3,
},

buttonText: {
    fontSize:18,
    fontWeight:'50',
    color:'#fff',
    fontFamily:"sans-serif",
}
})
