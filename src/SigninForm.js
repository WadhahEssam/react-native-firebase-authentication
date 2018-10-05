import React, { Component } from 'react';
import { 
  View,
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  TextInput, 
  Image, 
  ActivityIndicator 
} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const background = require('../img/background.jpg');
const userIcon = require('../img/user.png');

class SigninForm extends Component {

    state = { 
        email: '',
        password: '',
        error: null,
        isFetching: false,
    }

    submitLoginForm() {
        const { email, password } = this.state;

        this.setState({ isFetching: true, });
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
          this.setState({ error: null, isFetching: false, });
          console.log(response);
        })
        .catch(error => {
          this.setState({ error: error.toString(), isFetching: false, });
        });
    }

    render() {
        return (
            <View>
              <ImageBackground source={background} style={styles.ImageBackground}>
                <View style={styles.signinView}>
                    {(this.props.freez) ? 
                      <ActivityIndicator 
                        color={'#B54654'} 
                        size={40} 
                        style={styles.freezSpinner} 
                      /> : 
                      <View /> 
                    } 
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
                        { 
                          (this.state.isFetching) ? 
                            <ActivityIndicator color={'#CB5A5E'} /> : 
                            <Text style={styles.signinButtonFont}>SIGN IN</Text>
                        }
                      </TouchableOpacity>

                      <TouchableOpacity 
                        onPress={() => { this.props.changeView('signup'); }} 
                        style={styles.signupButton}
                      >
                        <Text style={styles.signupButtonFont}>SIGN UP</Text>
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
    }, 
    freezSpinner: {
      position: 'absolute',
      top: 20,

    }
};

export default SigninForm;
