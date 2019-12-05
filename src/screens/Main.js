import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeContas from './HomeContas'
import HomeSaldos from './HomeSaldos'
import Information from './Information'

const  Main = createAppContainer(
    createDrawerNavigator({
        'Contas': {screen: HomeContas},
        'Saldos': {screen: HomeSaldos},
        'Informacoes': {screen: Information}
    },
    {
        initialRouteName: 'Contas',
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