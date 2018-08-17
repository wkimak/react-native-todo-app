import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';



class TaskItem extends Component {
  
  state = {
    updateText: this.props.description
  }


  render() {
    const { description, handleDelete, handleEdit, editIndex, handleSaveEdit, index } = this.props;
  
    if(editIndex !== index) {
      return (
        <View style={ styles.container }>
          <Icon name="edit" onPress={ () => handleEdit(index) } />
          <View style={ styles.description }><Text>{ description }</Text></View>
          <Icon name="remove" onPress={ () => handleDelete(index) } />
        </View>
      );
    } else {
        return (
          <View style={ styles.container }>
            <Icon name="save" onPress={ () => handleSaveEdit(index, {description: this.state.updateText}) } />
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
    flex: 1
  },

  edit: {
    flex: 1
  },

  delete: {
    flex: 1,
    alignSelf: 'flex-end',
  }
})