import {
    SET_FIELD_SALDO,
    SALDO_SAVED_SUCCESS,
    SET_ALL_FIELDS_SALDO,
    RESET_FORM_SALDO,
  } from '../actions/NewSaldoAction';
  import SaldoReducer from './SaldoReducer';
  
  const INITIAL_STATE = {
    title: '',
    value: '',
    description: ''
  };
  
  export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SET_FIELD_SALDO:
        const clonedState = {...state};
        clonedState[action.field] = action.value;
        return clonedState;
  
      case SALDO_SAVED_SUCCESS:
        return INITIAL_STATE;
  
      case SET_ALL_FIELDS_SALDO:
        return action.saldo;
  
      case RESET_FORM_SALDO:
        return INITIAL_STATE;
  
      default:
        return state;
    }
  }
  