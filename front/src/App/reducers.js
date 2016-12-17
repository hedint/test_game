import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux';
import defaultReducer from './reducers/DefaultReducer.js';
import initialState from './Helpers/InitialState.js';
import createNamedWrapperFunction from '../Common/Helpers/CreateNamedWrapperReducer';

import dailyDietReducer from '../DailyDiet/reducers.js';

const reducers = {
    children: createNamedWrapperFunction(defaultReducer, initialState, 'Childs'),
    routing: routerReducer,
    child_tests : createNamedWrapperFunction(defaultReducer, initialState, 'ChildTest'),
    med_examinations : createNamedWrapperFunction(defaultReducer, initialState, 'MedExamination'),
    products : createNamedWrapperFunction(defaultReducer, initialState, 'Product'),
    daily_diet : createNamedWrapperFunction(dailyDietReducer, initialState, 'DailyDiet')
};

export default combineReducers(reducers);