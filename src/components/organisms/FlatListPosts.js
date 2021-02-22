import React, {useEffect} from "react";
import {FlatList, SafeAreaView, Text, View, StyleSheet} from "react-native";
import {Item} from "_atoms/Item";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "_store/actions/posts/posts";
import NewsView from "_molecules/NewsView";
import {SCREENS} from "_utils/screens";


export const FlatListPosts = ({navigation}) => {

    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        console.log(posts)
    }, [])

    const openUserProfile = (userId) => {
        // console.log('ОТКРЫВАЕМ ЮЕЗРА')
        navigation.navigate(SCREENS.USER_PROFILE, { user: userId})
    }

    const renderItem = ({item}) => (
        <NewsView news={item}
              // openUserProfile={openUserProfile}
        />
    );

    return (
        <SafeAreaView style={stylus.flatlist}>
            <FlatList data={posts} renderItem={renderItem} keyExtractor={item => item._id}/>
        </SafeAreaView>
    )
}


const stylus = StyleSheet.create({
    flatlist: {
        // flexGrow: 1,
        // height: '80%',
        marginBottom: 0,
    }
})