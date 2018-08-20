import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';

import CompleteTaskItem from '../components/CompleteTaskItem';

class CompletedTasks extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <View style={ styles.tasksContainer }>
      <HeaderBar />
      <ImageBackground source={ require('../assets/nightsky.jpeg') } style={styles.backgroundImage}>
        <View style={styles.whiteOverlay}></View>
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
  taskList: state.taskList.taskList,

})

export default connect(mapStateToProps, {})(CompletedTasks);

const styles = {
  tasksContainer: {
     flex: 1,
     backgroundColor: '#F5F5F5'
  },

  backgroundImage: {
    flex: 0.5,
    width: 375
  },
  whiteOverlay: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
}