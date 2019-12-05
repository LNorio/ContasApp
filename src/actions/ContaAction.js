import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_CONTAS = 'SET_CONTAS';

const setContas = contas => ({
  type: SET_CONTAS,
  contas: contas
});

export const watchContas = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/contas`)
      .on('value', snapshot => {
        const contas = snapshot.val();
        const action = setContas(contas);
        dispatch(action);
      });
  };
};

export const deleteConta = conta => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir o conta ${conta.title}?`,
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
                  .ref(`/users/${currentUser.uid}/contas/${conta.id}`)
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
