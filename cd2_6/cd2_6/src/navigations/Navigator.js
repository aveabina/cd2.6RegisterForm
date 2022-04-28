import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const stackNavigatorOptions = {
  headerShown:false
}
const Navigator = createStackNavigator(
  {
  Login:{screen:Login},
  Register:{screen:Register}
  }, 
  {defaultNavigationOptions: stackNavigatorOptions});

export default createAppContainer(Navigator); 