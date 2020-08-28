import React, { Component, useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    StatusBar,
    ActivityIndicator,
    ImageBackground,
    Platform,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';

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

export const ModalHelpPagination = props => {
    const [entries, setEntries] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    // useEffect(() => {
    //     setEntries(ENTRIES1);
    //     console.log({ ENTRIES1, screenWidth })
    // }, []);

    useEffect(() => {
        if (!!props.postersData) {
            setEntries(props.postersData)
        }
    }, [props.postersData])

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.image }}
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
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                layout={'stack'}
                layoutCardOffset={`18`}
                sliderWidth={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
                containerCustomStyle={styles.carousel}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                width: '50%',
                backgroundColor: 'red',
                alignItems: 'flex-start'
            }}>
                <Pagination
                    dotsLength={entries.length}
                    activeDotIndex={activeSlide}
                    // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', maxWidth: '90%' }}
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
                    containerStyle={{
                        bottom: 0,
                        marginBottom: 12,
                        width: 100,
                        backgroundColor: 'blue'
                    }}
                />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
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
        resizeMode: 'cover',
    },
    carousel: {
        // position: 'absolute',
        // bottom: 24,
        // marginBottom: 48,
        marginTop: 50
    },
    pagination: {
        // position: 'absolute',
        bottom: 0,
        marginBottom: 12,
    },
});