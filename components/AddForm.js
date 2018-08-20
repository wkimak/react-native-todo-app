import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, View, Text, TextInput } from 'react-native';

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
          size= {35} 
          color='#f4511e'
          style={ styles.plusIcon } 
        /> 
        <TextInput placeholder='Add a to-do...' 
                   style={styles.input}
                   onChangeText={ (description) => this.setState({ description })} 
                   onSubmitEditing={() => addTask(uid, {description: this.state.description, taskId: this.generateKey(), complete: false, priority: this.state.isPriority })}
                   />
        <CheckBox
          containerStyle={{
            backgroundColor:'transparent',
            width: 40,
            borderWidth: 0,
            height: 60,
            marginTop: 8
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
    backgroundColor: '#fff'
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
