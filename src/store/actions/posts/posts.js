export const getPosts = () => ({
    type: 'GET_POSTS',
    rest: '/posts/',
    method: 'GET',
    query: {},
});


export const createPost = ({title,body}) => ({
    type: 'CREATE',
    rest: '/posts',
    method: 'POST',
    query: {title, body},
})

export const like = (token) => ({
    type: "LIKE",
    rest: '/posts/' + token + '/like',
    method: 'POST',
    query: {},
})

export const dislike = (token) => ({
    type: "DISLIKE",
    rest: '/posts/' + token + '/dislike',
    method: 'POST',
    query: {},
})

export const getUserPosts = (token) => ({
    type: "GET_USER_POSTS",
    rest: '/posts/user/' + token,
    userId: token,
    method: 'GET',
    query: {},
})