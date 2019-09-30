import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Svg from 'react-native-svg'
import SvgPath from './SvgPath'

const Header = (props) => {
    const {onPressItem, navigation} = props
    return (
        <View style={style.header}>
                <TouchableOpacity onPress={navigation}>
                <Svg width="35" height="35" viewBox="0 0 489.7 489.7" fill="rgba(255,255,255,0.50)">
                    <SvgPath type="mainMenu"/>
                </Svg>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressItem}>
                    <Svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.50)">
                        <SvgPath type="config"/>
                    </Svg>
                </TouchableOpacity>  
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        height: 50,
        marginTop: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10
    }
})

export default Header
