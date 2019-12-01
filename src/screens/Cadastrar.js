import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase'



export default class Cadastrar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            senha: "",
            message: ""
        }
    }

    processLogin = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email , this.state.senha)
        .then( user => {
            Alert.alert(
                "Usuário Cadastrado",
                "Usuário Cadastrado com sucesso",
                [{
                    text: "Okay",
                    onPress: () => {
                        this.props.navigation.goBack()
                    }
                }]
            )
        }).catch( error => {
            console.log('error', error)
            var err = this.messageCode(error.code)
            this.setState({
                message: err
            });
        })
    }

    messageCode = code => {
        return "Erro no cadastro"
    }

    onChangeHandler = (field, valor) => {
        this.setState({
            [field]: valor
        })
    }

    renderMessage = () => {
        if(!this.state.message){
            return null
        }
        else {
            return (
                <View style={style.erro}>
                    <Text style={{color: 'white', textAlign: 'center'}}>{this.state.message}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.cadastrar}>
                <FormRow>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={style.titulo}>Cadastrar</Text>
                        <Text style={style.texto}>Nome</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Nome"
                            onChangeText={valor => this.onChangeHandler('nome', valor)}
                            value={this.state.nome}
                        />
                        <Text style={style.texto}>Email</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Email"
                            onChangeText={valor => this.onChangeHandler('email', valor)}
                            value={this.state.email}
                            keyboardType="email-address"
                        />
                        <Text style={style.texto}>Senha</Text>
                        <TextInput
                            style={style.input}
                            secureTextEntry={true}
                            placeholder="Senha"
                            onChangeText={valor => this.onChangeHandler('senha', valor)}
                            value={this.state.senha}
                        />
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={style.cadButton} onPress={() => this.props.navigation.goBack()}>
                            <Text style={style.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.cadButton} onPress={() => this.props.navigation.goBack()}>
                            <Text style={style.textButton}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </FormRow>
                {this.renderMessage()}
            </View>
        )
    }
}

const style = StyleSheet.create({
    cadastrar: {
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
        color: 'grgba(255,255,255,0.90)',
        marginTop: 20
    },

    textButton: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    cadButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 40
    },

    
    erro: {
        position: 'absolute',
        height: 40,
        bottom: 0,
        backgroundColor: 'red',
        width: '100%'
    }
})
