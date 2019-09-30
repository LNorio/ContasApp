import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const AddSaldo = ({navigation}) => {
    return (
        <View style={style.addSaldo}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={style.title}>Novo Saldo</Text>
                <Text style={style.texto}>Nome</Text>
                <TextInput style={style.input} placeholder="Nome"/>
                <Text style={style.texto}>Data</Text>
                <TextInput style={style.input} placeholder="Data"/>
                <Text style={style.texto}>Valor</Text>
                <TextInput style={style.input} placeholder="Valor"/>
                <Text style={style.texto}>Descricao</Text>
                <TextInput style={style.input} placeholder="Descricao"/>
            </View>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={style.adsButton} onPress={() => navigation.goBack()}>
                    <Text style={style.textButton}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.adsButton} onPress={() => navigation.goBack()}>
                    <Text style={style.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    addSaldo: {
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 10
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
    },
    
    adsButton: {
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
    }
    
})

export default AddSaldo