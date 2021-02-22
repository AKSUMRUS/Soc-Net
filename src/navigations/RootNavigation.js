import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '_utils/screens';
import HomeScreen from '_scenes/HomeScreen';
import {useNavigation} from "../context/NavigationStore";
import {CreatePost} from "_scenes/CreatePost";
import {RegistrationScreen} from "_scenes/RegistrationScreen";
import {LoginScreen} from "_scenes/LoginScreen";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "_store/actions/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigation from "_navigations/Authentificated/AuthNavigation";
import UnAuthNavigation from "_navigations/unAuthentificated/UnAuthNavigation";
import {View} from "react-native";
import {useTheme} from "../context/ThemeStore";

const RootNavigation = () => {

    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();

    useEffect(() => {
        const initialize = async() => {
            const {token} = AsyncStorage.getItem('authToken')
            dispatch(setToken(token));
        }

        initialize();
    },[])

    return (
        token ? <AuthNavigation/> : <UnAuthNavigation/>
    );
};

export default RootNavigation;
