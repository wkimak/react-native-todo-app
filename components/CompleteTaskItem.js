import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';

const CompleteTaskItem = function({ description }) {
  return (
    <View style={styles.container}>
      <Text>{description}</Text>
    </View>
  );
}

export default CompleteTaskItem;

const styles = {
  container: {
    width: '90%',
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row'
  }
}