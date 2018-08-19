import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { addTask, readTasks, deleteTask, editTask, saveEdit, completeTask, uncompleteTask } from '../redux/actions/taskActions';
import TaskItem from '../components/TaskItem';
import AddForm from '../components/AddForm';

class AllTasks extends Component {

  static navigationOptions = {
    title: 'All',
    headerStyle: {
      backgroundColor: 'blue'
    }
  }

  componentDidMount() {
    this.props.readTasks(this.props.uid);
  }


  render() {
    const { taskList, 
            editIndex, 
            addTask,
            deleteTask, 
            editTask, 
            saveEdit,
            completeTask, 
            uncompleteTask,
            uid } = this.props;


    return (
      <View style={ styles.container }>
       <ImageBackground source={ require('../assets/mountainview.jpeg') } style={styles.backgroundImage}>
         <Text style={styles.welcome}> Hello {this.props.username}</Text>
         <AddForm addTask={ addTask } uid={ uid } />
       </ImageBackground>
       
        <FlatList 
          data = { taskList.map((item, i) => {
            return (
                     {key: item.id,
                      id: item.id, 
                      uid: uid,
                      description: item.description,
                      isComplete: item.complete,
                      editIndex: editIndex,
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
              id={item.id} 
              uid={item.uid}
              description={item.description}
              isComplete={item.isComplete}
              editIndex={item.editIndex}
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

const mapStateToProps = (state) => ({
  taskList: state.taskList.taskList,
  editIndex: state.editIndex.editIndex,
  username: state.username.username,
  uid: state.uid.uid
});

const mapDispatchToProps = {
  addTask, deleteTask, editTask, 
  saveEdit, completeTask, uncompleteTask, readTasks
}


export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backgroundImage: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 1
  },
  welcome: {
    flex: 2,
    fontSize: 24,
    justifyContent: 'center'
  }
})