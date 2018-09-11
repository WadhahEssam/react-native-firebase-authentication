import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { View, StatusBar, } from 'react-native';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import HomeView from './HomeView';

class App extends Component {

  state = {
    view: 'signin',
    loggedIn: false,
    user: null,
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

     firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ loggedIn: false });
      } else {
        console.log(user);
        this.setState({ loggedIn: true, user });
      }
     });
  }

  changeView(view) {
    this.setState({ view });
  }

  selectView() {
    if (!this.state.loggedIn) {
      if (this.state.view === 'signin') {
        return <SigninForm changeView={this.changeView.bind(this)} />;
      } else if (this.state.view === 'signup') {
        return <SignupForm changeView={this.changeView.bind(this)} />; 
      }
    } else {
      return <HomeView email={this.state.user.email} />;
    }
  }

  render() {
    console.log(this.state.user);
    return (
      <View style={{ flex: 1, }}>
        {/* Making the status bar transparent */}
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
        {this.selectView()}
        
      </View>
    );
  }
}

export default App;
