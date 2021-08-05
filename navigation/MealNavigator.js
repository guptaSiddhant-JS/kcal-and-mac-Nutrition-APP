import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CatagoriesScreen from '../screens/CatagoriesScreen';
import CatagoryMeal from '../screens/CatagoryMeal';
import MealDetails from '../screens/MealDetails';

const MealNavigator = createStackNavigator({
    Catogories:CatagoriesScreen,
    CMeal:CatagoryMeal,
    MealD:MealDetails,
});
export default createAppContainer( MealNavigator);