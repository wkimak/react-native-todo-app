import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';



class TaskItem extends Component {
  
  state = {
    updatedText: this.props.description,
    checked: this.props.isComplete,
    isEditing: false
  }

  handleCheckBox = () => {
    this.setState({ checked: !this.state.checked }, () => {
      if(this.state.checked) {
        this.props.completeTask(this.props.uid, this.props.id);
      } else {
        this.props.uncompleteTask(this.props.uid, this.props.id);
      }
    });
  } 

  handleSaveEdit = (update) => {
    this.setState({ isEditing: false }, () => {
      this.props.saveEdit(this.props.uid, {description: this.state.updatedText, id: this.props.id, complete: this.state.checked});
    })
  }


  render() {
    const { description, 
            deleteTask, 
            editTask,
            saveEdit, 
            editIndex, 
            isPriority,
            uid,
            id } = this.props;

    
      return (
        <TouchableOpacity style={ !isPriority ? styles.container : styles.priorityContainer } onPress={ () => {!this.state.isEditing ? this.setState({ isEditing: true }) : this.handleSaveEdit()} }>
          <CheckBox
            containerStyle={{
              backgroundColor:'transparent',
              width: 40,
              borderWidth: 0
            }}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='#f4511e'
            checked={ this.state.checked }
            onPress={ () => this.handleCheckBox() } 
          />
     
          {this.state.isEditing ? 
            <TextInput style={styles.description} 
                       value={ description } 
                       onChangeText={ (updatedText) => this.setState({ updatedText }) }
                       onSubmitEditing={() => this.handleSaveEdit() }
                        />
            :
            <Fragment>
              <View style={ styles.description }><Text>{ description }</Text></View>
              <Icon name="remove" color='red' onPress={ () => deleteTask(uid, id) } />
            </Fragment>
          }
      
        </TouchableOpacity>
      );
    } 
}

export default TaskItem;

const styles = StyleSheet.create({
  container: {    
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 10,
    marginBottom: 1
  },

  priorityContainer: {
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 10,
    marginBottom: 1,
    borderBottomColor: 'orange',
    borderBottomWidth: 0.5
  },

  description: {
    flex: 1,
    justifyContent: 'center'
  },

  edit: {
    flex: 1
  },

  delete: {
    flex: 1,
    alignSelf: 'flex-end',
  }
})