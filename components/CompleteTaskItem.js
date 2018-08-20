import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CompleteTaskItem = function({ description }) {
  return (
    <View style={styles.container}>
      <CheckBox
        containerStyle={{
          backgroundColor:'transparent',
          width: 40,
          borderWidth: 0
        }}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#f4511e'
        checked={ true }
      />
      <View style={ styles.description }><Text>{ description }</Text></View>
    </View>
  );
}

export default CompleteTaskItem;

const styles = {
  container: {
    flex: 1,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 5,
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 1
  },

  description: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  }

}