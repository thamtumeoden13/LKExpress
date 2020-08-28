import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
// import codePush from 'react-native-code-push'

import DrawerIcon from 'components/common/icon/DrawerIcon'
import BagIcon from 'components/common/icon/BagIcon'
import HeaderTitle from 'components/common/Header/HeaderTitle'
import { scale, moderateScale } from 'utils/scaleSize';

export default class Search extends Component {
    static navigationOptions = () => {
        return {
            headerLeft: <DrawerIcon />,
            headerRight: <BagIcon />,
            headerTitle: <HeaderTitle title={`Tìm kiếm`} />,
        };
    };
    componentDidMount() {

    }

    componentWillUnmount() {
    }

    onButtonPress = () => {
        // codePush.sync({
        //     updateDialog: {
        //         appendReleaseDescription: true,
        //         descriptionPrefix: "\n\nChange log:\n"
        //     },
        //     installMode: codePush.InstallMode.IMMEDIATE
        // });
        // codePush.sync({ updateDialog: true },
        //     (status) => {
        //         switch (status) {
        //             case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        //                 // Show "downloading" modal
        //                 break;
        //             case codePush.SyncStatus.INSTALLING_UPDATE:
        //                 // Hide "downloading" modal
        //                 break;
        //         }
        //     },
        //     ({ receivedBytes, totalBytes, }) => {
        //         /* Update download modal progress */
        //     }
        // );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewSectionNoList}>
                    <View style={styles.icon}>
                        <Icon
                            name='gift'
                            type='font-awesome'
                            color='#d82cfd99'
                            size={120}
                            onPress={this.onButtonPress}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={{ color: '#948f8f', fontSize: scale(20) }}>Bạn chưa có mã quà tặng</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: '#eff1f4',
    },
    viewSectionNoList: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: scale(20),
        textAlign: 'center',
        margin: moderateScale(10),
    },
});