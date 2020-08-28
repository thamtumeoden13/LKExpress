import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, UPDATE_USERINFO } from "constants/actionTypes";
import { AUTHEN_HOSTNAME, AUTHEN_HOST_BASEURL, CLIENT_INFO_OBJECT_STORENAME } from "constants/systemVars";
import WebRequest from "common/library/WebRequest";
import AsyncStorage from '@react-native-community/async-storage';
import { getNetInfo } from 'common/NetInfo'

export function loginRequest(username, password) {
    return {
        type: LOGIN_REQUEST,
        Username: username,
        Password: password
    };
}

export function loginSuccess(loginUserInfo, tokenString, password) {
    return {
        type: LOGIN_SUCCESS,
        IsLoginSuccess: true,
        LoginUserInfo: loginUserInfo,
        TokenString: tokenString,
        Password: password
    };
}

export function loginFailure(errorMessage) {
    return {
        type: LOGIN_FAILURE,
        ErrorMessage: errorMessage
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function updateUserInfo(userInfo) {
    return {
        type: UPDATE_USERINFO,
        UserInfo: userInfo
    };
}

export function callLogin(username, password, deviceID) {
    return (dispatch, getState) => {
        const state = getState();
        return dispatch(callLoginAPI(username, password, deviceID)).then((apiResult) => {
            return apiResult;
        }).catch((err) => {
            console.error(err)
        });
    }
}

export function callLoginAPI(username, password, deviceID) {
    return async (dispatch, getState) => {
        const state = getState();
        const url = AUTHEN_HOST_BASEURL + "api/Authentication/Authenticate";
        const netInfo = await getNetInfo();
        const sendData = {}
        if (netInfo.status == true) {
            return WebRequest.postData(url, sendData).then((apiResult) => {
                console.error(apiResult)
            }).catch((err) => {
                console.error(err)
            });
        }
        else {
            console.log(netInfo);
        }
    };
}
