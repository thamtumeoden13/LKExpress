import { createStackNavigator } from 'react-navigation-stack';
// Trang chu
import Home from 'screens/home';

// Danh muc
import Category from 'screens/category';

// Đánh dấu
import Saved from 'screens/save';

// Tìm kiếm
import Search from 'screens/search';

// màn hình khoá
import Lock from 'screens/signIn/Lock';

export const HomeStack = createStackNavigator(
    {
        Home: Home,
        Lock: Lock
    },
);

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const CategoryStack = createStackNavigator(
    {
        Category: Category,
        Lock1: Lock
    }
);

CategoryStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const SavedStack = createStackNavigator(
    {
        Saved: Saved,
        Lock2: Lock
    }
);

SavedStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export const SearchStack = createStackNavigator(
    {
        Search: Search,
        Lock3: Lock
    }
);

SearchStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};