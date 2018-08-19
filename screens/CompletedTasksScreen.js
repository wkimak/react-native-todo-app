import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import CompleteTaskItem from '../components/CompleteTaskItem';

class CompletedTasks extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <View style={ styles.tasksContainer }>
      <FlatList
        data={ taskList.map((item) => {
          if(item.complete) {
            return (
              { key: item.id, description: item.description }
            );
          }
        })}
        renderItem={({ item }) => (
          <CompleteTaskItem key={ item.id } description={ item.description } />
        )}
      />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList: state.taskList.taskList
})

export default connect(mapStateToProps, {})(CompletedTasks);

const styles = {
  tasksContainer: {
     paddingTop: 100,
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'center',
     backgroundColor: '#ff7c54'
  }
}