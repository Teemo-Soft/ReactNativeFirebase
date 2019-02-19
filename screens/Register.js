import React from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet
  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextStyle, Icon } from '../components';
import { Colors, Icons } from '../constants';
import { Container } from "native-base";

export default class Register extends React.Component {
    componentWillMount() {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/robot-prod.png')}
                    style={{ height: 100, width: 100 }} />
                <TextInput placeholder="Username" style={styles.input} />
                <TextInput placeholder="Password" style={[styles.input, { marginBottom: 30 }]} secureTextEntry={true} />
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')} style={[styles.button, { backgroundColor: '#D83737' }]}>
                    <View>
                        <TextStyle style={{ color: '#fff', fontWeight: 'bold' }}>
                            Sign Up!
                </TextStyle>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 150,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 70
    },
    input: {
      height: 40,
      padding: 8,
      lineHeight: 23,
      borderBottomWidth: 2,
      borderColor: '#ccc',
      fontSize: 18,
      margin: 8,
      width: 200,
      marginTop: 30
    },
    button: {
      padding: 10,
      marginTop: 12,
      borderRadius: 15,
      width: 200,
      alignItems: 'center'
    }
  });
  
  


