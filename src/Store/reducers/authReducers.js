const initState = {}

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

        default : return state;
    }
}

export default authReducer;