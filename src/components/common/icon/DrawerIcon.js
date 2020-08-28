import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const DrawerIcon = (props) => {
    const openDrawer = () => {
        // console.log('openDrawer', props)
        props.navigation.openDrawer()
    }

    return (
        <View style={{
            width: 44, height: 44, marginLeft: 20,
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Icon
                name='menu'
                size={20}
                color='black'
                onPress={openDrawer} />
        </View>
    )
};

export default withNavigation(DrawerIcon);