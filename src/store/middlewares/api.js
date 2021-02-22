// type MiddleWareAPI = {disp
// type MiddleWare

import {BASE_URL} from "_utils/constants";

export const api = ({dispatch, getState}) => (next) => (action) => {
    console.log('test', action)
    if(!action.rest) {
        next(action)
        return ;
    }
    const {token} = getState().auth;
    let headers = {
        'Content-Type': 'application/json',
    }
    if(token) {
        headers = {
            ...headers,
            Authorization: `Bearer ${token}`
        }
    }
    const url = BASE_URL + action.rest

    next({
        ...action,
        type: action.type + '_START',
    })
    fetch(url, {
        method: action.method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: action.method === 'GET' ? undefined : JSON.stringify(action.query),
    }).then(async (response) => {
        const data = await response.json()
        console.log(response, data)
        if(response.status === 200) {
            next({
                data: data,
                type: action.type + '_SUCCESS',
                prevAction: action,
            })
        } else {
            next({
                status: response.status,
                error: data,
                type: action.type + '_FAIL',
                prevAction: action,
            })
        }
    }).catch((error) => {
        next({
            status: 500,
            error: error,
            type: action.type + '_FAIL',
            prevAction: action,
        })
        console.log(error)
    })
}
