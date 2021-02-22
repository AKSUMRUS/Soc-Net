export const findOne = (token) => ({
    type: 'FIND_ONE',
    rest: '/users/'+token,
    method: 'GET',
    query: {},
})

export const findAll = () => ({
    type: 'FIND_ALL',
    rest: '/users',
    method: 'GET',
    query: {},
})