import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';


const AuthStack = createStackNavigator({
  Login: LoginScreen
});


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
  Sort: {
    screen: CompletedTasksScreen
  } 
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#fff',
      height: 30
    },
    labelStyle: {
      color: '#f4511e',
      fontSize: 12
    }
  }
});

export default createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'Auth'
})


