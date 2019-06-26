/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';



export default class App extends Component {
  state = {
    placeName:"",
    places: []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeNameSubmitHandler = () => {
    if (this.state.placeName.trim() === "") 
    {
      return;
    }
    this.setState(prevState => 
    {
      return 
      {
        places: prevState.places.concat(prevState.placeName)
      };
    });

  };

  render() {
    const placeOutput = this.state.places.map(places =>(
      <Text>{places}</Text>
    ));
    
    return (
      <View style={styles.container}>
        <View style={styles.InputContainer}>
        <TextInput 
           placeholder="Your Favourite Place"
           value={this.state.placeName}
           onChangeText={this.placeNameChangeHandler}
           style={styles.InputPlace}
        />
        <Button 
          title="Add" 
          style={styles.ButtonPlace} 
          onPress={this.placeNameSubmitHandler}
        />
      </View>
      <View>{placeOutput}</View> 
    </View> 
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  InputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  InputPlace: {
    width: '70%',
  },
  ButtonPlace: {
    width: '30%',
  },
});
