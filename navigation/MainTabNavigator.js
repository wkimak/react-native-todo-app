import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import AllTasks from '../screens/AllTasks';
import AddTask from '../screens/AddTask';
import CompletedTasks from '../screens/CompletedTasks';


const AllTasksStack = createStackNavigator({
  AllTasks: AllTasks,
  AddTask: AddTask
});


const LoggedIn = createBottomTabNavigator({
  AllTasks: {
    screen: AllTasksStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'All',
      tabBarVisible: navigation.state.index === 1 ? false : true
    })
  },
  CompletedTasks: {
    screen: CompletedTasks,
    navigationOptions: {
      tabBarLabel: 'Completed'
    }
  } 

});

export default LoggedIn;
