import firebase from 'firebase'

export const USER_LOGIN = 'USER_LOGIN';

const userLogin = user => ({
    type: USER_LOGIN,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT'

const userLogout = () => ({
    type: USER_LOGOUT
})


export const processLogin = ({email, senha}) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email , senha)
        .then( user => {
            const action = userLogin(user)
            dispatch(action)
            return user
        })
}