import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ColorPropType, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Color from './constants/Color'

const CatagoriesScreen = props => {
  const renderItems= itemData =>{ 
    return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate({routeName:'CM'});
    }}>
      <View  style={styles.container}>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
    );
  }
  return (
    <FlatList
     keyExtractor={(item , index)=> item.id} 
     data={CATEGORIES}
     renderItem={renderItems}
     />
  );
};
// Adding Header Title
CatagoriesScreen.navigationOptions ={
  headerTitle:'Kcal & Mac',
  headerStyle:{
    backgroundColor:Color.primaryColor,
  },
  headerTintColor:'white'
}

const styles = StyleSheet.create({
  container:{
    marginVertical:12,
    marginHorizontal:25,
    height: 180,
    backgroundColor:'#BCFFB9',


  },
});
export default CatagoriesScreen;