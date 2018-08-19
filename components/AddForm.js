import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';

class AddForm extends Component {

  state = { description: ''}


  generateKey() {
    return `${ new Date().getTime() }`;
  }

  render() {
    const { addTask, uid } = this.props;
    return (
      <View style={styles.container}>
        <Icon name='ios-add' 
          size= {30} 
          color='#f4511e'
          style={ styles.plusIcon } 
        /> 
        <TextInput placeholder='Add a to-do...' 
                   style={styles.input}
                   onChangeText={ (description) => this.setState({ description })} 
                   onSubmitEditing={() => addTask({description: this.state.description, id: this.generateKey(), complete: false, uid: uid})}
                   />
      </View>
    );
  }
}

export default AddForm;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 10
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff'
  },

  plusIcon: {
    padding: 10
  }

})
