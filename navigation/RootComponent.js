import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MainTabNavigator from './MainTabNavigator';

class RootComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainTabNavigator />
      </View>
    );
  }
}

export default RootComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
