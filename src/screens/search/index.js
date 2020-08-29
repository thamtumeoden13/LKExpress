import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Animated
} from 'react-native';
import { Icon } from 'react-native-elements';
import codePush from 'react-native-code-push'

import DrawerIcon from 'components/common/icon/DrawerIcon'
import BagIcon from 'components/common/icon/BagIcon'
import HeaderTitle from 'components/common/Header/HeaderTitle'
import ProgressBar from 'components/common/progressBar';
import { ModalCenterAlert } from 'components/common/modal/ModalCenterAlert';

export default class Search extends Component {
    static navigationOptions = () => {
        return {
            headerLeft: () => <DrawerIcon />,
            headerRight: () => <BagIcon />,
            headerTitle: () => <HeaderTitle title={`Tìm kiếm`} />,
        };
    };

    constructor(props) {
        super(props)
        this.state = {
            isModalAlert: false,
            receivedBytes: 0,
            totalBytes: 0,
            titleProgress: ''
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.setState({ isModalAlert: false })
    }

    onButtonPress = () => {
        this.setState({ isModalAlert: !this.state.isModalAlert })
        codePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix: "\n\nChange log:\n"
            },
            installMode: codePush.InstallMode.IMMEDIATE
        });
        codePush.sync({ updateDialog: true },
            (status) => {
                switch (status) {
                    case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                        this.setState({ titleProgress: 'Checking for updates.' })
                        break;
                    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                        this.setState({ titleProgress: 'Downloading package.' })
                        break;
                    case codePush.SyncStatus.INSTALLING_UPDATE:
                        this.setState({ titleProgress: 'Installing update.' })
                        break;
                    case codePush.SyncStatus.UP_TO_DATE:
                        this.setState({ titleProgress: 'Up-to-date.' })
                        break;
                    case codePush.SyncStatus.UPDATE_INSTALLED:
                        this.setState({ titleProgress: 'Update installed.' })
                        setTimeout(() => {
                            this.onCloseModalAlert()
                        }, 1000);
                        break;
                }
            },
            ({ receivedBytes, totalBytes, }) => {
                /* Update download modal progress */
                this.setState({ receivedBytes, totalBytes })
                console.log(receivedBytes, totalBytes)
            }
        );
    }

    renderChildren = (titleProgress, receivedBytes, totalBytes) => {
        return (
            <View style={{ height: 100, paddingHorizontal: 10 }}>
                <ProgressBar
                    title={titleProgress}
                    receivedBytes={receivedBytes}
                    totalBytes={totalBytes}
                />
            </View>
        )
    }
    onCloseModalAlert = () => {
        this.setState({
            isModalAlert: false,
        })
    }

    render() {
        const { receivedBytes, totalBytes, titleProgress } = this.state
        console.log(receivedBytes, totalBytes, titleProgress)
        return (
            <View style={styles.container}>
                <ModalCenterAlert
                    isVisible={this.state.isModalAlert}
                    typeModal={'error'}
                    childComponent={this.renderChildren(titleProgress, receivedBytes, totalBytes)}
                    onCloseModalAlert={this.onCloseModalAlert}
                />
                <Icon
                    name='gift'
                    type='font-awesome'
                    color='#d82cfd99'
                    size={120}
                    onPress={this.onButtonPress}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});