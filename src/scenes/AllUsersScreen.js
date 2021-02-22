import React, {useEffect} from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {findAll} from "_store/actions/user/user";
import {UserView} from "_molecules/UserView";
import {FlatListUsers} from "_organisms/FlatListUsers";
import {SCREENS} from "_utils/screens";
import {useTheme} from "../context/ThemeStore";

export const AllUsersScreen = ({navigation, route}) => {

    const {THEME_COLOR} = useTheme();

    const openUserProfile = (userId) => {
        // console.log('ОТКРЫВАЕМ ЮЕЗРА')
        navigation.navigate(SCREENS.USER_PROFILE, { user: userId})
    }

    return (
        <ScrollView style={[styles.mainView,{backgroundColor: THEME_COLOR.MAIN_BG}]}>
            <Text style={[styles.headerTitle, {color: THEME_COLOR.FONT_LABEL}]}>Пользователи</Text>
            <FlatListUsers openUser={openUserProfile}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        justifyContent: 'flex-start',
        fontSize: 35,
        flexGrow: 5,
        margin: 10,
        marginTop: 40,
        fontWeight: '700',
    },
    mainView: {
    }
})
