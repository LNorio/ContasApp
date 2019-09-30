import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer}from 'react-navigation'
import Login from './src/screens/Login'
import Cadastrar from './src/screens/Cadastrar'
import Main from './src/screens/Main'
import Perfil from './src/screens/Perfil'
import AddConta from './src/screens/AddConta'
import AddSaldo from './src/screens/AddSaldo'
import EditConta from './src/screens/EditConta'
import EditSaldo from './src/screens/EditSaldo'
import Conta from './src/screens/Conta'
import Saldo from './src/screens/Saldo' 

const StackNavigator = createStackNavigator({
    'Login': { screen: Login },
    'Cadastrar': {screen: Cadastrar},
    'Main': {screen: Main},
    'AddConta': {screen: AddConta},
    'AddSaldo': {screen: AddSaldo},
    'Perfil': {screen: Perfil},
    'EditConta': {screen: EditConta},
    'EditSaldo': {screen: EditSaldo},
    'Conta': {screen: Conta},
    'Saldo': {screen: Saldo}
    
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
})


const AppContainer = createAppContainer(StackNavigator)
 
export default AppContainer;