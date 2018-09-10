import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const background = require('../img/background.jpg');
const userIcon = require('../img/user.png');

class SignupForm extends Component {

    state = { 
        email: '',
        password: '',
        confirmPassword: '',
        error: null,
    }

    submitLoginForm() {
        const { email, password , confirmPassword } = this.state;
    
        if (password !== confirmPassword) {
          this.setState({ error: 'Error: Passwords doesn\'t match' });
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
          this.setState({ error: null });
          console.log(response);
        })
        .catch(error => {
          this.setState({ error: error.toString() });
        });
    }

    render() {
        return (
            <View>
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
                    <TextInput 
                      onChangeText={text => this.setState({ confirmPassword: text, })}
                      value={this.state.confirmPassword}            
                      placeholder={'Confirm Password'}
                      placeholderTextColor={'white'}
                      textContentType={'emailAddress'}
                      underlineColorAndroid={'white'}
                      selectionColor={'white'}
                      secureTextEntry
                      autoCorrent={false}
                      style={styles.signinInput}
                    />    
                    {
                    (this.state.error) ?
                        <View style={styles.errorView}>
                        <Text style={styles.errorText}>{this.state.error}</Text>  
                        </View> :
                        <View />
                    }  

                    <View style={styles.buttonView} >

                      <TouchableOpacity 
                      onPress={this.submitLoginForm.bind(this)} 
                      style={styles.signinButton}
                      >
                        <Text style={styles.signinButtonFont}>SIGN UP</Text>
                      </TouchableOpacity>

                      <TouchableOpacity 
                      onPress={() => { this.props.changeView('signin'); }} 
                      style={styles.signupButton}
                      >
                        <Text style={styles.signupButtonFont}>SIGN IN</Text>
                      </TouchableOpacity>

                    </View>

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
    buttonView: {
      height: 60,
      width: 300,
      flexDirection: 'row',
    },
    signinButton: {
      backgroundColor: 'white',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginTop: 20,
      borderColor: '#CB5A5E',
      borderWidth: 1,
      opacity: 0.9,
      marginRight: 4,
    },
    signinButtonFont: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#CB5A5E'
    },
    signupButton: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginTop: 20,
      borderColor: 'grey',
      borderWidth: 1,
      opacity: 0.9,
    },
    signupButtonFont: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    errorView: {
      backgroundColor: '#CF696D',
      padding: 5,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      marginBottom: -10,
    },
    errorText: {
      color: 'white',
      fontWeight: 'bold',
    }
};

export default SignupForm;
