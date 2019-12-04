import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_SALDOS = 'SET_SALDOS';

const setSaldos = saldos => ({
  type: SET_SALDOS,
  saldos: saldos
});

export const watchSaldos = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/saldos`)
      .on('value', snapshot => {
        const saldos = snapshot.val();
        const action = setSaldos(saldos);
        dispatch(action);
      });
  };
};

export const deleteSaldo = saldo => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir o saldo ${saldo.title}?`,
        [
          {
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
            style: 'cancel', //IOS
          },
          {
            text: 'Sim',
            onPress: async () => {
              const {currentUser} = firebase.auth();

              try {
                await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/saldos/${saldo.id}`)
                  .remove();

                resolve(true);
              } catch (e) {
                reject(e);
              }
            },
          },
        ],
        {cancelable: false},
      );
    });
  };
};
