import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    posts: [],
    list: {},
    errors: null,
};

export const postsReducer = createReducer(initialState, {
    TEST_ACTION: (state, action) => {
        // console.log(state, action);
        return state;
    },
    GET_POSTS_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    GET_POSTS_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.posts = action.data;
        return state;
    },
    GET_POSTS_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },

    CREATE_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    CREATE_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.posts = action.data;
        return state;
    },
    CREATE_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },

    LIKE_START: (state, action) => {
        state.isLoading = true;
        return state;
    },

    LIKE_SUCCESS: (state, action) => {
        state.isLoading = false;
        // state.posts = action.data;
        return state;
    },

    LIKE_FAIL: (state, action) => {
        state.isLoading = true;
        state.errors = action.error;
        return state;
    },
    DISLIKE_START: (state, action) => {
        state.isLoading = true;
        return state;
    },

    DISLIKE_SUCCESS: (state, action) => {
        state.isLoading = false;
        // state.posts = action.data;
        return state;
    },

    DISLIKE_FAIL: (state, action) => {
        state.isLoading = true;
        state.errors = action.error;
        return state;
    },

    GET_USER_POSTS_START: (state, action) => {
        state.isLoading = true;
        return state;
    },

    GET_USER_POSTS_SUCCESS: (state, action) => {
        state.list[action.prevAction.userId] = action.data;
        state.isLoading = false;
        return state;
    },

    GET_USER_POSTS_FAIL: (state, action) => {
        state.errors = action.error
        state.isLoading = false;
        return state;
    },
});
