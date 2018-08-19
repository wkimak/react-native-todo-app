import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebaseConfig } from '../config';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import { getUserInfo } from '../redux/actions/authActions';


firebase.initializeApp(firebaseConfig);

class Login extends Component {

  constructor(props) {
    super(props);

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.getUserInfo(user.displayName, user.uid);
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
      <View style={styles.backgroundImage}>
        <View style={ styles.container }>
            <Button 
              icon={ 
                <Icon name='facebook-square' 
                  size= {30} 
                  color='white' 
                /> 
              } 
              onPress={ () => this.logIn() }
              title='Facebook Login'
              buttonStyle={{
                backgroundColor: '#3b5998',
                width: 300,
                height: 70,
                borderRadius: 5,
                marginBottom: 30
              }}
            />
          </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   getUserInfo: (username, uid) => {
    dispatch(getUserInfo(username, uid));
   }
 };
}



export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#3b5998',
  },

  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    paddingBottom: 20,
    opacity: 0.95,
    justifyContent: 'flex-end'
  }

})