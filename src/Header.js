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
    },
    headerView: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9f3604',
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
