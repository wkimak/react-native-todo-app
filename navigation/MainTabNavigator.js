import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import TaskList from '../screens/TaskList';
import AddTask from '../screens/AddTask';


const LoggedIn = createBottomTabNavigator({
  TaskList: {
    screen: TaskList
  },

  AddTask: {
    screen: AddTask
  }
}, {
     initialRouteName: 'TaskList',  
   }

);

export default LoggedIn;
