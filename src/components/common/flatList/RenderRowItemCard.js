import React, { useState, useEffect, Fragment } from 'react'
import {
    View, Text, StyleSheet, Dimensions,
    ImageBackground, TouchableOpacity, ScrollView, RefreshControl
} from 'react-native'
import { ListItem, Divider, Avatar, Icon } from 'react-native-elements';
import { getFormattedDate, formatMoney, formatDistanceToNowVi } from "utils/function"
import { scale, moderateScale, verticalScale, calcWidth, calcHeight } from "utils/scaleSize";

export const RenderRowItemCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.viewSectionList} >
            <View style={[styles.viewSectionItem, { backgroundColor: props.item.IsCancelDelivery ? "#f00" : "#93d5f6" }]}>
                <View style={styles.containerTop}>
                    <View style={{
                        flex: 7,
                        height: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                    }}>
                        <ImageBackground style={{
                            width: moderateScale(64), height: verticalScale(64),
                            justifyContent: 'center', alignContent: 'center',
                            marginLeft: 'auto', marginRight: 'auto'
                        }}
                            resizeMode='contain'
                            source={require('@assets/TMSLogo.png')}
                        ></ImageBackground>
                        <View style={{
                            width: '70%',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                            <Text style={{ fontSize: moderateScale(14), fontWeight: 'bold', backgroundColor: 'orange', borderRadius: scale(5), padding: scale(5) }} >{`#${props.item.ShipmentOrderID}`}</Text>
                            <Text style={{ fontSize: moderateScale(12), fontWeight: 'bold' }} >{props.item.ReceiverFullName}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', paddingBottom: verticalScale(5) }}>
                        <Divider style={{ backgroundColor: 'gray', height: '100%', width: 2 }} />
                    </View>
                    <View style={{
                        flex: 3,
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: moderateScale(5),
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='money'
                                type='font-awesome'
                                color='#517fa4'
                                size={moderateScale(24)}
                            />
                            <Text style={{ fontSize: moderateScale(14), color: 'red', left: scale(5) }}>{formatMoney(props.item.TotalCOD, 0)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='tv'
                                type='font-awesome'
                                color='#517fa4'
                                size={moderateScale(24)}
                            />
                            <Text style={{ fontSize: moderateScale(14), color: 'red', left: scale(5) }}>{props.item.TotalItems}</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: verticalScale(2), marginHorizontal: moderateScale(5), marginVertical: verticalScale(5) }} />
                <View style={styles.containerBottom}>
                    <View style={styles.bottomItem}>
                        <Icon name='location-on'
                            type='material' color='#000'
                            size={moderateScale(20)}
                            containerStyle={{ justifyContent: "center" }}
                        />
                        <Text style={styles.itemText}>{props.item.ReceiverFullAddress}</Text>
                    </View>
                    <View style={styles.bottomItem}>
                        <Icon name='av-timer'
                            type='material' color='#000'
                            size={moderateScale(20)}
                            containerStyle={{ justifyContent: "center" }}
                        />
                        <Text style={styles.itemText}>{formatDistanceToNowVi(props.item.CreatedDate)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#eff1f4',
    },
    viewSectionNoList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewSectionList: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewSectionItem: {
        height: verticalScale(128),
        width: '100%',
        borderRadius: moderateScale(10),
        marginVertical: verticalScale(5),
        backgroundColor: '#ff0',
        paddingVertical: verticalScale(5)
    },
    containerTop: {
        maxHeight: verticalScale(56),
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(10),
        // backgroundColor: '#f0f'
    },
    containerBottom: {
        maxHeight: verticalScale(48),
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottomItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(5)
    },
    itemText: {
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        textAlign: "left", color: '#000',
        paddingLeft: moderateScale(5),
        paddingRight: moderateScale(10),
        marginRight: moderateScale(10),
        // backgroundColor: '#f0f'
    }
});