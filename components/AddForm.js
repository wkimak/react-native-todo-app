import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

class AddForm extends Component {

  state = { description: ''}

  generateKey() {
    return `${ new Date().getTime() }`;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.container}>
        <TextInput placeholder='Description' 
                   style={styles.description}
                   multiline={ true } numberOfLines={4} 
                   onChangeText={ (description) => this.setState({ description })} />

        <TouchableOpacity style={styles.submit} 
                          onPress={ () => handleSubmit({description: this.state.description, id: this.generateKey(), complete: false }) }>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

export default AddForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    paddingLeft: 20,
    paddingRight: 20
  },
  description: {
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10
  },

  submit: {
    backgroundColor: '#f4511e',
    marginTop: 30,
    paddingTop: 15,
    height: 50,
    borderRadius: 10
  },
  btnTxt: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
