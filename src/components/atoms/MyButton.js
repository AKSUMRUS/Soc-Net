import {Pressable, Text, View, StyleSheet} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import {useTheme} from "../../context/ThemeStore";

const MyButton = ({cnt, title, onPress}) => {
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();

    return (
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 2, marginTop:10,}}>
            <Text style={[styles.text,{color: THEME_COLOR.FONT}]}>{cnt}</Text>
            <Pressable onPress={onPress} style={({pressed}) => ({
                padding:12,
                width: 50,
                opacity: pressed ? 0.3 : 0.9,
                backgroundColor: pressed ? 'transparent' : 'transparent',
            })}>
                <AntDesign name={title} size={22} color={THEME_COLOR.LIKE_COLOR} style={{backgroundColor:'transparent'}}/>
            </Pressable>
        </View>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    buttonLike: {
        width: 30,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        /* identical to box height, or 150% */

        display: 'flex',
        flexDirection: 'row',
        fontWeight: '700',
        alignItems: 'flex-end',
        letterSpacing: 0.16,
        paddingLeft: 12,
        paddingBottom: 0,
        paddingTop: 15,
        paddingRight: 5,
        color: '#000000',
    }
});
