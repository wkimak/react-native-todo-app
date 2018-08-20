import React from 'react';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { AsyncStorage } from 'react-native';


const HeaderBar = function(props) {

  const handleSignOut = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  }
  
  if(props.onAllTasksScreen) { 
  return (
    <Header
      backgroundColor='#f5f5f5'
      leftComponent={{ icon: 'sort', color: 'black', onPress: () => props.toggleModal() }}
      centerComponent={{ text: 'Sign Out', style: {color: 'black', left: 135}, onPress: () => handleSignOut() }}
    />
  )
  } else {
    return (
    <Header
      backgroundColor='#f5f5f5'
      centerComponent={{ text: 'Sign Out', style: {color: 'black', left: 135}, onPress: () => handleSignOut() }}
    />
    );
  } 
}

export default HeaderBar;
