import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

// These are the background images displayed on AllTasks and Completed Tasks screens
const BackgroundPhoto = function({ addTask, uid, children }) {
  return (
    <ImageBackground source={ children ? require('../assets/mountainview.jpeg') : require('../assets/nightsky.jpeg') } 
                     style={ children ? styles.backgroundImage : styles.backgroundImage2 }>
       <View style={ styles.whiteOverlay }></View>
       { children }
    </ImageBackground>
  )
}


export default BackgroundPhoto;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 0.45,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 1
  },

  backgroundImage2: {
    flex: 0.35,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 1
  },

  whiteOverlay: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)'
  }
})