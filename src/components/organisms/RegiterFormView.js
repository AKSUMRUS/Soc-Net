import React, {useState} from "react";
import {InputText} from "_atoms/InputText";
import {Text, View, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {ButtonSend} from "_atoms/ButtonSend";
import {signUp} from "_store/actions/auth/auth";
import {TextMerge} from "_atoms/TextMerge";
import {useNavigation} from "../../context/NavigationStore";
import {SCREENS} from "_utils/screens";

export const RegiterFormView = ({handleLogin, goBack}) => {
    const [Name, setName] = useState('Введите имя');
    const [Email, setEmail] = useState('Введите почту');
    const [Password, setPassword] = useState('Введите пароль');


    const onChangeName = text => {
        setName(text)
    }

    const onChangeEmail = text => {
        setEmail(text)
    }

    const onChangePassword = text => {
        setPassword(text)
    }

    const dispatch = useDispatch();

    const onSignUpStart = () => {
        dispatch( signUp({
            name: Name,
            lastName: Name,
            email: Email,
            password: Password,
        }));
        console.log("dispatch")
    }

    return (
        <View>
            <InputText placeholder={'Введите имя'} onChangeText={onChangeName}/>
            <InputText placeholder={'Введите почту'} onChangeText={onChangeEmail}/>
            <InputText placeholder={'Введите пароль'} onChangeText={onChangePassword}/>
            <ButtonSend styleThis={styles.buttonBack} text={'Зарегистрироваться'} onPress={onSignUpStart}/>
            <ButtonSend styleThis={styles.buttonBack} text={'Войти'} onPress={handleLogin}/>

        </View>
    )
}


const styles = StyleSheet.create({
    view:{
        textAlign: 'center',
        justifyContent: 'center',
    }
})