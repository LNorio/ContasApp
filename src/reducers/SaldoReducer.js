import {SET_SALDOS} from '../actions/SaldoAction';

export default function(state = null, action) {
  switch (action.type) {
    case SET_SALDOS:
        console.log(action.saldos);
      return action.saldos;

    default:
      return state;
  }
}
