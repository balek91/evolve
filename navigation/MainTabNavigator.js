import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ShopScreen from '../screens/ShopScreen'
import PlanScreen from '../screens/PlanScreen'
import BetScreen from '../screens/BetScreen'
import StatsScreen from '../screens/StatsScreen'
import MyBetsScreen from '../screens/MyBetsScreen'
import DetailItemScreen from '../screens/DetailItemScreen'

const ShopStack = createStackNavigator({
  Shop: ShopScreen,
  Detail : DetailItemScreen,
});

ShopStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor : '#FF9F5B',
    labelStyle: {
      fontSize: 25,
    },
    style: {
      backgroundColor: '#013A4D',
      paddingBottom: 5,
    },
  },
};

const StatsStack = createStackNavigator({
  Stats: StatsScreen,
});

StatsStack.navigationOptions = {
  tabBarLabel: ' Stats',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor : '#FF9F5B',
    labelStyle: {
      fontSize: 25,
    },
    style: {
      backgroundColor: '#013A4D',
      paddingBottom: 5,
    },
  },
};

const PlanStack = createStackNavigator({
  Plan: PlanScreen,
});

PlanStack.navigationOptions = {
  tabBarLabel: ' Map',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor : '#FF9F5B',
    labelStyle: {
      fontSize: 25,
    },
    style: {
      backgroundColor: '#013A4D',
      paddingBottom: 5,
    },
  },
};

const PariStack = createStackNavigator({
  Pari: BetScreen,
  MesParis : MyBetsScreen,
});

PariStack.navigationOptions = {
  tabBarLabel: '  Bet',
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor : '#FF9F5B',
    labelStyle: {
      fontSize: 25,
      paddingBottom: 5,
    },
    style: {
      backgroundColor: '#013A4D',
    },
  },
};
export default createBottomTabNavigator({
  ShopStack,
  StatsStack,
  PlanStack,
  PariStack,
});
