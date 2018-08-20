import React, { Component } from 'react';

import { AsyncStorage, StyleSheet, View, Text, Button, FlatList, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

import { connect } from 'react-redux';
import { addTask, readTasks, deleteTask, 
         editTask, saveEdit, completeTask, 
         uncompleteTask, toggleModal } from '../redux/actions/taskActions';

import TaskItem from '../components/TaskItem';
import AddForm from '../components/AddForm';
import SortModal from '../components/SortModal';
import HeaderBar from '../components/HeaderBar';
import BackgroundPhoto from '../components/BackgroundPhoto';


class AllTasks extends Component {

  componentDidMount() {
    this.props.readTasks(this.props.uid, 'date');
  }

  render() {
    const { navigation,
            taskList,  
            addTask,
            readTasks,
            deleteTask, 
            editTask, 
            saveEdit,
            completeTask, 
            uncompleteTask,
            toggleModal,
            showModal,
            uid } = this.props;


    return (
      <View style={ styles.container }>
        <HeaderBar navigation={ navigation } onAllTasksScreen={ true } toggleModal={ toggleModal } />
        <SortModal uid={uid} readTasks={ readTasks } toggleModal={ toggleModal } showModal={ showModal }/>
        <BackgroundPhoto photo={'../assets/mountainview.jpeg'}> 
          <AddForm addTask={ addTask } uid={ uid } />
        </BackgroundPhoto>

        
       
        <FlatList 
          data = { taskList.map((item, i) => {
            return (
                     {key: item.taskId,
                      taskId: item.taskId, 
                      uid: uid,
                      description: item.description,
                      isComplete: item.complete,
                      isPriority: item.priority,
                      editTask: editTask,
                      saveEdit: saveEdit,
                      deleteTask: deleteTask,
                      completeTask: completeTask,
                      uncompleteTask: uncompleteTask}    
             );
          })}
          renderItem={ ({ item }) => (
            <TaskItem
              key={item.key}
              taskId={item.taskId} 
              uid={item.uid}
              description={item.description}
              isComplete={item.isComplete}
              isPriority={item.isPriority}
              editTask={item.editTask}
              saveEdit={item.saveEdit}
              deleteTask={item.deleteTask}
              completeTask={item.completeTask}
              uncompleteTask={item.uncompleteTask}
             />
          )}
        />
   
     </View>         
    );
  }
}

const mapStateToProps = ({ taskList, uid, toggleModal }) => ({
  taskList: taskList.taskList,
  uid: uid.uid,
  showModal: toggleModal.toggleModal
});

const mapDispatchToProps = {
  addTask, deleteTask, editTask, 
  saveEdit, completeTask, uncompleteTask,
  readTasks, toggleModal
}


export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

})