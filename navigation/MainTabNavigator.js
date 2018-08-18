import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';


const AuthStack = createStackNavigator({
  Login: LoginScreen
});

const AllTasksStack = createStackNavigator({
  AllTasks: AllTasksScreen,
  AddTask: AddTaskScreen
});

const AppStack = createBottomTabNavigator({
  AllTasks: {
    screen: AllTasksStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'All',
      tabBarVisible: navigation.state.index === 1 ? false : true
    })
  },
  CompletedTasks: {
    screen: CompletedTasksScreen,
    navigationOptions: {
      tabBarLabel: 'Completed'
    }
  } 
});

export default createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'App'
})


