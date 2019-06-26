import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated} from "react-native";
import { connect } from "react-redux";
import { Navigation } from 'react-native-navigation';

import PlaceList from "../../components/PlaceList/PlaceList";
import { getPlaces } from '../../store/actions/index';

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    Navigation.push(this.props.componentId,{
      component: {
        name: "awesome-places.PlaceDetailScreen",
        title: selPlace.name,
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name
            }
          }
        }
      }
    });
  };

  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1),
    placesAnim: new Animated.Value(0)
  }

  componentDidMount() {
    this.props.onLoadPlaces();
  }

  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
        this.setState({
          placesLoaded: true
        });
        this.placesLoadedHandler();
    });    
  };


  render() {
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1 ],
                outputRange: [12, 1]
              })
            }
          ]
        }}>
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.placesLoaded) {
      content = (
        <Animated.View
          style={{
            opacity: this.state.placesAnim,        
         }}>
         <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
        </Animated.View>
      );
    }

    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 26
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadPlaces: () => dispatch(getPlaces())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);
