const LOGIN = 'userdata/LOGIN';
const USERID = 'userdata/USERID';

export const login = () => ({type: LOGIN, payload: true});
export const userid = (id) => ({type: USERID, payload: id});

//TODO 후에 Conversation 추가
const initalState = {isLogin: false, userId: ""};

const UserData = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLogin: action.payload };
        case USERID:
            return { ...state, userId: action.payload };
        default:
            return state;
    }
}

export default UserData;
