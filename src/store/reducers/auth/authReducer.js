import {createReducer} from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    isLoading: false,
    user: null,
    token: null,
    errors: null,
}

export const authReducer = createReducer(initialState,{
    LOGIN_START: (state,action) => {
        state.isLoading = true
        return state;
    },

    LOGIN_SUCCESS: (state, {data: {user,token} } ) => {
        console.log('ВЫВОД ТОКЕНА ЮЗЕРА ', token)
        AsyncStorage.setItem('authToken',token)
        state.isLoading = false
        state.token = token
        state.user = user
        state.errors = null
        return state;
    },

    LOGIN_FAIL: (state, action) => {
        state.isLoading = false
        state.errors = action.error;
        return state;
    },

    SIGNUP_START: (state) => {
        state.isLoading = true;
        return state;
    },

    SIGNUP_SUCCESS: (state, {data: {user, token}}) => {
        AsyncStorage.setItem('authToken', token)
        return {
            errors: null,
            isLoading: false,
            token,
            user
        };
    },

    SIGNUP_FAIL: (state,action) => {
        state.isLoading = false;
        state.errors = action.errors;
        return state;
    },

    LOGOUT: (state,action) => {
        state.isLoadin= true
        return state;
    },

    LOGOUT_SUCCESS: (state, action) => {
        state.isLoading = false
        state.user = null
        state.token = null
        return state;
    },

    LOGOUT_FAIL: (state, action) => {
        state.errors = action.error
        state.isLoading = false
        return state;
    },

    SET_TOKEN: (state, action) => {
        state.token = action.token;
        return state;
    },


    GET_CURRENT_USER_START: (state, action) => {
        state.isLoading = true
        return state;
    },

    GET_CURRENT_USER_SUCCESS: (state, { data: {user,token} } ) => {
        // console.log('Вывод юзера\n', user)
        // console.log('Вывод имени юзера ', user.name)
        state.user = user;
        state.token = token;
        state.isLoadinыg = false;
        state.errors = null;
        return state;
    },
    GET_CURRENT_USER_FAIL: (state, action) => {
        if(action.status === 401) {
            state.token = null;
        }
        state.isLoading = false;
        state.error = action.error;
        return state;
    },
})