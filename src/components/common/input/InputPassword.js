import React, { useState, useEffect } from 'react';
import { Input, Icon } from 'react-native-elements';
import { scale, verticalScale, moderateScale } from "@utils/scaleSize";

export const InputPassword = (props) => {
    const [password, setPassword] = useState(props.password)
    const [errors, setErrors] = useState('')
    const autoFocus = typeof props.autoFocus !== "undefined" ? props.autoFocus : true
    useEffect(() => {
        if (props.onChangeInput)
            props.onChangeInput(password)
        setErrors('')
    }, [password])

    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors])

    return (
        <Input
            leftIcon={
                <Icon
                    name="lock"
                    type="font-awesome"
                    color="#288ad6"
                    size={moderateScale(24)}
                />
            }
            containerStyle={{
                marginVertical: verticalScale(5),
                marginHorizontal: moderateScale(5),
                // backgroundColor: '#00f'
            }}
            onChangeText={(password) => setPassword(password)}
            value={password}
            inputStyle={{
                marginLeft: moderateScale(10),
                fontSize: moderateScale(14),
                color: '#000'
            }}
            secureTextEntry={true}
            keyboardAppearance="light"
            placeholder={props.placeholder ? props.placeholder : "Nhập mật khẩu"}
            autoCapitalize="none"
            autoFocus={autoFocus}
            autoCorrect={false}
            // keyboardType="number-pad"
            maxLength={20}
            blurOnSubmit={true}
            placeholderTextColor="#000"
            errorStyle={{ textAlign: 'left', fontSize: moderateScale(12) }}
            errorMessage={errors.password}
        />
    )
}