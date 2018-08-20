import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class SortModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleSort = (type) => {
    console.log('TYPE', type);
    this.setModalVisible(!this.state.modalVisible)
  }

  render() {
    return (
      <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
       >
        <View style={styles.modal}>
          <View style={styles.modal2}>
              <TouchableOpacity onPress={ () => this.handleSort('date') } style={styles.sortOption}><Text>Sort By Date</Text></TouchableOpacity>
              <TouchableOpacity onPress={ () => this.handleSort('priority') } style={styles.sortOption}><Text>Sort By Priority</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          this.setModalVisible(true);
        }} 
        style={styles.show}>
        <Text>Sort By</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

export default SortModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
  show: {
    backgroundColor: 'orange'
  },
  modal: {
    marginTop: 500,
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  modal2: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sortOption: {
    backgroundColor: 'orange',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

 

