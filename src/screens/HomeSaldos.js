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
import SaldoBox from '../components/SaldoBox.js'
import SvgPath from '../components/SvgPath'
import { connect } from 'react-redux';
import { watchSaldos } from '../actions';

class HomeSaldos extends Component {

    componentDidMount() {
        this.props.watchSaldos()
    }

    renderList() {
        if (this.props.saldos === null) {
            return (
                <View>
                    <Text>Nao tem nada</Text>
                </View>
            );
        } else {
            return (
                <FlatList
                    data={[...this.props.saldos]}
                    syle={{ width: '100%', height: 80 }}
                    renderItem={({ item }) => {
                        return (
                            <SaldoBox edit={() => this.props.navigation.navigate('EditSaldo')} show={() => this.props.navigation.navigate('Saldo', { saldo: item })} editDell={true} saldo={item} />
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    }

    render() {
        return (
            <View>
                <Header onPressItem={() => this.props.navigation.navigate('Perfil')} navigation={() => this.props.navigation.openDrawer()} />
                <ScrollView
                    style={style.homeSaldos}
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    <Text style={style.title}>Saldos</Text>
                    {this.renderList()}
                </ScrollView>
                <TouchableOpacity style={style.addSaldoIcon} onPress={() => this.props.navigation.navigate('AddSaldo')}>
                    <Svg width="60" height="60" viewBox="0 0 52 52" fill="rgba(255,255,255,0.5)">
                        <SvgPath type="add" />
                    </Svg>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    homeSaldos: {
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 20
    },

    title: {
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

const mapStateToProps = state => {
    const { listaSaldos } = state;

    if (listaSaldos === null) {
        return { saldos: listaSaldos };
    }

    const keys = Object.keys(listaSaldos);
    const listaSaldosWithId = keys.map(key => {
        return { ...listaSaldos[key], id: key };
    });
    return { saldos: listaSaldosWithId };
};

export default connect(
    mapStateToProps,
    { watchSaldos },
)(HomeSaldos);

