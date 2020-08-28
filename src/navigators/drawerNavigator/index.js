import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { Icon } from 'react-native-elements';
import Tabs from '../bottomTabNavigator'
import ContentComponent from '../customDrawer/ContentComponent'

const Drawer = createDrawerNavigator(
    {
        Tabs: {
            screen: Tabs,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: false,
            })
        },
    },
    {
        initialRouteName: 'Tabs',
        contentComponent: props => {
            return (
                <ContentComponent {...props} />
            )
        },
        // contentComponent: (props) => (
        //     <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
        //         <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        //             {/* <DrawerItems {...props} /> */}
        //             <CustomDrawerContentComponent {...props} />
        //         </SafeAreaView>
        //     </ScrollView>
        // ),
        contentOptions: {
            activeTintColor: '#e91e63',
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                opacity: 0.7
            }
        },
        // drawerBackgroundColor: '#e91e60',
        // useNativeAnimations: true
    }
);

Drawer.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,

};

// const CustomDrawerContentComponent = props => (
//     <ScrollView>
//         <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//             <DrawerItems {...props} />
//         </SafeAreaView>
//     </ScrollView>
// );
// const CustomDrawerContentComponentAnimated = props => {
//     const translateX = props.drawerOpenProgress.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-100, 0],
//     });

//     return <Animated.View style={{ transform: [{ translateX }] }}>{/* ... drawer contents */}</Animated.View>;
// };


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Drawer