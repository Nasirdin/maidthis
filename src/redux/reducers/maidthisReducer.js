import axios from 'axios'

const COVID = 'COVID';

const initialState = {
    covidData: [],
    postedCovid : []
};

const defFunc = (state = initialState, action) => {
    switch(action.type){
        case COVID : {
            return {...state, covidData: action.covidData}
        }
        default: return state
    }
}

export const  getCovid = () => {
    return (dispatch) => {
        axios('http://localhost:8090/api/Covid')
            .then(({data}) => dispatch({type: COVID, covidData: data}))
    }
}

export default defFunc