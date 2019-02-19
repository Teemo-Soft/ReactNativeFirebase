import React from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet
  } from 'react-native';
import { TextStyle } from '../components';
import { auth } from '../constants/config';

export default class Register extends React.Component {
    state = { email: '', password: ''}

    handleSignUp = () => {
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            console.log(error.message);
        })
        console.log("Debug", this.state.email)
      }

    componentWillMount() {
        this.props.navigation.openDrawer()
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/robot-prod.png')}
                    style={{ height: 100, width: 100 }} />
                <TextInput placeholder="Email" style={styles.input} onChangeText={email => this.setState({email})} />
                <TextInput placeholder="Password" style={[styles.input, { marginBottom: 30 }]} secureTextEntry={true} onChangeText={password => this.setState({password})}/>
                <TouchableHighlight onPress={this.handleSignUp()} style={[styles.button, { backgroundColor: '#D83737' }]}>
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
  
  


