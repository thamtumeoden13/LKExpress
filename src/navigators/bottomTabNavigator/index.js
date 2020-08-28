import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import {
    HomeStack,
    CategoryStack,
    SavedStack,
    SearchStack
} from '../stackNavigator'

const Tabs = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Trang chủ',
                tabBarIcon: ({ tintColor }) => <Icon name="home" type="antdesign" size={22} color={tintColor} />,
                tabBarOptions: {
                    activeTintColor: '#ff6347',
                    inactiveTintColor: 'gray',
                    labelStyle: {
                        fontSize: 12,
                    },
                }
            },

        },
        Category: {
            screen: CategoryStack,
            navigationOptions: {
                tabBarLabel: 'Danh mục',
                tabBarIcon: ({ tintColor }) => <Icon name="sort" type="material" size={28} color={tintColor} />,
                tabBarOptions: {
                    activeTintColor: '#00f',
                    inactiveTintColor: 'gray',
                    labelStyle: {
                        fontSize: 12,
                    },
                }
            },
        },
        Saved: {
            screen: SavedStack,
            navigationOptions: {
                tabBarLabel: 'Đánh dấu',
                tabBarIcon: ({ tintColor }) => <Icon name="favorite-border" type="material" size={28} color={tintColor} />,
                tabBarOptions: {
                    activeTintColor: '#f00',
                    inactiveTintColor: 'gray',
                    labelStyle: {
                        fontSize: 12,
                    },
                }
            },
        },
        Search: {
            screen: SearchStack,
            navigationOptions: {
                tabBarLabel: 'Tìm kiếm',
                tabBarIcon: ({ tintColor }) => <Icon name="search" type="material" size={30} color={tintColor} />,
                tabBarOptions: {
                    activeTintColor: '#f0f',
                    inactiveTintColor: 'gray',
                    labelStyle: {
                        fontSize: 12,
                    },
                }
            },
        },
    },
    {
        initialRouteName: 'Home'
    }
);
Tabs.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,

};

export default Tabs