import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteTask, editTask, saveEdit, completeTask, uncompleteTask } from '../redux/actions/taskActions';

import TaskItem from '../components/TaskItem';

class AllTasks extends Component {

  static navigationOptions = {
    tabBarLabel: 'hello'
  }

  handleDelete = (id) => {
    this.props.delete(id);
  }

  handleEdit = (index) => {
    this.props.edit(index);
  }

  handleSaveEdit = (task) => {
    this.props.save(task);
  }

  handleComplete = (id) => {
    this.props.complete(id);
  }

  handleUncomplete = (id) => {
    this.props.uncomplete(id);
  }

  render() {
    const { taskList, editIndex } = this.props;

    return (
      <View style={ styles.container }>
        <Icon name="add-circle" 
          color='#f4511e' 
          size={60} 
          style={ styles.addIcon }
          onPress={ () => this.props.navigation.navigate('AddTask')} />
        <View style={styles.taskContainer}>
          { taskList.length ? taskList.map((item, i) => {
            return (
              <TaskItem key={ i } 
                      id={ item.id } 
                      description={ item.description }
                      handleEdit={ this.handleEdit }
                      editIndex={ editIndex }
                      handleSaveEdit={ this.handleSaveEdit }
                      handleDelete={ this.handleDelete }
                      handleComplete={ this.handleComplete }
                      handleUncomplete={ this.handleUncomplete }
                       />
            );
          }) : null }
        </View>
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
    delete: (id) => {
      dispatch(deleteTask(id));
    },
    edit: (index) => {
      dispatch(editTask(index));
    },
    save: (task) => {
      dispatch(saveEdit(task));
    },
    complete: (id) => {
      dispatch(completeTask(id))
    },
    uncomplete: (id) => {
      dispatch(uncompleteTask(id));
    }
  }
}

const connectTaskList = connect(mapStateToProps, mapDispatchToProps)(AllTasks);


export default connectTaskList;


const styles = StyleSheet.create({
  container: {
    height: '100%'
  },

  taskContainer: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  addIcon: {
    
  }
})