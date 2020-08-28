import React, { Component } from 'react';
import { CreateAppContainer } from './navigators'
import { Provider } from 'react-redux';
import store from './store';
import codePush from 'react-native-code-push';
// var codePush = require("react-native-code-push");
// import { enableScreens } from 'react-native-screens';

// enableScreens();
console.disableYellowBox = true
// Sync for updates every time the app resumes.
// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_RESUME };
// Active update, which lets the end user know
// about each update, and displays it to them
// immediately after downloading it
// let codePushOptions = { updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE };
class App extends Component {

    // Make use of the event hooks to keep track of
    // the different stages of the sync process.
    // codePushStatusDidChange(status) {
    //     switch (status) {
    //         case codePush.SyncStatus.CHECKING_FOR_UPDATE:
    //             console.log("Checking for updates.");
    //             break;
    //         case codePush.SyncStatus.DOWNLOADING_PACKAGE:
    //             console.log("Downloading package.");
    //             break;
    //         case codePush.SyncStatus.INSTALLING_UPDATE:
    //             console.log("Installing update.");
    //             break;
    //         case codePush.SyncStatus.UP_TO_DATE:
    //             console.log("Up-to-date.");
    //             break;
    //         case codePush.SyncStatus.UPDATE_INSTALLED:
    //             console.log("Update installed.");
    //             break;
    //     }
    // }

    // codePushDownloadDidProgress(progress) {
    //     console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
    // }

    componentDidMount() {
        // codePush.sync({
        //     updateDialog: true,
        //     installMode: codePush.InstallMode.IMMEDIATE
        // });
    }

    render() {
        return <Provider store={store}><CreateAppContainer /></Provider>;
    }
}

// export default App;
export default codePush(App);
// export default codePush(codePushOptions)(App);