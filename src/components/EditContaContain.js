import React from 'react'
import {View,
        Text,
        TextInput,
        StyleSheet} from 'react-native'

const EditContaContain = () => {
    return (
        <View style={style.editConta}>
            <Text style={style.title}>Editar Conta</Text>
            <Text style={style.texto}>Nome</Text>
            <TextInput style={style.input} placeholder="Nome">Pagar Aluguel</TextInput>
            <Text style={style.texto}>Valor</Text>
            <TextInput style={style.input} placeholder="Valor">400,00</TextInput>
            <Text style={style.texto}>Descricao</Text>
            <TextInput style={style.input} placeholder="Descricao">Aluguel de outubro</TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    editConta: {
        width: '100%', 
        alignItems: 'center'
    },

    title: {
        fontSize: 70,
        color: 'rgba(255,255,255,0.90)',
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
    }
})

export default EditContaContain
