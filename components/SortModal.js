import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


class SortModal extends Component {


  handleSort = (sortType) => {
    this.props.toggleModal();
    if(sortType === 'date') {
      this.props.readTasks(this.props.uid, 'date');
    } else {
      this.props.readTasks(this.props.uid, 'priority');
    }
    
  }

  render() {
  
    return (
      <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.showModal}
       >
       
          <View style={styles.innerContainer}>
              <TouchableOpacity onPress={ () => this.handleSort('date') } style={styles.sortOption}><Text style={styles.text}>Sort By Date</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => this.handleSort('priority') } style={styles.sortOption}><Text style={styles.text}>Sort By Priority</Text></TouchableOpacity>
          </View>
      
      </Modal>
      </View>
    );
  }
}

export default SortModal;

const styles = StyleSheet.create({
   innerContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    opacity: 0.9
  },

  sortOption: {
    backgroundColor: '#f4511e',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 30,
    color: 'white'
  }
})

 

