import React, { Component } from 'react';
import { Text, View } from 'react-native'; 

class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.headerView}>
                    <Text style={styles.text}>{this.props.label}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 22,
        color: 'white',
        position: 'relative',
        top: 10,
    },
    headerView: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222E35',
        elevation: 5,
        position: 'relative',
        marginBottom: 0,
    },
    testView: {
        backgroundColor: '#5f93c2',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',        
        alignItems: 'center'
    }
};

export default Header; 
