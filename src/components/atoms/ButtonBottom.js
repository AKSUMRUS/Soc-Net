import React from "react";
import {Button, View} from "react-native";

export const ButtonBottom = () => {
    return (
        <View style={{textAlign: 'flex-end'}}>
            <Button title={'Создать новый пост'}/>
        </View>
    )

}