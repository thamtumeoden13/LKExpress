
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './drawerNavigator'


export const AppStack = createStackNavigator(
    {
        Drawer: {
            screen: Drawer,
            navigationOptions: ({ navigation }) => ({
                // gesturesEnabled: false,
                gestureEnabled:false
            })
        }
    }
);