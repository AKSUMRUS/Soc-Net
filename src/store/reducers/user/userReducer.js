import {createReducer} from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    isLoading: false,
    user: null,
    users: [],
    errors: null,
}

export const userReducer = createReducer(initialState, {

    FIND_ONE_START: (state, action) => {
        state.isLoading = true
        return state;
    },

    FIND_ONE_SUCCESS: (state, { data: user }) => {
        console.log('Вывод другого юзера\n', user)
        console.log('Вывод имени юзера другого', user.name)
        state.user = user;
        state.isLoading = false;
        state.errors = null;
        return state;
    },
    FIND_ONE_FAIL: (state, action) => {
        if(action.status === 401) {
            state.token = null;
        }
        state.isLoading = false;
        state.error = action.error;
        return state;
    },

    FIND_ALL_START: (state, action) => {
        state.isLoading = true;
        return state;
    },

    FIND_ALL_SUCCESS: (state, action) => {
        state.users = action.data;
        state.errors = null
        state.isLoading = false;
        return state;
    },

    FIND_ALL_FAIL: (state, action) => {
        state.errors = action.error;
        state.isLoading = false;
        return state;
    },

})