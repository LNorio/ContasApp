import React from 'react'
import {View, 
        Text, 
        TextInput, 
        TouchableOpacity, 
        StyleSheet} from 'react-native'

const Perfil = ({navigation}) => {
    return (
        <View style={style.perfil}>
            <Text style={style.titulo}>Perfil</Text>
            <TextInput style={style.input} placeholder="Nome">Leonardo</TextInput>
            <TextInput style={style.input} placeholder="Email">email@gmail.com</TextInput>
            <TextInput style={style.input} secureTextEntry={true} placeholder="Senha"></TextInput> 
            <TouchableOpacity style={style.salvarButton} onPress={() => navigation.goBack()}>
                <Text style={style.textButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.voltarButton} onPress={() => navigation.goBack()}>
                <Text style={style.textButton}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.sairButton} onPress={() => navigation.navigate('Login')}>
                <Text style={style.textButton}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    perfil: {
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

    salvarButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 40
    },
    
    voltarButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 10
    },
    
    textButton: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    sairButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 10
    }
    
})


export default Perfil
