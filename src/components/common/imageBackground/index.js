import React, { Fragment, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scale, moderateScale, verticalScale, calcWidth, calcHeight } from "@utils/scaleSize";

const ImageBackgroundCom = (props) => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.keyboardContainer}>
            <ImageBackground style={{ width: calcWidth('100%'), height: calcHeight('100%') }}
                source={require('@assets/bg/background_login.png')}
            >
                {
                    typeof props.children.length == "undefined"
                        ? props.children
                        : props.children.map(child => {
                            return child
                        })
                }
            </ImageBackground>
        </KeyboardAwareScrollView>
    )
}
export default ImageBackgroundCom;

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    }
});