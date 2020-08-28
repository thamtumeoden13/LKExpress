import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet,
    ImageBackground,
    Platform,
    Alert,
    BackHandler,
    // AsyncStorage
} from 'react-native';
import { ModalCenterAlert } from "components/common/modal/ModalCenterAlert";
import LottieView from 'lottie-react-native';
import { moderateScale, calcWidth, verticalScale } from "utils/scaleSize";

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalAlert: false,
            typeModalAlert: '',
            titleModalAlert: '',
            contentModalAlert: '',
        };
    }

    componentDidMount() {
        setTimeout(() => {
            // console.log("JailMonkey.canMockLocation()", JailMonkey.canMockLocation())
            // console.log("JailMonkey.trustFall()", JailMonkey.trustFall())
            // console.log("JailMonkey.isOnExternalStorage()", JailMonkey.isOnExternalStorage())
            // console.log("JailMonkey.AdbEnabled()", JailMonkey.AdbEnabled())
            // console.log("JailMonkey.isDebuggedMode()", JailMonkey.isDebuggedMode())
            // console.log("JailMonkey.isDevelopmentSettingsMode()", JailMonkey.isDevelopmentSettingsMode())
        }, 500);
        setTimeout(() => {
            this.props.navigation.navigate('App')
        }, 2000);
    }

    // Render any loading content that you like here
    render() {
        const { isModalAlert, typeModalAlert, titleModalAlert, contentModalAlert } = this.state;
        return (
            <View style={styles.container}>
                {Platform.OS == 'ios' ?
                    <ImageBackground style={{
                        width: moderateScale(60), height: moderateScale(60),
                        justifyContent: 'center', alignContent: 'center',
                        marginLeft: 'auto', marginRight: 'auto'
                    }}
                        resizeMode='contain'
                        source={require('@assets/bg/loading.gif')}
                    ></ImageBackground>
                    :
                    <View style={styles.bottomModal}>
                        <LottieView
                            source={require('@assets/bg/material-wave-loading.json')}
                            colorFilters={[{
                                keypath: "button",
                                color: "#F00000"
                            }, {
                                keypath: "Sending Loader",
                                color: "#F00000"
                            }]}
                            style={{ width: moderateScale(80), height: moderateScale(80), justifyContent: 'center', }}
                            autoPlay
                            loop
                        />
                    </View>
                }
                <StatusBar backgroundColor="red" barStyle="dark-content" hidden />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    bottomModal: {
        justifyContent: 'center',
        alignItems: "center",
        margin: 0,
    },
})