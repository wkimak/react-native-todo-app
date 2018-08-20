import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, View, Text,  ActivityIndicator} from 'react-native';


const AuthLoadingScreen = () => (
    <View style={ styles.container }>
      <ActivityIndicator style={ styles.spinner } size={0} color='#f4511e' />
    </View>
)


export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})