import React from 'react'
import { View, StyleSheet } from 'react-native'

export default FormRow = (props) => {
    const { children } = props;

    return (
        <View style={style.form}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10
    }
})