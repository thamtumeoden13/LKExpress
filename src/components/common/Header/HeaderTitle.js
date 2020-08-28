import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text } from 'react-native'

const HeaderTitle = (props) => {
    return (
        <View style={{
            flex: 1, height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 20,
                textAlign: 'center'
            }}>{props.title}</Text>
        </View>
    )
};

export default withNavigation(HeaderTitle);