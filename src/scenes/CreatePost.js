import React from "react";
import {Text, View} from "react-native";
import {ButtonBottom} from "_atoms/ButtonBottom";
import {CreateNewPost} from "_organisms/CreateNewPost";

export const CreatePost = () => {
    return (
        <View style={{marginTop: 30}}>
            <CreateNewPost/>
        </View>
    )
}