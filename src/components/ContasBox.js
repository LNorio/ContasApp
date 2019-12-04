import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Svg, { Polygon, Rect } from 'react-native-svg'
import SvgPath from './SvgPath'
import {connect} from 'react-redux';
import {deleteConta} from '../actions/ContaAction';
class ContasBox extends Component {
    editar = (edit, editDell) => {
        if (editDell == true) {
            return <View style={style.editDellBox}>
                <TouchableOpacity onPress={edit}>
                    <Svg width="40" height="40" viewBox="0 0 540.329 540.329">
                        <Polygon points={`0.002,540.329 58.797,532.66 7.664,481.528`} />
                        <Polygon points={`16.685,412.341 10.657,458.56 81.765,529.668 127.983,523.64 442.637,208.992 331.338,97.688`} />
                        <SvgPath type="edit" />
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    this.props.deleteConta(conta)
                }>
                    <Svg width="40" height="40" viewBox="0 0 512 512">
                        <Polygon points={`353.574,176.526 313.496,175.056 304.807,412.34 344.885,413.804`} />
                        <Rect x={`235.948`} y={`175.791`} width={"40.104"} height={"237.28"} />
                        <Polygon points={`207.186,412.334 198.497,175.049 158.419,176.52 167.109,413.804`} />
                        <SvgPath type="delete" />
                    </Svg>
                </TouchableOpacity>
            </View>
        }
    }
    render() {
        const { edit, show, editDell, conta } = this.props;
        return (
            <View style={style.contasBox} >
                <TouchableOpacity style={style.containContasBox} onPress={show}>
                    <View>
                        <Text style={style.texto}>Nome: {conta.title}</Text>
                        <Text style={style.texto}>Valor: R$ {conta.value}</Text>
                    </View>
                </TouchableOpacity>
                {this.editar(edit, editDell)}
            </View>
        )
    }
}

const style = StyleSheet.create({
    contasBox: {
        flexDirection: "row",
        backgroundColor: "rgba(255,255,255,0.9)",
        width: 400,
        height: 80,
        marginBottom: 10
    },
    containContasBox: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 3
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    editDellBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
        flex: 1
    }
})

export default ContasBox
