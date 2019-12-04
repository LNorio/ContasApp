import firebase from 'firebase'
import { Alert } from 'react-native';

export const USER_LOGIN = 'USER_LOGIN';

const userLogin = user => ({
    type: USER_LOGIN,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT'

const userLogout = () => ({
    type: USER_LOGOUT
})


export const processLogin = ({ email, senha }) => dispatch => {
    return firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(user => {
            const action = userLogin(user)
            dispatch(action)
            return user
        })
        .catch(error => {
            if (error.code == "auth/user-not-found") {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um novo usuário?",
                        [{
                            text: 'Não',
                            onPress: () => {
                                resolve();
                            }
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase.auth().createUserWithEmailAndPassword(email, senha)
                                    .then(resolve)
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false }
                    );
                })
            }
            return Promise.reject(error);
        })
}