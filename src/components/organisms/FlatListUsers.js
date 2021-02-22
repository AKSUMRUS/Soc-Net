import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAll} from "_store/actions/user/user";
import {UserView} from "_molecules/UserView";
import {FlatList, SafeAreaView, Text} from "react-native";
import {useTheme} from "../../context/ThemeStore";

export const FlatListUsers = ({openUser}) => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.user);
    const {THEME_COLOR} = useTheme();

    useEffect(() => {
        dispatch(findAll());
        // console.log(users)
    }, [])

    const renderItem = ({item}) => (
        <UserView userName={item.name} userId={item._id} openUser={openUser}/>
    )

    return (
        <SafeAreaView>
            <FlatList data={users} renderItem={renderItem} style={{paddingBottom: 20,}}
                      keyExtractor={(item, index) => item?._id || index}/>
        </SafeAreaView>
    )
}
