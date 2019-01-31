import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ShopScreen from '../screens/ShopScreen'
import PlanScreen from '../screens/PlanScreen'
import BetScreen from '../screens/BetScreen'
import StatsScreen from '../screens/StatsScreen'

const ShopStack = createStackNavigator({
  Shop: ShopScreen,
});

ShopStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarOptions: {
    activeTintColor: '#0A3A51',
    inactiveTintColor : '#6C4E56',
    labelStyle: {
      fontSize: 25,
    },
    style: {
      backgroundColor: '#FFA264',
      paddingBottom: 5,
    },
  },
};

const StatsStack = createStackNavigator({
  Stats: StatsScreen,
});

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarOptions: {
    activeTintColor: '#0A3A51',
    inactiveTintColor : '#6C4E56',
    labelStyle: {
      fontSize: 25,
    },
    style: {
      backgroundColor: '#FFA264',
      paddingBottom: 5,
    },
  },
};

const PlanStack = createStackNavigator({
  Plan: PlanScreen,
});

PlanStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarOptions: {
    activeTintColor: '#0A3A51',
    inactiveTintColor : '#6C4E56',
    labelStyle: {
      fontSize: 25,
    },
    style: {
      backgroundColor: '#FFA264',
      paddingBottom: 5,
    },
  },
};

const PariStack = createStackNavigator({
  Pari: BetScreen,
});

PariStack.navigationOptions = {
  tabBarLabel: 'Bet',
  tabBarOptions: {
    activeTintColor: '#0A3A51',
    inactiveTintColor : '#6C4E56',
    labelStyle: {
      fontSize: 25,
      paddingBottom: 5,
    },
    style: {
      backgroundColor: '#FFA264',
    },
  },
};
export default createBottomTabNavigator({
  ShopStack,
  StatsStack,
  PlanStack,
  PariStack,
});
