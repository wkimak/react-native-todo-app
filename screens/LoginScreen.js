import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <ImageBackground source={require('../assets/broadway.jpeg')} style={ styles.backgroundImage }>
        <View style={ styles.container }>
          <Image style={ styles.logo } source={require('../assets/lotusLogo.png')} />
          <View style={ styles.btnContainer}>
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
                width: 200,
                borderRadius: 5,
                marginBottom: 30
              }}
            />
            <Button
              title='Create Free Account'
              buttonStyle={{
                width: 340,
                borderRadius: 5,
                backgroundColor: '#f4511e',
                marginBottom: 10
              }}
             />
            <Button
              title='Sign In'
              buttonStyle={{
                width: 340,
                borderRadius: 5,
                backgroundColor: 'white',
                marginBottom: 10
              }}
              textStyle={{
                color: 'black'
              }}
             />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },

  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
    paddingBottom: 20,
    opacity: 0.95
  },

  logo: {
    flex: 1
  },

  btnContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

})