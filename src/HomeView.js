import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import Header from './Header';


const background = require('../img/background.jpg');

class HomeView extends Component { 

  signout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View>
        <Header label={'HOME'} />

        <ImageBackground source={background} style={styles.ImageBackground}>
        
          <View style={styles.userPanel}>
            <Text>Welcome !</Text>
            <Text>You Have Signed In With This Email</Text>
            <Text>{this.props.email}</Text>
            <TouchableOpacity style={styles.signoutButton} onPress={this.signout} >
              <Text style={{ fontWeight: 'bold', color: 'white', }}>SIGN OUT</Text>
            </TouchableOpacity>

          </View>
        
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  ImageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userPanel: {
    position: 'relative',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  signoutButton: {
    width: 200,
    height: 40,
    position: 'relative',
    top: 20,
    backgroundColor: '#C52036',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B54654',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default HomeView;
