import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert
} from 'react-native';
import {
    CarouselMainLayout,
    CarouselMomentumLayout,
    CarouselStackLayout,
    CarouselTinderLayout,
    CarouselCustomLayout
} from 'components/carousel/layout';
import { ENTRIES1, ENTRIES2 } from 'constants/entries';
import DrawerIcon from 'components/common/icon/DrawerIcon'
import BagIcon from 'components/common/icon/BagIcon'
import HeaderTitle from 'components/common/Header/HeaderTitle'

export default class Category extends Component {

    static navigationOptions = () => {
        return {
            headerLeft: () => <DrawerIcon />,
            headerRight: () => <BagIcon />,
            headerTitle: () => <HeaderTitle title={`Danh mục`} />,
        };
    };
    componentDidMount() {
        // let postersData = posters()
        // let categoriesData = categories()
        // categoriesData.map(category => {
        //     const child = postersData.filter(poster => { return poster.categoryID === category.id })
        //     category.posters = child
        //     return category
        // })

        // this.setState({ categoriesData, postersData })

        // console.log(categoriesData, postersData)
    }

    componentWillUnmount() {
        // this.focusListener.remove();
        // this.didBlurListener.remove();
        // clearInterval(this.interval);
    }

    onPressItem = (item, index) => {
        Alert.alert('CarouselCustomLayout', `You've clicked ${item.title}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <CarouselCustomLayout
                        data={ENTRIES1}
                        title={`Custom Layout `}
                        subtitle={`Animation of cards layout | Loop`}
                        onPressItem={this.onPressItem}
                    />
                    <CarouselCustomLayout
                        data={ENTRIES2}
                        title={`Custom Layout `}
                        subtitle={`Animation of cards layout | Loop`}
                        onPressItem={this.onPressItem}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: '#eff1f4',
    },
});