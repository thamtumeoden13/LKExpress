import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    Image,
    StatusBar,
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

import ListHorizontal from 'components/common/listCommon/ListHorizontal'
import ListVertical from 'components/common/listCommon/ListVertical'
import { moderateScale, verticalScale, calcWidth } from 'utils/scaleSize';

class Home extends Component {
    // static navigationOptions = ({ navigation, screenProps }) => ({
    //     header: props => <Search navigation={navigation} />,
    // })
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            headerLeft: <DrawerIcon navigation={navigation} />,
            headerRight: <BagIcon navigation={navigation} />,
            headerTitle: <HeaderTitle title={`Trang Chủ`} />,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar backgroundColor="gray" barStyle="dark-content" hidden />
                <View style={styles.container}>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, paddingTop: verticalScale(20), marginBottom: verticalScale(20), paddingHorizontal: moderateScale(10) }}>
                            <ListHorizontal
                                title={`Categories`}
                                data={ENTRIES1}
                                containerStyle={styles.containerStyleListHorizontal}
                                itemStyle={styles.itemStyleListHorizontal}
                            />
                        </View>
                        <View style={{ flex: 1, paddingTop: verticalScale(20), marginBottom: verticalScale(20), }}>
                            <ListVertical
                                title={`House`}
                                data={ENTRIES2}
                                containerStyle={styles.containerStyleListVertical}
                                itemStyle={styles.itemStyleListVertical}
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <CarouselMainLayout
                                data={ENTRIES1}
                                title={`Main Layout`}
                                subtitle={`Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots`}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
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

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#000"
    },
    container: {
        flex: 1,
        backgroundColor: '#eff1f4',
    },
    containerStyleListHorizontal: {
        height: moderateScale(160),
    },
    itemStyleListHorizontal: {
        width: moderateScale(160)
    },
    containerStyleListVertical: {
        height: moderateScale(520),
    },
    itemStyleListVertical: {
        height: moderateScale(260),
        width: calcWidth(45)
    }
});