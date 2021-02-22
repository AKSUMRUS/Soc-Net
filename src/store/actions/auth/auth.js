export const login = ({email,password}) => ({
    type: 'LOGIN',
    rest: '/auth/login',
    method: 'POST',
    query: {email,password}
})
export const signUp = ({name, lastName, email, password}) => ({
    type: 'SIGNUP',
    rest: '/auth/signup',
    method: 'POST',
    query: {name,lastName,email,password}
})
export const logout = () => ({
    type: 'LOGOUT',
    rest: '/auth/logout',
    method: 'GET',
    query: {},
})

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    token,
})

export const getCurrent = () => ({
    type: 'GET_CURRENT_USER',
    rest: '/users/me',
    method: 'GET',
    query: {},
})