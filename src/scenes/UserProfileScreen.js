import React, {useEffect} from "react";
import {Pressable, Text, View, StyleSheet, FlatList, ScrollView} from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {SCREENS} from "_utils/screens";
import NewsView from "_molecules/NewsView";
import {getUserPosts} from "_store/actions/posts/posts";
import {Icon} from "_atoms/Icon";
import {useTheme} from "../context/ThemeStore";

export const UserProfileScreen = ({navigation, route}) => {

    const {user: userId} = route.params;
    const {THEME_COLOR} = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        const inizialize = async() => {
            dispatch(getUserPosts(userId));
        }
        inizialize();
    },[])

    const user = useSelector(
        state => state.user.users?.length > 0
            ? state.user.users.find(usr => usr._id === userId)
            : null
    )

    const userPosts = useSelector(
        state => state.posts.list[userId]
    )


    const renderItem = ({item: post}) => (
        <NewsView news={post}/>
    )

    return (
        <ScrollView style={[stylus.mainView,{backgroundColor: THEME_COLOR.MAIN_BG}]}>
            <View style={stylus.nameUser}>
                <Icon color={THEME_COLOR.LIKE_COLOR} name={'user-circle'} size={40}/>
                <Text style={[stylus.accountName,{color: THEME_COLOR.FONT_LABEL}]}>{user.name}</Text>
            </View>

            <Text style={[stylus.someText,{color: THEME_COLOR.FONT}]}>Посты пользователя</Text>
            <FlatList style={stylus.flatList} data={userPosts} renderItem={renderItem}
                      keyExtractor={(item, index) => item?._id || index}/>
        </ScrollView>
    )
}


const stylus = StyleSheet.create({
    accountName: {
        // weight: 50,
        fontWeight: '700',
        fontSize: 30,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        flexDirection: 'column',
        flexGrow: 5,
    },
    nameUser: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    mainView: {
        flexDirection: 'column',
        flexGrow: 5,
    },
    someText: {
        fontSize: 23,
        margin: 10,
        color: 'gray',
    }
})
