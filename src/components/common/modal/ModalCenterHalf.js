import React, { Component, useState, useEffect, useLayoutEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Modal from "react-native-modal";
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale } from '@utils/scaleSize';

export const ModalCenterHalf = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(props.isVisible)
    const [content, setContent] = useState(props.content)
    useLayoutEffect(() => {
        setIsModalVisible(props.isVisible)
    }, [props.isVisible])

    useEffect(() => {
        setContent(props.content)
    }, [props.content])
    return (
        <View style={styles.outContainer}>
            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setIsModalVisible(false)}
                backdropColor="#B4B3DB"
                backdropOpacity={0.8}
                animationOutTiming={50}
                animationInTiming={100}
            // backdropTransitionInTiming={100}
            // backdropTransitionOutTiming={100}
            // animationIn="zoomInDown"
            // animationOut="zoomOutUp"
            // animationInTiming={600}
            // animationOutTiming={600}
            // backdropTransitionInTiming={600}
            // backdropTransitionOutTiming={600}
            >
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                    <View style={{ position: 'relative' }}>
                        <View style={{
                            backgroundColor: '#f00', width: moderateScale(30),
                            height: moderateScale(30),
                            position: 'absolute', top: -10, right: 10, zIndex: 99, borderRadius: 15, paddingTop: 3
                        }}>
                            <Icon
                                name="close"
                                type="antdesign"
                                color="#fff"
                                size={moderateScale(20)}
                                onPress={props.onClose}
                            />

                        </View>
                        <View>
                            {content}
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    outContainer: {

    },
    container: {
        justifyContent: 'center',
        flex: 1,
    },

});