import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import CompleteTaskItem from '../components/CompleteTaskItem';

class CompletedTasks extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <View style={ styles.tasksContainer }>
      <ImageBackground source={ require('../assets/nightsky.jpeg') } style={styles.backgroundImage}>
        <Text> Completed </Text>
      </ImageBackground>
    
      <FlatList
        data={ taskList.map((item) => (
              { key: item.id, description: item.description, complete: item.complete }
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
  taskList: state.taskList.taskList
})

export default connect(mapStateToProps, {})(CompletedTasks);

const styles = {
  tasksContainer: {
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center',
     backgroundColor: '#F5F5F5'
  },

  backgroundImage: {
    flex: 0.5,
    width: 375
  }
}