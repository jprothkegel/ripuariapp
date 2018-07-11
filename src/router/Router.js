import { createSwitchNavigator, createStackNavigator} from 'react-navigation';
import BeerScreen from '../views/BeerScreen';
import LoginForm from '../views/LoginForm';
import SignOut from '../views/LogOut';
import AuthLoadingScreen from '../views/AuthLoadingScreen';

const AppStack = createStackNavigator({
    Home: BeerScreen,
    SignOut: SignOut
})

const AuthStack = createStackNavigator({
    SignIn: LoginForm
})

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
},
{
    initialRouteName: 'AuthLoading'
})