import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';



class TaskItem extends Component {
  
  state = {
    updateText: this.props.description,
    checked: false
  }

  handleCheckBox = () => {
    this.setState({ checked: !this.state.checked }, () => {
      if(this.state.checked) {
        this.props.handleComplete(this.props.id);
      } else {
        this.props.handleUncomplete(this.props.id);
      }
    });
  } 


  render() {
    const { description, 
            handleDelete, 
            handleEdit,
            handleSave, 
            editIndex, 
            id } = this.props;

  
    if(editIndex !== id) {
      return (
        <View style={ styles.container }>
          <CheckBox
            title='checked'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={ this.state.checked }
            onPress={ () => this.handleCheckBox() } 
          />
          <View style={ styles.description }><Text>{ description }</Text></View>
          <Icon name="edit" onPress={ () => handleEdit(id) } />
          <Icon name="remove" onPress={ () => handleDelete(id) } />
        </View>
      );
    } else {
        return (
          <View style={ styles.container }>
            <Icon name="save" onPress={ () => handleSave( {description: this.state.updateText, id: id, complete: this.state.checked}) } />
            <TextInput value={ description } onChangeText={ (updateText) => this.setState({ updateText }) } />
          </View>
        );
    } 
  }
}

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row'
  },

  description: {
    flex: 1,
  },

  edit: {
    flex: 1
  },

  delete: {
    flex: 1,
    alignSelf: 'flex-end',
  }
})