import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { firebaseConfig } from '../config';
import * as firebase from 'firebase';


firebase.initializeApp(firebaseConfig);

class Login extends Component {

  constructor(props) {
    super(props);

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.navigation.navigate('App');
      } 
    });
  }
 
  async logIn() {
    try {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1054888201335854', {
        permissions: ['public_profile', 'email'],
      });

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
         console.log(error);
       });
    }
    } catch(err) {
      console.log(err);
    }
  }



  render() {
    return (
      <View>
        <Button title='Connect with Facebook' onPress={ () => this.logIn() } />
      </View>
    );
  }
}

export default Login;