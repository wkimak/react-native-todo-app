import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import SortModal from '../components/SortModal';


const AuthStack = createStackNavigator({
  Login: LoginScreen
});

// const TabBarComponent = (props) => {
// console.log('PROPS12345', props.jumpTo);
//   props.jumpTo(props.navigation.state.index)
//   return (
//   <BottomTabBar {...props} />
// )
// };

// const Bottom = function(props) {
//   const jumpTo = (index) => {

//     const { navigation: { navigate }, jumpTo } = props;

//     if(index === 2) {
//       console.log('index is 3')
//      //jumpTo('AllTasks');
//      props.navigation.navigate('AllTasks')
//     }

//   }
     
//     return (
//       <TabBarComponent {...props} jumpTo={ jumpTo } style={{ backgroundColor: 'red'}} />
//     );
// }


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
      height: 30
    },
    labelStyle: {
      color: '#f4511e',
      fontSize: 12
    }
  }
});

export default createSwitchNavigator({
  Loading: AuthLoadingScreen,
  Auth: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'Auth',
  backBehavior: 'initialRoute'
})


