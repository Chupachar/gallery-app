import {
    ACTION_INCREMENT,
    ACTION_DELETE,
    ACTION_CREATE_LIST,
    ACTION_DELETE_LIST
} from "../actions/actions";

const initialState = {
    likes: 0,
    photos: [],
    tableList: []
};

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_CREATE_LIST:
            return {
                ...state,
                tableList: [...state.tableList, payload]
            };
        case ACTION_DELETE_LIST:
            return {
                ...state,
                tableList: state.tableList.filter((item) => item.id !== payload)
            };
        case ACTION_INCREMENT:
            return {
                ...state,
                updatedAt: Date.now(),
                likes: state.likes + 1 };
        case ACTION_DELETE:
            return {
                ...state,
                photos: state.photos.filter((item) => item.id !== payload) };
        default:
            return state;
    }
}

