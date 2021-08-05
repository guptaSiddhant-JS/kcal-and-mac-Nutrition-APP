import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button , Text, View } from 'react-native';

export default function CatagoryMeal(props) {
  return (
    <View style={styles.container}>
      <Text>CatagoryMeal</Text>
      <Button title='Go to Meals' onPress={() =>{
        props.navigation.navigate({routeName:'MD'});
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
