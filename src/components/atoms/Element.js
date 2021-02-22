import React from "react";
import {Pressable, View} from "react-native";

export const Element = ({text, onPress}) => {

    return (
        <View>
            <Pressable onPress={onPress}>{text}</Pressable>
        </View>
    )
}
