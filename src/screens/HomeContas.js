import React, { Component } from 'react'
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import Svg from 'react-native-svg'
import Header from '../components/Header'
import ContasBox from '../components/ContasBox.js'
import SvgPath from '../components/SvgPath'
import { connect } from 'react-redux'
import { watchContas } from '../actions/ContaAction';

class HomeContas extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.watchContas();
    }

    renderList() {
        if (this.props.contas === null) {
            return (
                <View >
                    <Text>Nao tem nada</Text>
                </View>
            );
        } else {
            return (
                <FlatList
                    data={[...this.props.contas]}
                    syle={{ width: '100%', height: 80 }}
                    renderItem={({ item }) => {
                        return (
                            <ContasBox edit={() => this.props.navigation.navigate('EditConta')} show={() => this.props.navigation.navigate('Conta', { conta: item })} editDell={true} conta={item} />
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            )
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Header onPressItem={() => navigation.navigate('Perfil')} navigation={() => navigation.openDrawer()} />
                <ScrollView
                    style={style.homeContas}
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    <Text style={style.title}>Contas</Text>
                    {this.renderList()}
                </ScrollView>
                <TouchableOpacity style={style.addContaIcon} onPress={() => navigation.navigate('AddConta')}>
                    <Svg width="60" height="60" viewBox="0 0 52 52" fill="rgba(255,255,255,0.5)">
                        <SvgPath type="add" />
                    </Svg>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    homeContas: {
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 20
    },

    title: {
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

const mapStateToProps = state => {
    const { listaContas } = state;

    if (listaContas === null) {
        return { contas: listaContas };
    }

    const keys = Object.keys(listaContas);
    const listaContasWithId = keys.map(key => {
        return { ...listaContas[key], id: key };
    });
    return { contas: listaContasWithId };
};

export default connect(
    mapStateToProps,
    { watchContas }
)(HomeContas);

