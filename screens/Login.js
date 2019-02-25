import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { TextStyle, Icon } from '../components';
import {
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import { auth } from '../constants/config';

export default class Login extends React.Component {
  state = { email: '', password: '' };
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'Login')
    })
  }

  login = () => {
    const { email, password } = this.state;
    auth.signInWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate('Home'))
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == 'auth/invalid-email'){
        Alert.alert("Advertencia", "Correo invalido", [{ text: "ok" }], { cancelable: true })
      }
      if(errorCode == 'auth/user-disabled'){
        Alert.alert("Advertencia", "Usuario bloqueado", [{ text: "ok" }], { cancelable: true })
      }
      if(errorCode == 'auth/user-not-found'){
        Alert.alert("Advertencia", "Usuario no encontrado", [{ text: "ok" }], { cancelable: true })
      }
      if(errorCode == 'auth/wrong-password'){
        Alert.alert("Advertencia", "Contraseña incorrecta", [{ text: "ok" }], { cancelable: true })
      }
    });
  }

  handleLogGoogle = () => {
    Alert.alert(
      'Google',
      '¿Desea iniciar sesion con Google?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => this.login() },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/robot-prod.png')}
          style={{ height: 100, width: 100 }} />
        <TextInput placeholder="Username" style={styles.input} onChangeText={email => this.setState({ email })} />
        <TextInput placeholder="Password" style={[styles.input, { marginBottom: 30 }]} secureTextEntry={true} onChangeText={password => this.setState({ password })} />
        <TouchableHighlight onPress={this.login} style={[styles.button, { backgroundColor: '#D83737' }]}>
          <View>
            <TextStyle style={{ color: '#fff', fontWeight: 'bold' }}>
              Log In
            </TextStyle>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleLogGoogle} style={[styles.button, { backgroundColor: '#9B9A9A' }]}>
          <View>
            <Icon
              name="logo-google"
              color="#fff"
              size={20}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, { backgroundColor: '#4267b2' }]}>
          <View>
            <Icon
              name="logo-facebook"
              color="#fff"
              size={20}
            />
          </View>
        </TouchableHighlight>
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

