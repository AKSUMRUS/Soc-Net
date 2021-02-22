import React from "react";
import {Button, Pressable, Text, View, StyleSheet} from "react-native";


export const ButtonSend = ({text,styleThis, onPress, colorButton}) => {
    return (
        <View>
            <Pressable onPressOut={onPress} style={({pressed}) => ({
                opacity: pressed ? 0.8 : 1,
            })}>
                <Text style={[styles.buttonBack,{backgroundColor: colorButton ? colorButton : '#3587ef'}]}>{text}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonBack: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#28C76F',
        color: 'white',
        padding: 6,
        fontSize: 22,
        borderRadius: 15,
        elevation: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'gray',
        fontSize: 30,
        margin: 20,
        textAlign: 'center',
        justifyContent: 'center',
    }
})