import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';



const Cadastrar = ({navigation}) => {
    return (
        <View style={style.cadastrar}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={style.titulo}>Cadastrar</Text>
                <Text style={style.texto}>Nome</Text>
                <TextInput style={style.input} placeholder="Nome"/>
                <Text style={style.texto}>Email</Text>
                <TextInput style={style.input} placeholder="Email"/>
                <Text style={style.texto}>Senha</Text>
                <TextInput style={style.input} secureTextEntry={true} placeholder="Senha"/>
            </View>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={style.cadButton} onPress={() => navigation.goBack()}>
                    <Text style={style.textButton}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.cadButton} onPress={() => navigation.goBack()}>
                    <Text style={style.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
    }
})
export default Cadastrar
