import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { deleteTask, editTask, saveEdit } from '../redux/actions/taskActions';

import TaskItem from '../components/TaskItem';

class TaskList extends Component {

  handleDelete = (index) => {
    this.props.delete(index);
  }

  handleEdit = (index) => {
    this.props.edit(index);
  }

  handleSaveEdit = (index, task) => {
    this.props.save(index, task);
  }

  render() {
    const { taskList, editIndex } = this.props;

    return (
      <View style={ styles.container }>
        { taskList.length ? taskList.map((item, i) => {
          return (
            <TaskItem key={ i } 
                      index={ i } 
                      description={ item }
                      handleEdit={ this.handleEdit }
                      editIndex={ editIndex }
                      handleSaveEdit={ this.handleSaveEdit }
                      handleDelete={ this.handleDelete } />
          );
        }) : null }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.taskList.taskList,
  editIndex: state.editIndex.editIndex
});


const mapDispatchToProps = (dispatch) => {
  return {
    delete: (index) => {
      dispatch(deleteTask(index));
    },
    edit: (index) => {
      dispatch(editTask(index));
    },
    save: (index, task) => {
      dispatch(saveEdit(index, task));
    }
  }
}

const connectTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);


export default connectTaskList;


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})