import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import { scale, moderateScale, verticalScale, calcWidth, calcHeight } from "utils/scaleSize";

export const ButtonBottomComponent = (props) => {

    const [state, setState] = useState({
        disabled: false
    })

    const handlerPress = () => {
        setState({ ...state, disabled: true })
        setTimeout(() => {
            setState({ ...state, disabled: false })
        }, 1000);
        if (props.onPress) {
            props.onPress()
        }
    }

    useEffect(() => {
        setState({
            ...state,
            disabled: !!props.disabled ? props.disabled : false
        })
    }, [props.disabled])

    return (
        <Button
            title={props.title ? props.title : "Xác nhận"}
            buttonStyle={[styles.buttonStyle, props.buttonStyle]}
            containerStyle={[styles.containerButton, props.containerButton]}
            titleStyle={[styles.titleStyle, props.titleStyle]}
            type="solid"
            onPress={handlerPress}
            disabled={state.disabled}
        />
    )
}

const styles = StyleSheet.create({
    containerButton: {
        maxWidth: calcWidth("90%"),
        maxHeight: verticalScale(48),
        justifyContent: 'center',
        marginVertical: verticalScale(5)
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: moderateScale(16),
    },
    buttonStyle: {
        // backgroundColor: '#0f0',
        borderRadius: moderateScale(2),
        maxWidth: calcWidth("90%")
    }
});