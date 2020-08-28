import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE } from "constants/actionTypes";
import { AUTHEN_HOSTNAME, AUTHEN_HOST_BASEURL, API_HOST_LIST, CLIENT_INFO_OBJECT_STORENAME } from "constants/systemVars";
import WebRequest from "common/library/WebRequest";

import AsyncStorage from '@react-native-community/async-storage';

import { getNetInfo } from 'common/NetInfo'

export function createSignature(inputText) {
    return HashingSHA256(inputText);
}

export function fetchAPIRequest(hostname, hostURL, postData) {
    //  console.log(FETCH_API_REQUEST);
    return {
        type: FETCH_API_REQUEST,
        Hostname: hostname,
        HostURL: hostURL,
        PostData: postData
    };
}

export function fetchAPISuccess(resultObject, resultMessage) {
    //  console.log(FETCH_API_SUCCESS, resultObject);
    //console.log(FETCH_API_SUCCESS);
    return {
        type: FETCH_API_SUCCESS,
        IsFetchAPISuccess: true,
        ResultMessage: resultMessage,
        ResultObject: resultObject
    };
}

export function fetchAPIFailure(errorStatus, resultMessage) {
    // console.log(FETCH_API_FAILURE,resultMessage);
    return {
        type: FETCH_API_FAILURE,
        ErrorStatus: errorStatus,
        ResultMessage: resultMessage
    };
}

export function callFetchAPI(hostname, apiPath, postData) {
    return (dispatch, getState) => {
        const state = getState();
        return dispatch(callAPI(hostname, apiPath, postData)).then((apiResult) => {
            console.log(apiResult)
        }).catch((err) => {
            console.error(err)
        });
    }
}

export function callAPI(hostname, apiPath, postData) {
    return async (dispatch, getState) => {
        const state = getState();
        const hostURL = API_HOST_LIST[hostname].HostBaseURL + apiPath;
        const authenHeader = { ClientID: clientID, AuthenData: 'authenData' };
        const netInfo = await getNetInfo();
        if (netInfo.status == true) {
            return WebRequest.postDataWithAuthenHeader(hostURL, postData, authenHeader).then((apiResult) => {
                console.log("callAPI", apiResult);
            }).catch((err) => {
                console.error(err)
            });
        }
        else {
            console.log("netInfo error", netInfo);
        }
    };
}

export function callAPIWithoutAuthen(hostname, apiPath, postData) {
    return (dispatch, getState) => {
        const state = getState();
        const hostURL = API_HOST_LIST[hostname].HostBaseURL + apiPath;
        return WebRequest.postData(hostURL, postData).then((apiResult) => {
            console.log(apiResult);
        }).catch((err) => {
            console.log(err);
        });
    };
}

