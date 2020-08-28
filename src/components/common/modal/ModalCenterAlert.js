import React, { Component, useState, useEffect, useLayoutEffect, Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Input, Icon, Button } from 'react-native-elements';
import { scale, moderateScale, verticalScale, calcWidth, calcHeight } from 'utils/scaleSize';

const initStyle = {
    nameIcon: "check",
    typeIcon: "antdesign",
    colorIcon: "#fff",
    backgroundColor: "#008000"
}

export const ModalCenterAlert = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(props.isVisible)
    const [styleModal, setStyleModal] = useState(initStyle)

    const onCloseModal = (value) => {
        setIsModalVisible(false)
        if (props.onCloseModalAlert) {
            props.onCloseModalAlert(value)
        }
    }
    useLayoutEffect(() => {
        setIsModalVisible(props.isVisible)
    }, [props.isVisible])

    useEffect(() => {
        let styleModal = {
            nameIcon: "check",
            typeIcon: "antdesign",
            colorIcon: "#008000",
            colorButton: "#008000",
            borderColor: "#008000",
            backgroundColor: "#fff"
        };
        switch (props.typeModal) {
            case 'success':
                styleModal = {
                    nameIcon: "check",
                    typeIcon: "antdesign",
                    colorIcon: "#008000",
                    colorButton: "#008000",
                    borderColor: "#008000",
                    backgroundColor: "#fff"
                }
                break;
            case 'info':
                styleModal = {
                    nameIcon: "info",
                    typeIcon: "antdesign",
                    colorIcon: "#008eff",
                    colorButton: "#008eff",
                    borderColor: "#008eff",
                    backgroundColor: "#fff"
                }
                break;
            case 'confirm':
                styleModal = {
                    nameIcon: "question",
                    typeIcon: "antdesign",
                    colorIcon: "#0027ff",
                    colorButton: "#0027ff",
                    borderColor: "#0027ff",
                    backgroundColor: "#fff"
                }
                break;
            case 'warning':
                styleModal = {
                    nameIcon: "exclamation",
                    typeIcon: "antdesign",
                    colorIcon: "#ffc107",
                    colorButton: "#ffc107",
                    borderColor: "#ffc107",
                    backgroundColor: "#fff"
                }
                break;
            case 'error':
                styleModal = {
                    nameIcon: "close",
                    typeIcon: "antdesign",
                    colorIcon: "#fb5757",
                    colorButton: "#fb5757",
                    borderColor: "#fb5757",
                    backgroundColor: "#fff"
                }
                break;
        }
        setStyleModal(styleModal);
    }, [props.typeModal])

    return (
        <View style={styles.outContainer}>
            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setIsModalVisible(false)}
                backdropColor="#7b7a7a"
                backdropOpacity={0.6}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={50}
                animationOutTiming={100}
            >
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                    <View style={styles.modal}>
                        <View style={styles.containerHeader}>
                            <View style={styles.inHeader}>
                                <View style={{
                                    height: moderateScale(70),
                                    width: moderateScale(70),
                                    borderColor: styleModal.borderColor,
                                    borderWidth: moderateScale(5),
                                    borderRadius: moderateScale(35),
                                    justifyContent: 'center',
                                    backgroundColor: styleModal.backgroundColor
                                }}>
                                    <Icon
                                        name={styleModal.nameIcon}
                                        type={styleModal.typeIcon}
                                        color={styleModal.colorIcon}
                                        size={moderateScale(35)}
                                        onPress={() => onCloseModal(true)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerDetail}>
                            {!!props.childComponent ?
                                <View style={{ maxHeight: '100%', width: '100%' }}>
                                    {props.childComponent}
                                </View>
                                :
                                <Fragment>
                                    <Text style={{ fontSize: moderateScale(25), color: '#333', fontWeight: "700", textAlign: 'center' }}>{props.titleModal}</Text>
                                    <Text style={{ marginVertical: verticalScale(10), textAlign: 'center', maxHeight: '90%', }}>{props.contentModal}</Text>
                                    <View style={styles.containerButton}>
                                        <Button
                                            title="ĐỒNG Ý"
                                            activeOpacity={1}
                                            underlayColor="transparent"
                                            onPress={() => onCloseModal(true)}
                                            loadingProps={{
                                                size: 'large',
                                                color: '#000',
                                                hidesWhenStopped: true,
                                            }}
                                            buttonStyle={{
                                                height: verticalScale(48),
                                                width: "100%",
                                                backgroundColor: styleModal.backgroundColor,
                                                borderWidth: moderateScale(2),
                                                borderColor: styleModal.borderColor,
                                                borderRadius: moderateScale(10),
                                            }}
                                            containerStyle={{ width: '45%' }}
                                            titleStyle={{ fontSize: moderateScale(16), fontWeight: '600', color: styleModal.colorButton }}
                                        />
                                    </View>
                                </Fragment>
                            }
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    outContainer: {
        // maxHeight: calcHeight(90)
    },
    container: {
        flex: 1,
        // maxHeight: calcHeight(90),
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        // maxHeight: calcHeight(90),
        borderRadius: moderateScale(10),
        paddingBottom: verticalScale(20),
    },
    containerHeader: {
        alignItems: "center",
        justifyContent: 'center',
    },
    outHeader: {
        backgroundColor: 'rgba(255, 243, 216,1)',
        justifyContent: 'center',
        alignItems: 'center',
        width: calcWidth(100),
        height: verticalScale(50),
    },
    inHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: calcWidth('100%'),
        height: verticalScale(50),
        bottom: verticalScale(25),
    },
    containerDetail: {
        width: '100%',
        maxHeight: '80%',
        alignItems: 'center',
    },
    containerButton: {
        width: "100%",
        marginTop: verticalScale(10),
        marginBottom: verticalScale(5),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'center',
    }
});