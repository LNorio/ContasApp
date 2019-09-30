import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Svg from 'react-native-svg'
import Header from '../components/Header'
import ContasBox from '../components/ContasBox.js'
import SvgPath from '../components/SvgPath'

const HomeContas = ({navigation}) => {
    return (
        <View>
            <Header onPressItem={() => navigation.navigate('Perfil')} navigation={() => navigation.openDrawer()}/>
            <View style={style.homeContas}>  
                <Text style={style.title}>Contas</Text>             
                <ContasBox edit={() =>navigation.navigate('EditConta')} show={() => navigation.navigate('Conta')}/>
                <ContasBox edit={() =>navigation.navigate('EditConta')} show={() => navigation.navigate('Conta')}/>
            </View>
            <TouchableOpacity style={style.addContaIcon} onPress={() => navigation.navigate('AddConta')}>
                <Svg width="60" height="60" viewBox="0 0 52 52" fill="rgba(255,255,255,0.5)">
                    <SvgPath type="add"/>
                </Svg>
            </TouchableOpacity>
            
        </View>
    )
}

const style = StyleSheet.create({
    homeContas: {
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

    addContaIcon: {
        position: 'absolute',
        bottom: 50,
        marginBottom: 20,
        alignSelf: 'flex-end',
        paddingRight: 20
    }
})

export default HomeContas
