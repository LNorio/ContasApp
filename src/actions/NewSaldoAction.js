import firebase from 'firebase';

export const SET_FIELD_SALDO = 'SET_FIELD_SALDO';

export const setFieldSaldo = (field, value) => {
  return {
    type: SET_FIELD_SALDO,
    field,
    value,
  };
};

export const SALDO_SAVED_SUCCESS = 'SALDO_SAVED_SUCCESS';

export const saldoSavedSuccess = () => {
  return {
    type: SALDO_SAVED_SUCCESS,
  };
};

export const SET_ALL_FIELDS_SALDO = 'SET_ALL_FIELDS_SALDO';

export const setAllFieldsSaldo = saldo => ({
  type: SET_ALL_FIELDS_SALDO,
  saldo: saldo
});

export const RESET_FORM_SALDO = 'RESET_FORM_SALDO';

export const resetFormSaldo = () => ({
  type: RESET_FORM_SALDO
});

export const saveSaldo = saldo => {
  const {currentUser} = firebase.auth();

  return async dispatch => {
    if (saldo.id) {
      await firebase.database()
        .ref(`/users/${currentUser.uid}/saldos/${saldo.id}`)
        .set(saldo);
    } else {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/saldos`)
        .push( {title: saldo.title, value: saldo.value, description: saldo.description} );
    }
    dispatch(saldoSavedSuccess());
  };
};
