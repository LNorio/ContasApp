import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={style.login}>
            <Text style={style.titulo}>Contas
                <Text style={{ color: 'white' }}>App</Text>
            </Text>
            <Text style={style.texto}>Email:</Text>
            <TextInput style={style.input} placeholder="Email"/>
            <Text style={style.texto}>Senha:</Text>
            <TextInput style={style.input} secureTextEntry={true} placeholder="Senha" />
            <TouchableOpacity style={style.conectarButton} onPress={() => navigation.navigate('Main')}>
                <Text style={style.textButton}>Conectar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.cadastrarButton} onPress={() => navigation.navigate('Cadastrar')}>
                <Text style={style.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>

    )
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
    }
    
})

export default Login    