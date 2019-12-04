import { combineReducers } from 'redux'
import UserReducer from './UserReducer.js'
import ContaReducer from './ContaReducer'
import NewContaForm from './NewContaForm'
import NewSaldoForm from './NewSaldoForm'
import SaldoReducer from './SaldoReducer'

export default combineReducers({
    user: UserReducer,
    contaForm: NewContaForm,
    saldoForm: NewSaldoForm,
    listaContas: ContaReducer,
    listaSaldos: SaldoReducer
})