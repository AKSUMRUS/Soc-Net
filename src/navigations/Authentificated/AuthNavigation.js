import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "_scenes/HomeScreen";
import {SCREENS} from "_utils/screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CreateNewPost} from "_organisms/CreateNewPost";
import {UserProfileScreen} from "_scenes/UserProfileScreen";
import {AllUsersScreen} from "_scenes/AllUsersScreen";
import {useTheme} from "../../context/ThemeStore";
import {EditTable} from "_scenes/EditTable";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={SCREENS.HOME} component={HomeScreen} options={{headerShown: false,}}/>
            <HomeStack.Screen name={SCREENS.USER_PROFILE} component={UserProfileScreen} />
        </HomeStack.Navigator>
    );
}

const UsersStack = createStackNavigator();

function UsersStackScreen() {
    const {THEME_COLOR} = useTheme();
    return (
        <UsersStack.Navigator>
            <UsersStack.Screen style={{backgroundColor: THEME_COLOR.MAIN_BG}}
                               name={SCREENS.ALL_USERS}
                               component={AllUsersScreen}
                               options={{headerShown: false}} />
            <UsersStack.Screen style={{backgroundColor: THEME_COLOR.MAIN_BG}}
                               name={SCREENS.USER_PROFILE}
                               component={UserProfileScreen}
                               options={{
                                    headerStyle: {
                                        backgroundColor: THEME_COLOR.MAIN_BG,
                                    },
                                    headerTitleStyle: {
                                        color: THEME_COLOR.FONT_LABEL,
                                    },
                                    headerTintColor: THEME_COLOR.LIKE_COLOR,
                                    headerTitleAlign: 'center',
                                }}/>
        </UsersStack.Navigator>
    );
}


const AuthNavigation = () => {
    const {THEME_COLOR} = useTheme();
    return (
        <Tab.Navigator sceneContainerStyle={{backgroundColor: THEME_COLOR.MAIN_BG}} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === SCREENS.HOME) {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home';
                } else if (route.name === SCREENS.CREATE_POST) {
                    iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
                } else if (route.name === SCREENS.ALL_USERS) {
                    iconName = focused ? 'md-people' : 'md-people';
                }

                return <Ionicons name={iconName} size={size} color={THEME_COLOR.MAIN_COLOR} />;
            },
        })}
                       tabBarOptions={
                           {
                               activeBackgroundColor: THEME_COLOR.MAIN_BG,
                               inactiveBackgroundColor: THEME_COLOR.MAIN_BG,
                               activeTintColor: 'tomato',
                               inactiveTintColor: 'gray',
                           }}>
            <Tab.Screen name={SCREENS.HOME} component={HomeStackScreen}/>
            <Tab.Screen style={{backgroundColor: THEME_COLOR}} name={SCREENS.CREATE_POST} component={CreateNewPost}/>
            <Tab.Screen name={SCREENS.ALL_USERS} component={UsersStackScreen}/>
            <Tab.Screen name={SCREENS.TABLE} component={EditTable} options={{headerShown: false,}}/>
        </Tab.Navigator>
    )

}
export default AuthNavigation;












