import React from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
import Header from '../components/Header'
import LongText from '../components/LongText'

const Information = ({navigation}) => {
    return (
        <View style={style.information}>
            <Header onPressItem={() => navigation.navigate('Perfil')} navigation={() => navigation.openDrawer()}/>
            <Text style={style.title}>Informacoes</Text>
            <ScrollView>
                <LongText label={`O aplicativo foi feito para ajudar no controle de contas.
    Ao utilzar do aplicativo o usuario deve estar logado com uma conta valida, ele pode cadastrar, alterar, visualizar e deletar contas ou saldos nas abas respectivas no menu lateral.
    Na aba de conta ou de saldo  usuario pode realizar um cadastro ao clicar no icone de mais localizado no canto inferior direito da tela.
    Se clicar em cima do nome de uma conta ou saldo eh possivel visualizar os detalhes do item selecionado.
    Pode-se clicar nos icones de lapis e lixeira para respectivamente realizar a funcao de editar e deletar o item.`}/>
                <LongText label={"Esse projeto foi projetado e implementado pelo aluno Leonardo Norio Yamasaki Cruz na disciplina de Programacao de dispositivos moveis, com os direitos autorais sendo do proprio aluno que realizou a atividade, copia ou plagio sera considerado como crime."} />
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    information: {
        backgroundColor: "rgba(0,0,0,0.76)",
        height: '100%'
    },

    title: {
        fontSize: 50,
        color: 'rgba(255,255,255,0.90)',
        textAlign: 'center',
        paddingRight: 20,
        paddingVertical: 20
    }
})


export default Information
