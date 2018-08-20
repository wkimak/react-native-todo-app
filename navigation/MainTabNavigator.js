import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import SortModal from '../components/SortModal';


// Login screen
const AuthStack = createStackNavigator({
  Login: LoginScreen
});


// Bottom Tab Navigator routes, only available after login
const AppStack = createBottomTabNavigator({
  AllTasks: {
    screen: AllTasksScreen,
  },

  CompletedTasks: {
    screen: CompletedTasksScreen,
    navigationOptions: {
      tabBarLabel: 'Completed'
    }
  },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#fff',
      height: 30,
    },

    labelStyle: {
      color: '#f4511e',
      fontSize: 14,
    },

    tabStyle: {
     height: 60,
     paddingBottom: 20
    },

    activeBackgroundColor: '#f5f5f5',
    activeTintColor: 'blue'
  }
});

// Switch Navigator, so user does not have back capabilites to Login screen once signed in
export default createSwitchNavigator({
  Loading: AuthLoadingScreen,
  Auth: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'Auth',
})


