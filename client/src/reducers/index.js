import { FETCHING_SMURF, ADD_SMURF, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE } from './../actions/index'


export const initialState = {
    isFetching: false,
    error: '',
    smurfs: [
        {
            name: 'Smurf1',
            nickname: 'Smurfette',
            positionField: 'Treasurer'
        },
    ],
    newSmurf: {
        name: '',
        nickname: '',
        positionField: ''
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF:
            return {
                ...state
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                newSmurf: action.payload

            };
        case ADD_SMURF:
            const newSmurf = {
                name: action.payload,
                nickname: action.payload,
                positionField: action.payload
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            };
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                errorMessage: 'Woops! something went wrong.'
            }
        default:
            return state
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary