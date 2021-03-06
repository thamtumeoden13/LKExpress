import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    StatusBar,
    ActivityIndicator,
    ImageBackground,
    Platform,
    Dimensions
} from 'react-native';
import Modal from "react-native-modal";
import LottieView from 'lottie-react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const ModalLoading = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(props.isVisible)
    const [entries, setEntries] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        setIsModalVisible(props.isVisible)
    }, [props.isVisible])

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {/* <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text> */}
            </View>
        );
    };
    return (
        <View style={styles.outContainer}>
            <Modal
                isVisible={isModalVisible}
                style={styles.bottomModal}
                animationOutTiming={50}
                animationInTiming={50}
            >
                <View style={styles.container}>
                    <Carousel
                        ref={carouselRef}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth - 60}
                        data={entries}
                        renderItem={renderItem}
                        hasParallaxImages={true}
                        containerCustomStyle={styles.carousel}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pagination
                            dotsLength={entries.length}
                            activeDotIndex={activeSlide}
                            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 8,
                                backgroundColor: 'rgba(0, 0, 0, 1)'
                            }}
                            inactiveDotStyle={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)'
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            containerStyle={styles.pagination}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomModal: {
        justifyContent: 'center',
        alignItems: "center",
        margin: 0,
        backgroundColor: "#00000033"
    },
    container: {
        flex: 1,
    },
    item: {
        width: screenWidth - 60,
        height: screenHeight - 250,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    carousel: {
        position: 'absolute',
        bottom: 24,
        marginBottom: 48,
    },
    pagination: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 12
    },
});