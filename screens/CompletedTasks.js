import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import CompleteTaskItem from '../components/CompleteTaskItem';

class CompletedTasks extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <View style={ styles.tasksContainer }>
        { taskList.length ? taskList.map((item) => {
          if(item.complete) {
            return (
              <CompleteTaskItem key={ item.id } description={ item.description } />
            );
          }
        }) : null }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.taskList.taskList
})

const connectCompletedTasks = connect(mapStateToProps, {})(CompletedTasks);

export default connectCompletedTasks;

const styles = {
  tasksContainer: {
     paddingTop: 50,
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'center'
  }
}