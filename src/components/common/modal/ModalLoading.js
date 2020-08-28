import React, { Component, useState, useEffect, Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    StatusBar,
    ActivityIndicator,
    ImageBackground,
    Platform,
} from 'react-native';
import Modal from "react-native-modal";
import LottieView from 'lottie-react-native';
import { scale, moderateScale, verticalScale, calcWidth, calcHeight } from "@utils/scaleSize";

export const ModalLoading = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(props.isVisible)
    const [title, setTitle] = useState('Đang xử lý...')

    useEffect(() => {
        setIsModalVisible(props.isVisible)
    }, [props.isVisible])

    useEffect(() => {
        if (!!props.title && props.title.length > 0)
            setTitle(props.title)
    }, [props.title])

    return (
        <View style={styles.outContainer} pointerEvents="none">
            <Modal
                isVisible={isModalVisible}
                style={styles.bottomModal}
                animationOutTiming={50}
                animationInTiming={50}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {
                        Platform.OS == 'ios' ?
                            <ImageBackground style={{
                                justifyContent: 'center', alignContent: 'center',
                                width: moderateScale(60), height: moderateScale(60),
                            }}
                                resizeMode='contain'
                                source={require('@assets/bg/loading.gif')}
                            >
                            </ImageBackground>
                            :
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
                    }
                    {title && title.length > 0 &&
                        <View style={{
                            width: calcWidth('100%'),
                            height: moderateScale(48),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: verticalScale(10)
                        }}>
                            <Text style={{ color: '#fff', fontSize: moderateScale(18), fontWeight: 'bold' }}>{title}</Text>
                        </View>
                    }
                </View>

                {/* <ActivityIndicator size="large" color="#fff" /> */}
                <StatusBar barStyle="dark-content" hidden />
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomModal: {
        justifyContent: 'center',
        alignItems: "center",
        margin: 0,
        backgroundColor: "#00000033"
    },
});