import React, {useState} from "react";
import {NewPostForm} from "_molecules/NewPostForm";
import {View, Text, StyleSheet} from "react-native";
import {ButtonSend} from "_atoms/ButtonSend";
import {useDispatch} from "react-redux";
import {createPost} from "_store/actions/posts/posts";
import {useTheme} from "../../context/ThemeStore";

export const CreateNewPost = () => {

    const [Title, setTitle] = useState('');
    const [TextPost, setTextPost] = useState('');
    const {THEME_COLOR} = useTheme();

    const dispatch = useDispatch();

    const onChangeTitle = text => {
        setTitle(text)
    }
    const onChangeText = text => {
        setTextPost(text)
    }

    const createNewPost = () => {
        console.log('ВЫВОД')
        dispatch(createPost({title: Title,body: TextPost}));
    }


    return(
        <View style={{backgroundColor:THEME_COLOR.MAIN_BG}}>
            <Text style={[styles.textMain,{color:THEME_COLOR.FONT_LABEL}]}>Опубликовать пост</Text>
            <NewPostForm Title={Title} Text={TextPost} onChangeText={onChangeText} onChangeTitle={onChangeTitle}/>
            <ButtonSend colorButton={THEME_COLOR.BUTTON_COLOR} text={'Создать'} styleThis={{marginTop: 100,}} onPress={createNewPost} />
        </View>
    )
}


const styles = StyleSheet.create({
    textMain: {
        fontSize: 35,
        margin: 10,
        marginTop: 40,
        fontWeight: '700',
    }
})
