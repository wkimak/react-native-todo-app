import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { addTask, deleteTask, editTask, saveEdit, completeTask, uncompleteTask } from '../redux/actions/taskActions';
import TaskItem from '../components/TaskItem';
import AddForm from '../components/AddForm';

class AllTasks extends Component {



  render() {
    const { taskList, 
            editIndex, 
            handleAdd,
            handleDelete, 
            handleEdit, 
            handleSave, 
            handleComplete, 
            handleUncomplete } = this.props;

    return (
      <View style={ styles.container }>
        <AddForm handleAdd={ handleAdd } />
        <FlatList 
          data = { taskList.map((item, i) => {
            return (
                     {
                      key: item.id,
                      id: item.id, 
                      description: item.description,
                      handleEdit: handleEdit,
                      editIndex: editIndex,
                      handleSave: handleSave,
                      handleDelete: handleDelete,
                      handleComplete: handleComplete,
                      handleUncomplete: handleUncomplete}    
             );
          })}
          renderItem={ ({ item }) => (
            <TaskItem
              key={item.key}
              id={item.id} 
              description={item.description}
              handleEdit={item.handleEdit}
              editIndex={item.editIndex}
              handleSave={item.handleSave}
              handleDelete={item.handleDelete}
              handleComplete={item.handleComplete}
              handleUncomplete={item.handleUncomplete}
             />
          )}
        />
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
    handleAdd: (task) => {
      dispatch(addTask(task))
    },
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
    height: '100%',
    backgroundColor: '#ff7c54',
    marginBottom: 20
  }
})