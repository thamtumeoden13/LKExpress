import React, { useState, useEffect } from 'react';
import { Input, Icon } from 'react-native-elements';
import { scale, verticalScale, moderateScale } from "@utils/scaleSize";

export const InputUserName = (props) => {
    const [userName, setUserName] = useState('')
    const [errors, setErrors] = useState({})
    const autoFocus = typeof props.autoFocus !== "undefined" ? props.autoFocus : true
    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors])

    useEffect(() => {
        setUserName(props.userName ? props.userName : '')
    }, [])

    const onChangeText = (userName) => {
        let tmpUserName = userName.replace(/ +/g, '');
        setUserName(tmpUserName)
        if (props.onChangeInput)
            props.onChangeInput(tmpUserName)
        setErrors({})
    }

    return (
        <Input
            leftIcon={
                <Icon
                    name="user"
                    type="font-awesome"
                    color="#288ad6"
                    size={moderateScale(24)}
                />
            }
            containerStyle={{
                marginVertical: verticalScale(5),
                marginHorizontal: moderateScale(5),
                // backgroundColor: '#f0f'
            }}
            onChangeText={(value) => onChangeText(value)}
            value={userName}
            inputStyle={{
                marginLeft: moderateScale(10),
                fontSize: moderateScale(14),
                color: '#000'
            }}
            keyboardAppearance="light"
            placeholder={"Nhập mã nhân viên(BCNB)"}
            autoFocus={autoFocus}
            autoCapitalize="none"
            maxLength={10}
            autoCorrect={true}
            keyboardType="number-pad"
            blurOnSubmit={true}
            placeholderTextColor="#000"
            errorStyle={{ textAlign: 'left', fontSize: moderateScale(12) }}
            errorMessage={errors.userName}
        />
    )
}