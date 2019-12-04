import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux';
import { setFieldSaldo, saveSaldo } from '../actions/NewSaldoAction';

class AddSaldo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { saldoForm, setFieldSaldo, saveSaldo, navigation } = this.props;
        return (
            <View style={style.addSaldo}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={style.title}>Novo Saldo</Text>
                    <Text style={style.texto}>Nome</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Nome"
                        value={saldoForm.title}
                        onChangeText={value => setFieldSaldo('title', value)}
                    />
                    <Text style={style.texto}>Valor</Text>
                    <TextInput style={style.input}
                        placeholder="Valor"
                        value={saldoForm.value}
                        onChangeText={value => setFieldSaldo('value', value)}
                    />
                    <Text style={style.texto}>Descricao</Text>
                    <TextInput style={style.input}
                        placeholder="Descricao"
                        value={saldoForm.description}
                        onChangeText={value => setFieldSaldo('description', value)}
                    />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={style.adsButton}
                        onPress={async () => {
                            try {
                                await saveSaldo(saldoForm);
                                navigation.goBack();
                            } catch (error) {
                                Alert.alert('Erro', error.message);
                            }
                        }}>
                        <Text style={style.textButton}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.adsButton} onPress={() => navigation.goBack()}>
                        <Text style={style.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    addSaldo: {
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 10
    },

    title: {
        fontSize: 70,
        color: 'rgba(255,255,255,0.90)',
    },

    input: {
        height: 50,
        width: '80%',
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,255,0.60)',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20
    },

    texto: {
        fontSize: 25,
        color: 'rgba(255,255,255,0.90)',
        marginTop: 20
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

const mapStateToProps = state => {
    return {
      saldoForm: state.saldoForm,
    };
  };
  
  const mapDispatchToProps = {
    setFieldSaldo,
    saveSaldo,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddSaldo);
  