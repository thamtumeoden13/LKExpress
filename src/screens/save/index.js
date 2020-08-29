import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Alert
} from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import { callFetchAPI } from "actions/fetchAPIAction";

import { Search } from 'components/mainApp/header';
import {
    CarouselMainLayout,
    CarouselMomentumLayout,
    CarouselStackLayout,
    CarouselTinderLayout,
    CarouselCustomLayout
} from 'components/carousel/layout';
import { ENTRIES1, ENTRIES2 } from 'constants/entries';
import DrawerIcon from 'components/common/icon/DrawerIcon'
import BagIcon from 'components/common/icon/BagIcon'
import HeaderTitle from 'components/common/Header/HeaderTitle'

const numColumns = 4;

class Saved extends Component {
    static navigationOptions = () => {
        return {
            headerLeft: () => <DrawerIcon />,
            headerRight: () => <BagIcon />,
            headerTitle: () => <HeaderTitle title={`Đánh dấu`} />,
        };
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onPressItem = (item, index) => {
        Alert.alert('CarouselStackLayout,CarouselTinderLayout', `You've clicked ${item.title}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <CarouselStackLayout
                        data={ENTRIES1}
                        title={`Stack Layout `}
                        subtitle={`Stack of cards layout | Loop`}
                        onPressItem={this.onPressItem}
                    />
                    <CarouselTinderLayout
                        data={ENTRIES2}
                        title={`Tinder Layout `}
                        subtitle={`Tinder of cards layout | Loop`}
                        onPressItem={this.onPressItem}
                    />
                </ScrollView>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        AppInfo: state,
        FetchAPIInfo: state.FetchAPIInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        callFetchAPI: (hostname, hostURL, postData) => {
            return dispatch(callFetchAPI(hostname, hostURL, postData));
        }
    };
};

export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff1f4',
    },
});