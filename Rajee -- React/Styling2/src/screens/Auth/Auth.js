import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }
    
    render () {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImages}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText style={styles.textHeading}>Please Log In</HeadingText>
                    </MainText>
                    <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Youe E-Mail Address" style={styles.input} />
                        <DefaultInput placeholder="Password" style={styles.input}/>
                        <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                    </View>
                    <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImages: {
        width: "100%",
        flex: 1
      },

});

export default AuthScreen;