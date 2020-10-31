const initState = {
    resume : null,
    isLoading : true, 
    resumeErr : null
}

//Different State Reducers for Resume Actions

const resumeReducers = (state = initState, actions) => {
    switch(actions.type){
        case 'RESUME_CREATED' : alert('Resume Created');
                                return {
                                    ...state,
                                    resume : actions.resume,
                                    isLoading : false,
                                    resumeErr : null
                                };
        case 'RESUME_LOADING' : return {
                                    ...state,
                                    resume : null,
                                    isLoading : true,
                                    resumeErr : null
                                };
        case 'RESUME_ERR' : return {
                                    ...state,
                                    resume : null,
                                    isLoading : false,
                                    resumeErr : actions.error 
                                };
        default : return state;
    }
}

export default resumeReducers;