import React from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";
import {Icon} from "_atoms/Icon";
import {useTheme} from "../../context/ThemeStore";

export const UserView = ({userName, userId, openUser}) => {
    const {THEME_COLOR} = useTheme();

    return (
        <View>
            <Pressable  style={[stylus.main,{backgroundColor: THEME_COLOR.POST_COLOR}]} onPress={() => {
                openUser(userId)
            }}>
                <Icon color={THEME_COLOR.LIKE_COLOR} name={'user-circle'} size={40}/>
                <Text style={[stylus.userName,{color: THEME_COLOR.FONT}]}>{userName}</Text>
            </Pressable>
        </View>
    )
}

const stylus = StyleSheet.create({
    userName: {
        fontWeight: '500',
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    main: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        backgroundColor: 'white',
        elevation: 2,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    }
})
