import {
    SET_FIELD_CONTA,
    CONTA_SAVED_SUCCESS,
    SET_ALL_FIELDS_CONTA,
    RESET_FORM_CONTA,
  } from '../actions/NewContaAction';
  
  const INITIAL_STATE = {
    title: '',
    value: '',
    description: ''
  };
  
  export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SET_FIELD_CONTA:
        const clonedState = {...state};
        clonedState[action.field] = action.value;
        return clonedState;
  
      case CONTA_SAVED_SUCCESS:
        return INITIAL_STATE;
  
      case SET_ALL_FIELDS_CONTA:
        return action.conta;
  
      case RESET_FORM_CONTA:
        return INITIAL_STATE;
  
      default:
        return state;
    }
  }
  