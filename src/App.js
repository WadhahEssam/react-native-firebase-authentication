import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header label="Firebase Auth" />
      </View>
    );
  }
}

export default App;
