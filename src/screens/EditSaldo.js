import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import EditSaldoContain from '../components/EditSaldoContain'

const EditSaldo = ({navigation}) => {
    return (
        <View style={style.editSaldo}>
            <EditSaldoContain/>
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
    editSaldo: {
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 10
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

export default EditSaldo