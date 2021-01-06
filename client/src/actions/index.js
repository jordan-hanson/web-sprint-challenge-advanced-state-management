import axios from 'axios';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';


export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_SMURF })

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data, 'get smurf server & add smurf')
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCHING_SMURF_FAILURE, payload: err })
        })
}

export const addSmurf = (formValues) => dispatch => {

    axios
        .post("http://localhost:3333/smurfs", formValues)
        .then(res => {
            console.log(res, 'post smurf')
            dispatch({ type: ADD_SMURF, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.