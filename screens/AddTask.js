import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { addTask } from '../redux/actions/taskActions';
import AddForm from '../components/AddForm';


class AddTask extends Component {
   static navigationOptions = {
    title: 'Add Task'
  }

  handleSubmit = (task) => {
    this.props.add(task);
  }

  render() {
    return (
      <View>
        <AddForm navigation={ this.props.navigation } handleSubmit={ this.handleSubmit } />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (task) => {
      dispatch(addTask(task))
    }
  }
}



const connectAddTask = connect(null, mapDispatchToProps)(AddTask);

export default connectAddTask;