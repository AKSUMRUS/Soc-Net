import {Text, View, StyleSheet, Pressable, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import Counter from "_molecules/Counter";
import {useDispatch, useSelector} from "react-redux";
import {findOne} from "_store/actions/user/user";
import {dislike, like} from "_store/actions/posts/posts";
import {setToken} from "_store/actions/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTheme} from "../../context/ThemeStore";

const NewsView = ({news, openUserProfile}) => {
    const {user} = useSelector(state => state.auth)
    const [likeMain,setLike] = useState(news.likes);
    const [dislikeMain,setDislike] = useState(news.dislikes);
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();

    const [checkLike, setCheckLike] = useState(news.userLikes.indexOf(user._id) != -1);
    const [checkDislike, setCheckDislike] = useState(news.userDislikes.indexOf(user._id) != -1);

    const dispatch = useDispatch();

    const onPressLike = () => {
        if (!checkLike){
            dispatch(like(news._id));
            setLike(likeMain + 1);
            setCheckLike(true);
        }else {
            alert('Вы уже оценили пост')
        }
    }
    const onPressDislike = () => {
        if (!checkLike){
            dispatch(dislike(news._id));
            setDislike(dislikeMain + 1);
            setCheckDislike(true);
        }else {
            alert('Вы уже оценили пост')
        }
    }



    return (
        <View style={[styles.main,{backgroundColor:THEME_COLOR.POST_COLOR}]}>
            <View>
                <Text style={[styles.title,{color: THEME_COLOR.FONT_LABEL}]}>{news.title}</Text>
                <Text style={[styles.text,{color: THEME_COLOR.FONT}]}>{news.body}</Text>
                <Pressable onPress={openUserProfile}>
                    <Text style={[styles.author,{color: THEME_COLOR.FONT}]}>Автор: {user.name ? user.name : 'Нету'}</Text>
                </Pressable>
            </View>
            <Counter checkLike={checkLike} checkDislike={checkDislike} likeMain={likeMain} dislikeMain={dislikeMain} onPressLike={onPressLike} onPressDislike={onPressDislike}/>
        </View>
    )
}


export default NewsView;


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: '700',
        color: '#000000',
    },
    main: {
        padding: 15,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 2,
    },
    author: {
        color: 'black',
        fontSize: 16,
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,

        letterSpacing: 0.16,

        color: 'rgba(0, 0, 0, 0.87)',
    }
});
