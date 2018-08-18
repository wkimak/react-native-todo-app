import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { deleteTask, editTask, saveEdit, completeTask, uncompleteTask } from '../redux/actions/taskActions';
import TaskItem from '../components/TaskItem';

class AllTasks extends Component {

  render() {
    const { taskList, 
            editIndex, 
            handleDelete, 
            handleEdit, 
            handleSave, 
            handleComplete, 
            handleUncomplete } = this.props;

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
                      handleEdit={ handleEdit }
                      editIndex={ editIndex }
                      handleSave={ handleSave }
                      handleDelete={ handleDelete }
                      handleComplete={ handleComplete }
                      handleUncomplete={ handleUncomplete }
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
    handleDelete: (id) => {
      dispatch(deleteTask(id));
    },
    handleEdit: (index) => {
      dispatch(editTask(index));
    },
    handleSave: (task) => {
      dispatch(saveEdit(task));
    },
    handleComplete: (id) => {
      dispatch(completeTask(id))
    },
    handleUncomplete: (id) => {
      dispatch(uncompleteTask(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);



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