import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Header from '../components/Header'

const Home = ({navigation}) => {
    return (
        <View>
            <Header onPressItem={() => navigation.navigate('Perfil')} navigation={() => navigation.openDrawer()}/>
            <View style={style.home}>
                <Text style={style.titulo}>Bem vindo 
                    <Text style={{color:'rgba(0,138,239,1)'}}> Leonardo</Text>
                </Text>
                <Text style={style.texto}>Seu saldo Atual eh
                    <Text> 00,00 R$</Text>
                </Text>
                <TouchableOpacity style={style.addSaldoButton} onPress={() => navigation.navigate('AddSaldo')}>
                    <Text style={style.textButton}>Adicionar Saldo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.addContaButton} onPress={() => navigation.navigate('AddConta')}>
                    <Text style={style.textButton}>Adicionar Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    
    home: {
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 100
    },
    
    titulo: {
        fontSize: 60,
        color: 'white',
        marginBottom: 15,
        textAlign: 'center'
    },
    
    texto: {
        fontSize: 25,
        color: 'rgba(255,255,255,0.90)',
        marginTop: 20
    },
    
    addSaldoButton: {
        borderRadius: 5,
        height: 40,
        width: '70%',
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
    
    addContaButton: {
        borderRadius: 5,
        height: 40,
        width: '70%',
        backgroundColor: 'rgba(0,66,120,0.86)',
        justifyContent: 'center',
        marginTop: 10
    }
})


export default Home
