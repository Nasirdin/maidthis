import {combineReducers} from "redux";
import pokemons from './maidthisReducer';

const rootReducer = () => combineReducers({pokemons});

export default rootReducer;