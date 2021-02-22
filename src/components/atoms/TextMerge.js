import React from "react";
import {Text, View} from "react-native";

export const TextMerge = ({children}) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}