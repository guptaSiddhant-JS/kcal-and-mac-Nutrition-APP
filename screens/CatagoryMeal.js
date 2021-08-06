import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button , Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

export default function CatagoryMeal(props) {
  const catId = props.navigation.getParam('catgoryId');
  const selectedId = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.container}>
      <Text>CatagoryMeal</Text>
      <Text>{selectedId.title}</Text>
      <Button title='Go to Meals' onPress={() =>{
        props.navigation.navigate({routeName:'MD'});
      }} />
      <Button title='Go Back' onPress={() =>{
        props.navigation.navigate({routeName:'CS'});
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
