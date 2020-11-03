import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from '../screens/Dashboard';
import RestaurantDetails from '../screens/RestaurantDetails';

const AppRouter = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  RestaurantDetails: {
    screen: RestaurantDetails
  }
});
export default createAppContainer(AppRouter);