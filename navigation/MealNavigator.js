import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMeal from '../screens/CatagoryMeal';
import MealDetails from '../screens/MealDetails';
import color from '../screens/constants/Color';

const MealNavigator = createStackNavigator({
    CS:CatagoriesScreen,
    CM:CatagoryMeal,
    MD:MealDetails,
} ,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:color.primaryColor,
          },
          headerTintColor:'white'
    }
});
export default createAppContainer( MealNavigator);