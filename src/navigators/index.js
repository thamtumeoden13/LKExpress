import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import { AuthStack } from './AuthStack'
import AuthLoadingScreen from 'components/AuthLoadingScreen'
import { AppStack } from './AppStack'

export const CreateAppContainer = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);