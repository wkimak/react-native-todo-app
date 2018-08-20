import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootComponent from './navigation/RootComponent';
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from './redux/store';


class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootComponent />
      </Provider>  
    );
  }
}


 export default App;