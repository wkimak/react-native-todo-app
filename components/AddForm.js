import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';

class AddForm extends Component {

  state = { description: '', isPriority: false}


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
                   onSubmitEditing={() => addTask(uid, {description: this.state.description, id: this.generateKey(), complete: false, priority: this.state.isPriority })}
                   />
        <CheckBox
          containerStyle={{
            backgroundColor:'transparent',
            width: 40,
            borderWidth: 0,
            height: 60
          }}
          checkedIcon='star'
          uncheckedIcon='star-o'
          checkedColor='#f4511e'
          checked={ this.state.isPriority }
          onPress={ () => this.setState({ isPriority: !this.state.isPriority }) } 
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
    marginBottom: 10,
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
