import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, FlatList, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import HeaderBar from '../components/HeaderBar';
import CompleteTaskItem from '../components/CompleteTaskItem';
import BackgroundPhoto from '../components/BackgroundPhoto';

class CompletedTasks extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <View style={ styles.tasksContainer }>
      <HeaderBar />
      <BackgroundPhoto />
    
      <FlatList
        data={ taskList.map((item) => (
              { key: item.taskId, description: item.description, complete: item.complete }
        ))}
        renderItem={({ item }) => {
          if(item.complete) {
            return (
              <CompleteTaskItem key={item.key} description={ item.description } />
            );
          }}}
      />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.taskList.taskList,

})

export default connect(mapStateToProps, {})(CompletedTasks);

const styles = {
  tasksContainer: {
     flex: 1,
     backgroundColor: '#F5F5F5'
  },

}