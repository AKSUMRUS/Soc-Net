import React from "react";
import {RegiterFormView} from "_organisms/RegiterFormView";
import {View} from "react-native";
import {SCREENS} from "_utils/screens";

export const RegistrationScreen = ({navigation}) => {
    const goToLogin = () => {
        navigation.navigate(SCREENS.LOGIN)
    }

    const onBack = () => {
        navigation.goBack();
    }

    return(
        <View>
            <RegiterFormView handleLogin={goToLogin} goBack={onBack}/>
        </View>
    )
}