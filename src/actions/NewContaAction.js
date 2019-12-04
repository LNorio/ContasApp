import firebase from 'firebase';

export const SET_FIELD_CONTA = 'SET_FIELD_CONTA';

export const setFieldConta = (field, value) => {
  return {
    type: SET_FIELD_CONTA,
    field,
    value,
  };
};

export const CONTA_SAVED_SUCCESS = 'CONTA_SAVED_SUCCESS';

export const contaSavedSuccess = () => {
  return {
    type: CONTA_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS_CONTA = 'SET_ALL_FIELDS_CONTA';

export const setAllFieldsConta = conta => ({
  type: SET_ALL_FIELDS_CONTA,
  conta: conta,
});

export const RESET_FORM_CONTA = 'RESET_FORM_CONTA';

export const resetFormConta = () => ({
  type: RESET_FORM_CONTA,
});

export const saveConta = conta => {
  const {currentUser} = firebase.auth();

  return async dispatch => {
    if (conta.id) {
      await firebase.database
        .ref(`/users/${currentUser.uid}/contas/${conta.id}`)
        .set(conta);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/contas`)
        .push( {title: conta.title, value: conta.value, description: conta.description} );
    }
    dispatch(contaSavedSuccess());
  };
};
