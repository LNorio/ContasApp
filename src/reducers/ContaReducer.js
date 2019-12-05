import {SET_CONTAS} from '../actions/ContaAction';

export default function(state = null, action) {
  switch (action.type) {
    case SET_CONTAS:
      console.log(action.contas);
      return action.contas;

    default:
      return state;
  }
}
