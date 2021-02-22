import React, {useEffect} from 'react';
import {Text, View, Button, StyleSheet, Pressable, Switch, ScrollView} from 'react-native';
import NewsView from "_molecules/NewsView";
import MyButton from "_atoms/MyButton";
import {CreateNewPost} from "_organisms/CreateNewPost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ButtonBottom} from "_atoms/ButtonBottom";
import {SCREENS} from "_utils/screens";
import {useDispatch, useSelector} from "react-redux";
import {getCurrent, logout, setToken} from "_store/actions/auth/auth";
import {ButtonSend} from "_atoms/ButtonSend";
import {FlatListPosts} from "_organisms/FlatListPosts";
import {useTheme} from "../context/ThemeStore";

const HomeScreen = ({navigation, route}) => {
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();
    const {user} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const toggleSwitch = (value) => {
        if(value){
            console.log('LIGHT');
            setLight()
        }else{
            console.log('DARK');
            setDark()
        }
    }

    useEffect(() => {

        const initialize = async() => {
            const token = await AsyncStorage.getItem('authToken')
            console.log('ВЫВОД ТОКЕНА ВО ВРЕМЯ ИНИЦИЛИЗАЦИИ ', token);
            if(token){
                dispatch(setToken(token))
            }
        }

        initialize();
    }, [])

    const logOut = () => {
        dispatch(logout())
    }

    const openUserProfile = () => {
        navigation.navigate(SCREENS.USER_PROFILE)
    }


    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Text style={styles.headerTitle}>{user.name}</Text>
                </View>
            ),

            headerRight: () => (
                <View style={{marginRight: 10,borderRadius:20,}}>
                    <Pressable
                        style={{borderRadius:8,
                            backgroundColor:'#4C83FF',
                            padding: 7,}}
                        title={'выйти'}
                        onPress={() => {
                            logOut();
                            navigation.navigate({name: SCREENS.REGISTER, params: { test: 24, test1: 43 }, key: 0 })
                        }
                        }>
                        <Text style={{color: '#FFFFFF', fontSize: 15,}}>Выйти</Text>
                    </Pressable>
                </View>
            )
        })
    })
    return (
        <View style={[styles.mainView,{backgroundColor: THEME_COLOR.MAIN_BG}]}>
            <View style={styles.toolbar}>
                <Text style={[styles.headerTitle,{color: THEME_COLOR.FONT_LABEL}]}>{user.name}</Text>
                <View style={[styles.logoutButton,{marginRight: 10,borderRadius:20,}]}>
                    <Pressable
                        style={{borderRadius:8,
                            position: 'relative',
                            display: "flex",
                            backgroundColor:THEME_COLOR.MAIN_COLOR,
                            padding: 8,
                            justifyContent: 'flex-end',
                            alignContent: 'center',
                        }}
                        title={'выйти'}
                        onPress={() => {
                            logOut();
                            navigation.navigate({name: SCREENS.REGISTER, params: { test: 24, test1: 43 }, key: 0 })
                        }
                        }>
                        <Text style={{color: '#FFFFFF', fontSize: 15,}}>Выйти</Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView>
                <View style={styles.toolbar}>
                    <Text style={{color:THEME_COLOR.FONT, marginRight: 5}}>Темная тема</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isLight ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isLight}/>
                </View>
                <FlatListPosts style={styles.flatList} navigation={navigation}/>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        flexGrow: 1,
        // flex:1,
        // justifyContent: 'center',
    },
    logoutButton: {
        justifyContent: 'flex-end',
        width: 'auto',
        // alignItems: 'right',
    },
    flatList: {
        flexBasis: 160,
        flexDirection: 'column',
        // height: 100,
        // marginBottom: 100,
    },
    button: {
        flexGrow:1,
    },
    mainView: {
        height: '80%',
        flexDirection: 'column',
        flexGrow: 6,
        marginTop: 30,
        // margin: 10,
        display: 'flex',
    },
    headerTitle: {
        justifyContent: 'flex-start',
        fontSize: 30,
        flexGrow: 5,
        fontWeight: '700',
    }
});

export default HomeScreen;
