import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer}from 'react-navigation'
import Login from './screens/Login'
import Main from './screens/Main'
import Perfil from './screens/Perfil'
import AddConta from './screens/AddConta'
import AddSaldo from './screens/AddSaldo'
import EditConta from './screens/EditConta'
import EditSaldo from './screens/EditSaldo'
import Conta from './screens/Conta'
import Saldo from './screens/Saldo' 

console.disableYellowBox = true;

const StackNavigator = createStackNavigator({
    'Login': { screen: Login },
    'Main': {screen: Main},
    'AddConta': {screen: AddConta},
    'AddSaldo': {screen: AddSaldo},
    'Perfil': {screen: Perfil},
    'EditConta': {screen: EditConta},
    'EditSaldo': {screen: EditSaldo},
    'Conta': { screen: Conta },
    'Saldo': {screen: Saldo}
    
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
})


const AppContainer = createAppContainer(StackNavigator);
 
export default AppContainer;