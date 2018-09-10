import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { View, StatusBar, } from 'react-native';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

class App extends Component {

  state = {
    view: 'signin',
  }

  // will setup the firebase connection 
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAOsA_6FKLNJOXQc8omA0Tjym6pgEy8YA4',
      authDomain: 'fir-auth-51a3f.firebaseapp.com',
      databaseURL: 'https://fir-auth-51a3f.firebaseio.com',
      projectId: 'fir-auth-51a3f',
      storageBucket: 'fir-auth-51a3f.appspot.com',
      messagingSenderId: '428099740163'
    });
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        {/* Making the status bar transparent */}
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
        {
          (this.state.view === 'signin') ?
          <SigninForm changeView={this.changeView.bind(this)} /> : 
          <SignupForm changeView={this.changeView.bind(this)} /> 
        }
        
      </View>
    );
  }
}

export default App;
