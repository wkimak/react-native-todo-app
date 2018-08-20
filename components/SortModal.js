import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// showModal - indicator is Modal is open or not (true/false)
// toggleModal - redux Action to acutally toggle state



const SortModal = function({ uid, toggleModal, showModal, readTasks }) {
  
  // function to send 'date' and 'priority' sorting opton to redux Actions.
  // Also, toggle Modal closed on select
  const handleSort = (sortType) => {
    toggleModal();
    if(sortType === 'date') {
      readTasks(uid, 'date');
    } else {
      readTasks(uid, 'priority');
    }
    
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ showModal }
      >
     
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={ () => handleSort('date') } style={styles.sortOption}>
            <Text style={styles.text}>Sort By Date</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => handleSort('priority') } style={styles.sortOption}>
            <Text style={styles.text}>Sort By Priority</Text>
          </TouchableOpacity>
        </View>
    
      </Modal>
    </View>
  );
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

 

