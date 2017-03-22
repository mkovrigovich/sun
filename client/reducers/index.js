import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash';

const data = (state = 5, action) => {
    return state;
};

const name = (state = 'John', action) => {
    return state;
};

const age = (state = 20, action) => {
    return state;
};

const mix = combineReducers({name, age});

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: _.max(_.map(state, (todo) => todo.id)),
                    text: action.data.text,
                    completed: false
                }
            ];
        case 'REMOVE_TODO':
            return _.filter(state, (todo) => todo.id != action.data.id);
        case 'TOGGLE_TODO':
            return _.map(state, (todo) => {
                return todo.id == action.data.id
                    ? {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            });
        default:
            return state;
    }
}

export default combineReducers({
    todos,
    data,
    mix,
    form: formReducer
});