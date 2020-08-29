import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const ProgressBar = (props) => {

    let animation = useRef(new Animated.Value(0));

    const [progress, setProgress] = useState(0);
    // useInterval(() => {
    //     if (progress < 100) {
    //         setProgress(progress + 5);
    //     }
    // }, 1000);

    useEffect(() => {
        const progress = !!props.progress ? props.progress : 0
        Animated.timing(animation.current, {
            toValue: progress,
            duration: 100
        }).start();
    }, [props.progress])

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })

    return (
        <View style={styles.container}>
            <Text>
                Loading.....
            </Text>
            <View style={styles.progressBar}>
                <Animated.View
                    style={[StyleSheet.absoluteFill],
                    {
                        backgroundColor: "#8BED4F",
                        width: width, height: '100%'
                    }}
                >
                </Animated.View>
            </View>
            <Text>{`${progress}%`}</Text>
        </View>
    )
}

export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    }
})