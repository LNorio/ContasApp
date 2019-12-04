import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import firebase from 'firebase';
import FormRow from '../components/FormRow';
import { processLogin } from '../actions'
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
            message: ""
        }
    }

    onChangeHandler = (field, valor) => {
        this.setState({
            [field]: valor
        })
    }

    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyCkBEJ2PerY8bQrh8T3nkn3OCtEm9ZplpU",
            authDomain: "contasapp-1fb4f.firebaseapp.com",
            databaseURL: "https://contasapp-1fb4f.firebaseio.com",
            projectId: "contasapp-1fb4f",
            storageBucket: "contasapp-1fb4f.appspot.com",
            messagingSenderId: "984325133145",
            appId: "1:984325133145:web:af133b3327ff273d30f248",
            measurementId: "G-9BDRSJD3LS"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    processLogin = () => {
        this.props.processLogin({ email: this.state.email, senha: this.state.senha })
            .then(user => {
                if (user) {
                    this.props.navigation.replace('Main')
                } else {
                    this.setState({
                        message: ''
                    })
                }
            })
            .catch(err => {
                this.setState({
                    message: this.messageCode(err.code)
                })
            })
    }

    messageCode = code => {
        switch (code) {
            case 'auth/user-not-found':
                return "Email não encontrado"
            case 'auth/wrong-password':
                return "Senha inválida"
            default:
                return "Erro no login"
        }
    }

    renderMessage = () => {
        if (!this.state.message) {
            return null
        }
        else {
            return (
                <View style={style.erro}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>{this.state.message}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.login}>
                <Text style={style.titulo}>Contas
                    <Text style={{ color: 'white' }}>App</Text>
                </Text>
                <FormRow>
                    <Text style={style.texto}>Email:</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Email"
                        onChangeText={valor => this.onChangeHandler('email', valor)}
                        value={this.state.email}
                        keyboardType="email-address"
                    />
                    <Text style={style.texto}>Senha:</Text>
                    <TextInput
                        style={style.input}
                        secureTextEntry={true}
                        placeholder="Senha"
                        onChangeText={valor => this.onChangeHandler('senha', valor)}
                        value={this.state.senha}
                    />
                </FormRow>
                <TouchableOpacity style={style.conectarButton} onPress={() => this.processLogin()}>
                    <Text style={style.textButton}>Conectar</Text>
                </TouchableOpacity>
                {this.renderMessage()}
            </View>
        )
    }
}

const style = StyleSheet.create({
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 10
    },

    titulo: {
        fontSize: 70,
        color: 'rgba(0,138,239,1)',
        marginBottom: 15
    },

    input: {
        height: 50,
        width: '80%',
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,255,0.60)',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20
    },

    texto: {
        fontSize: 25,
        color: 'rgba(255,255,255,0.90)',
        marginTop: 20
    },

    conectarButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 35
    },

    textButton: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    cadastrarButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 10
    },

    erro: {
        position: 'absolute',
        height: 40,
        bottom: 0,
        backgroundColor: 'red',
        width: '100%'
    }

})

export default connect(null, { processLogin })(Login)