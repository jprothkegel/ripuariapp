import { StackNavigator, TabNavigator, SwitchNavigator } from 'react-navigation';
import BeerScreen from '../views/BeerScreen';
import LoginForm from '../views/LoginForm';

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
            SignedIn: {
                screen: BeerScreen,
            },
            SignedOut: {
                screen: LoginForm
            }
        },
        {
            initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
        }
    )
}