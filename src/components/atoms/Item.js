import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const Item = ({title, text}) => {
    return (
        <View style={stylus.item}>
            <Text style={stylus.title}>{title}</Text>
            <Text style={stylus.text}>{text}</Text>
        </View>
    )
}

const stylus = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        shadowColor: 'black',
        shadowRadius: 10,
        margin: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
    }
})