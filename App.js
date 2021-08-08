import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealNavigator from './navigation/MealNavigator';
import {enableScreens} from 'react-native-screens'
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

// const fetchFont =() => {
//   return Font.loadAsync({
//     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };
enableScreens();

export default function App() {
  // const [isFontloaded , setIsFontLoaded] = useState(false);
  // if(!isFontloaded){
  //   return (
  //   <AppLoading 
    
  //   />
  //   )
  // }
  
  return <MealNavigator/>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
