import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Conta = ({navigation}) => {
    const { conta } = navigation.state.params;
    return (
        <View style={style.conta}>
            <Text style={style.title}>Conta</Text>
            <Text style={style.texto}>Nome:</Text>
            <Text style={style.texto}>{conta.title}</Text>
            <Text style={style.texto}>Valor:</Text>
            <Text style={style.texto}>R$ {conta.value}</Text>
            <Text style={style.texto}>Descricao:</Text>
            <Text style={style.texto}>{conta.description}</Text>
            <TouchableOpacity style={style.voltarButton} onPress={() => navigation.goBack()}>
                <Text style={style.textButton}>Voltar</Text>
            </TouchableOpacity>
            {console.log(conta)}
            
        </View>
    )
}

const style = StyleSheet.create({
    conta: {
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20
    },

    title: {
        fontSize: 70,
        color: 'rgba(255,255,255,0.90)',
        textAlign: 'center',
        paddingRight: 20
    },

    texto: {
        fontSize: 25,
        color: 'rgba(255,255,255,0.90)',
        marginTop: 20
    },

    voltarButton: {
        borderRadius: 5,
        height: 40,
        width: '30%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        marginTop: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Conta
