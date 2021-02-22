import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet} from "react-native";
import {useTheme} from "../../context/ThemeStore";


export const InputText = (props) => {
    const {THEME_COLOR} = useTheme();

    return (
        <View>
            <TextInput
                style={[styles.inputText,{height: props.height, color: THEME_COLOR.FONT, backgroundColor:THEME_COLOR.INPUT_BG}]}
                onChangeText={props.onChangeText}
                value = {props.textConstructor}
                placeholderTextColor={THEME_COLOR.FONT}
                placeholder={props.placeholder}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    inputText: {
        height: 50,
        fontSize:20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        marginRight: 10,
        marginTop: 10,
        borderRadius: 12,
        marginBottom: 5,
    },
})
