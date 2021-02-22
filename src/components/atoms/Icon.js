import React from "react";
import {Pressable, View} from "react-native";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";

export const Icon = ({name,size,color}) => {
    return (
        <View>
            <Pressable>
                {/*<FontAwesome name="user-circle" size={24} color="black" />*/}
                <FontAwesome name={name} size={size} color={color} />
            </Pressable>
        </View>
    )
}