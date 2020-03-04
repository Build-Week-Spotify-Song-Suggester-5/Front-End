import axios from "axios";

export const SONG_SEND = "POST_SEND";
export const RESULTS_FETCH = "RESULTS_FETCH";
export const RESULTS_SUCCESS = "RESULTS_SUCCESS";
export const RESULTS_FAILED = "RESULTS_FAILED";

export const saveResults = (data) => dispatch => {
    console.log("reaching this", data)
    axios
        .create({
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .post("/save", data)
        .then(response => {
            console.log("saveResults", response)
        })
        .catch(err => console.log(err))
}