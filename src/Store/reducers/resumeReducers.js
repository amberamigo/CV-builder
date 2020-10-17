const initState = {
    resumes : [
        {id:1, name:'Resume1'},
        {id:2, name:'Resume2'},
        {id:3, name:'Resume3'},
    ]
}

const resumeReducers = (state = initState, actions) => {
    switch(actions.type){
        case 'CREATE_RESUME' : console.log('Resume Created');
                                return state;
        case 'CREATE_RESUME_ERR' : alert('Error In Creating Resume');
                                    return state;
        default : return state;
    }
}

export default resumeReducers;