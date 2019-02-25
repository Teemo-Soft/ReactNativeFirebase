import React from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
    Alert
} from 'react-native';
import { TextStyle } from '../components';
import { auth } from '../constants/config';

export default class Register extends React.Component {
    state = { email: '', password: '' };

    handleSignUp = () => {
        const { email, password } = this.state;
        console.log(email)
        auth.createUserWithEmailAndPassword(email, password)
        .then(()=> Alert.alert("Info", "Registrado exitosamente", [{ text: "ok" }], { cancelable: true }))
            .catch(function (error) {
                var errorCode = error.code;
                console.log(errorCode);
                if (errorCode == 'auth/weak-password') {
                    Alert.alert("Advertencia", "Contraseña debe tener 6 caracteres minimo", [{ text: "ok" }], { cancelable: true })
                }

                if(errorCode == 'auth/email-already-in-use'){
                    Alert.alert("Advertencia", "Este Email ya esta en uso", [{ text: "ok" }], { cancelable: true })
                }

                if(errorCode == 'auth/operation-not-allowed'){
                    Alert.alert("Advertencia", "Usuario no habilitado", [{ text: "ok" }], { cancelable: true })
                }

                if(errorCode == 'auth/invalid-email'){
                    Alert.alert("Advertencia", "Correo invalido", [{ text: "ok" }], { cancelable: true })
                }
            });
        console.log("Debug", email);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/robot-prod.png')}
                    style={{ height: 100, width: 100 }} />
                <TextInput placeholder="Email" style={styles.input} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder="Password" style={[styles.input, { marginBottom: 30 }]} secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                <TouchableHighlight onPress={this.handleSignUp} style={[styles.button, { backgroundColor: '#D83737' }]}>
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




