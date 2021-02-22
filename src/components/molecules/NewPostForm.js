import React, {useEffect, useState} from "react";
import {InputText} from "_atoms/InputText";
import {View, Text, AsyncStorage} from "react-native";
import {TextMerge} from "_atoms/TextMerge";

export const NewPostForm = ({Title, Text, onChangeTitle, onChangeText}) => {

    return (
        <View>
            <InputText onChangeText={onChangeTitle} placeholder={'Введите название'} height={50}/>
            <InputText onChangeText={onChangeText} placeholder={'Введите описание'} height={250}/>
        </View>

    )
}