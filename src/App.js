import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { 
  View, 
  ImageBackground, 
  StatusBar, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text 
} from 'react-native';


const background = require('../img/background.jpg');
const userIcon = require('../img/user.png');

class App extends Component {

  state = { 
    email: '',
    password: '',
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

  submitLoginForm() {
    const { email, password } = this.state;
    
    console.log(firebase.auth().signInWithEmailAndPassword(email, password));
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
        <ImageBackground source={background} style={styles.ImageBackground}>
          <View style={styles.signinView}>
            <Image source={userIcon} style={styles.signinIcon} />
            <TextInput 
              onChangeText={text => this.setState({ email: text, })}
              value={this.state.email}
              placeholder={'Email'}
              placeholderTextColor={'white'}
              textContentType={'emailAddress'}
              underlineColorAndroid={'white'}
              selectionColor={'white'}
              autoCorrect={false}
              style={styles.signinInput}
            />
            <TextInput 
              onChangeText={text => this.setState({ password: text, })}
              value={this.state.password}            
              placeholder={'Password'}
              placeholderTextColor={'white'}
              textContentType={'emailAddress'}
              underlineColorAndroid={'white'}
              selectionColor={'white'}
              secureTextEntry
              autoCorrent={false}
              style={styles.signinInput}
            />            
            <TouchableOpacity 
              onPress={this.submitLoginForm.bind(this)} 
              style={styles.signinButton}
            >
              <Text style={styles.signinButtonFont}>SIGN IN</Text>
            </TouchableOpacity>
            <Text 
              style={{ fontSize: 10, color: 'white', marginTop: 20, }}
            >
              Firebase Authentication
            </Text>
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
  },
  signinIcon: {
    width: 150,
    height: 150,
    marginBottom: 60,
    opacity: 0.8,
  },
  signinView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinInput: {
    width: 300,
    color: 'white',
    borderBottomColor: 'white',
    fontSize: 15
  },
  signinButton: {
    backgroundColor: 'white',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 20,
    borderColor: '#CB5A5E',
    borderWidth: 1,
    opacity: 0.9,
  },
  signinButtonFont: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#CB5A5E'
  }
};

export default App;
