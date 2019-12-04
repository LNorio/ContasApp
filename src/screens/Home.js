import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import SaldoBox from '../components/SaldoBox'
import ContasBox from '../components/ContasBox'
import Header from '../components/Header'
import user from '../../index.json'

const Home = ({ navigation }) => {
    const { conta, saldo } = user[0].user;
    return (
        <View>
            <Header onPressItem={() => navigation.navigate('Perfil')} navigation={() => navigation.openDrawer()} />
            <View style={style.home}>
                <Text style={style.titulo}>Bem vindo,</Text>
                <Text style={style.texto}>Seu saldo Atual eh
                    <Text> R$ 00,00</Text>
                </Text>
                <Text style={style.textoCS}>Ultimas Contas</Text>
                <FlatList
                    data={conta}
                    syle={{ width: '100%', height: 80 }}
                    renderItem={({ item }) => {
                        return (
                            <ContasBox show={() => navigation.navigate('Conta', { conta: item })} conta={item} />
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
                <Text style={style.textoCS}>Ultimos Saldos</Text>
                <FlatList
                    data={saldo}
                    syle={{ width: '100%', height: 80 }}
                    renderItem={({ item }) => {
                        return (
                            <SaldoBox show={() => navigation.navigate('Saldo', {saldo: item})} saldo={item} />
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    home: {
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
    },

    titulo: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },

    texto: {
        fontSize: 25,
        color: 'rgba(255,255,255,0.90)'
    },

    textoCS: {
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
