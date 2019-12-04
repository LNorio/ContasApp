import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {connect} from 'react-redux';
import {setFieldConta, saveConta} from '../actions/NewContaAction';
//import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class AddConta extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {contaForm, setFieldConta, saveConta, navigation} = this.props;
        return (
            <View style={style.addConta}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={style.title}>Nova Conta</Text>
                    <Text style={style.texto}>Nome</Text>
                    <TextInput 
                    style={style.input} 
                    placeholder="Nome" 
                    value={contaForm.title}
                    onChangeText={value => setFieldConta('title', value)}
                    />
                    <Text style={style.texto}>Valor</Text>
                    <TextInput style={style.input} 
                    placeholder="Valor" 
                    value={contaForm.value}
                    onChangeText={value => setFieldConta('value', value)}
                    />
                    <Text style={style.texto}>Descricao</Text>
                    <TextInput style={style.input} 
                    placeholder="Descricao" 
                    value={contaForm.description}
                    onChangeText={value => setFieldConta('description', value)}
                    />
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={style.adcButton} 
                        onPress={async () => {
                            try {
                              await saveConta(contaForm);
                              navigation.goBack();
                            } catch (error) {
                              Alert.alert('Erro', error.message);
                            }
                          }}>
                        <Text style={style.textButton}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.adcButton} onPress={() => navigation.goBack()}>
                        <Text style={style.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    addConta: {
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%',
        paddingTop: 10
    },

    title: {
        fontSize: 70,
        color: 'rgba(255,255,255,0.90)'
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

    adcButton: {
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
      contaForm: state.contaForm,
    };
  };
  
  const mapDispatchToProps = {
    setFieldConta,
    saveConta,
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddConta);