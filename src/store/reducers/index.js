import { postsReducer } from './posts/postsReducer';
import { authReducer } from './auth/authReducer';
import {userReducer} from "_store/reducers/user/userReducer";

// const userReducer = (state, action) => {
//     switch (action.type) {
//         case 'TEST_ACTION_2':
//             console.log('test', state, action);
//             return state;
//     }
//     return {};
// };

export const rootReducer = {
    posts: postsReducer,
    auth: authReducer,
    user: userReducer,
};
