import React from 'react';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';


const HeaderBar = function(props) {

  const handleSignOut = async () => {
    // clear AsyncStorage of Facebook token
    await AsyncStorage.clear();
    
    // sign out of firebase
    firebase.auth().signOut().then(function() {
      props.navigation.navigate('Auth');
    }, function(error) {
      console.log(error);
    });
  }
  
  return (
    <Header
      backgroundColor='#f5f5f5'
      outerContainerStyles={{ height: 85}}
      leftComponent={props.onAllTasksScreen ? { icon: 'sort', color: 'black', onPress: () => props.toggleModal() } : null}
      centerComponent={{ text: 'Sign Out', style: {color: 'black', left: 135}, onPress: () => handleSignOut() }}
    />
  );
}

export default HeaderBar;
