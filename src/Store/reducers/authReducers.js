const initState = {}

// Different State Reducers for authentication

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERR' : 
            console.log('Login Error');
            return {
                ...state,
                authError : action.error.message,
            };
        case 'LOGIN_SUCCESS' : 
            console.log('Logged In!!');
            return {
                ...state,
                authError : null,
            };

        case 'LOGOUT_SUCCESS' : 
            console.log('Logged Out');
            return state;
        case 'LOGOUT_ERR' :
            console.log('Logout Error');
            return state; 

        case 'SIGNUP_SUCCESS' :
            console.log('Signed Up!!');
            return {
                ...state,
                authError : null,
            };
        case 'SIGNUP_ERR' :
            console.log('SignUp Error');
            return {
                ...state,
                authError : action.error.message,
            };
        case 'LINK_SENT' : 
            return {
                ...state,
                authMsg : 'Verification Link Sent To Your Registered Email'
            };
        case 'LINK_ERR' :
            return {
                ...state,
                authMsg : action.error
            };
        case 'PASS_RESLINK_SENT' :
            return {
                ...state,
                authError : action.msg
            };
        case 'PASS_RESLINK_ERR' :
            return {
                ...state,
                authError : action.error
            }
        default : return state;
    }
}

export default authReducer;