import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeContas from './HomeContas'
import Home from './Home'
import HomeSaldos from './HomeSaldos'
import Information from './Information'

const  Main = createAppContainer(
    createDrawerNavigator({
        'Home': {screen: Home},
        'Contas': {screen: HomeContas},
        'Saldos': {screen: HomeSaldos},
        'Informacoes': {screen: Information}
    },
    {
        initialRouteName: 'Informacoes',
        style:{
            backgroundColor: 'rgba(0,0,0,0.80)'
        },
        contentOptions: {
            activeTintColor: 'rgba(0,138,239,1)',
            inactiveTintColor: 'white',
            labelStyle: {
                fontSize: 20,
            }
        }
    })
)

export default Main