import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Svg from 'react-native-svg'
import Header from '../components/Header'
import SaldoBox from '../components/SaldoBox.js'
import SvgPath from '../components/SvgPath'

const HomeSaldos = ({navigation}) => {
    return (
        <View>
            <Header onPressItem={() => navigation.navigate('Perfil')} navigation={() => navigation.openDrawer()}/>
            <View style={style.homeSaldos}>
                <Text style={style.title}>Saldos</Text>               
                <SaldoBox edit={()=> navigation.navigate('EditSaldo')} show={() => navigation.navigate('Saldo')}/>
                <SaldoBox edit={()=> navigation.navigate('EditSaldo')} show={() => navigation.navigate('Saldo')}/>
            </View>
            <TouchableOpacity style={style.addSaldoIcon} onPress={() => navigation.navigate('AddSaldo')}>
                    <Svg width="60" height="60" viewBox="0 0 52 52" fill="rgba(255,255,255,0.5)">
                        <SvgPath type="add"/>
                    </Svg>
            </TouchableOpacity>
            
        </View>
    )
}

const style = StyleSheet.create({
    homeSaldos: {
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 20
    },

    title:{
        fontSize: 60,
        color: 'rgba(255,255,255,0.90)',
        marginBottom: 20
    },
    
    addSaldoIcon: {
        position: 'absolute',
        bottom: 50,
        marginBottom: 20,
        alignSelf: 'flex-end',
        paddingRight: 20
    }
})

export default HomeSaldos
