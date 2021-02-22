import React, {useState} from "react";
import {InputText, InputText2} from "_atoms/InputText";
import {Text, View, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {ButtonSend} from "_atoms/ButtonSend";
import {login, signUp} from "_store/actions/auth/auth";
import {TextMerge} from "_atoms/TextMerge";
import {useNavigation} from "../../context/NavigationStore";
import {SCREENS} from "_utils/screens";

export const LoginFormView = ({handleRegister}) => {
    const [Email, setEmail] = useState('Введите почту');
    const [Password, setPassword] = useState('Введите пароль');
    // const navigation = useNavigation();
    const onChangeEmail = text => {
        setEmail(text)
    }

    const onChangePassword = text => {
        setPassword(text)
    }

    const dispatch = useDispatch();

    const onLoginStart = () => {
        dispatch(login({
            email: Email,
            password: Password,
        }));
    }

    return (
        <View>
            <InputText placeholder={'Введите почту'} onChangeText={onChangeEmail}/>
            <InputText placeholder={'Введите пароль'} onChangeText={onChangePassword}/>
            <ButtonSend styleThis={styles.buttonBack} text={'Войти'} onPress={onLoginStart}/>
            <ButtonSend colorButton={'red'} styleThis={styles.buttonBack} text={'Нет аккаунта'} onPress={handleRegister}/>
            <TextMerge>{Email} {Password}</TextMerge>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonBack: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        color: 'white',
        padding: 6,
        fontSize: 22,
        borderRadius: 20,
        margin: 20,
    },
    view:{
        textAlign: 'center',
        justifyContent: 'center',

    }
})