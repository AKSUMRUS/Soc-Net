import React from "react";
import {View} from "react-native";
import MyButton from "_atoms/MyButton";

const Counter = ({likeMain, dislikeMain, checkLike, checkDislike, onPressLike, onPressDislike}) => {



    return (
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <MyButton cnt={likeMain} title={checkLike ? 'like1' : 'like2'} onPress={onPressLike}>
            </MyButton>
            <MyButton cnt={dislikeMain} title={checkDislike ? 'dislike1' : 'dislike2'} onPress={onPressDislike}>
            </MyButton>
        </View>
    )
}

export default Counter;