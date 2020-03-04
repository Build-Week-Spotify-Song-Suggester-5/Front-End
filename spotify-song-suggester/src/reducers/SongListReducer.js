import { SONG_SEND, RESULTS_FETCH, RESULTS_SUCCESS, RESULTS_FAILED } from '../actions/formActions';


const initialState = {
    song: [],
    results: [],
    isFetching: true,
    error: ""
}

export const SongListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SONG_SEND:
            return {
                ...state,
                track_name: action.payload,
                isFetching: false,
                error: ""
            };
        case RESULTS_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case RESULTS_SUCCESS:
                console.log(action.payload);
            return {
                ...state,
                results: action.payload,
                isFetching: false,
                error: ""
            };
        case RESULTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
    
}