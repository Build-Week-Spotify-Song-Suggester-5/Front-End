import axiosWithAuth from "../utils/axiosWithAuth";

// Login State
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";



// export const userLogin = credentials => dispatch => {
//   dispatch({ type: LOGIN_START, payload: credentials }); // Payload = creds
//   axiosWithAuth()
//     .post("/auth/login", credentials) // TODO Need correct endpoints
//     .then(res => {
//       // Store token
//       localStorage.setItem("token", res.data.token);
//       dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token } });
//     })
//     .catch(err => {
//       console.log("Error from Login:", err);
//       dispatch({ type: LOGIN_FAILURE, payload: err.data }); // Payload = err msg
//     });
// };

// Fetching Music from API
export const FETCH_MUSIC_START = "FETCH_MUSIC_START";
export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_FAIL = "FETCH_MUSIC_FAIL";

export const getSong = id => dispatch => {
  dispatch({ type: FETCH_MUSIC_START });
  axiosWithAuth()
    .get(`/${id}`) //TODO Need to get correct endpoint and see how the search is going to get the music from backend. May not be by ID
    .then(response => {
      dispatch({ type: FETCH_MUSIC_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_MUSIC_FAIL, payload: err });
      console.log("Error: ", err);
    });
};

// Posting Favorites List

export const CREATE_FAVORITE_START = 'CREATE_FAVORITE_START';
export const CREATE_FAVORITE_SUCCESS = 'CREATE_FAVORITE_SUCCESS'
export const CREATE_FAVORITE_FAILURE = 'CREATE_FAVORITE_FAILURE'
export const addFavorite = song => dispatch => {
  axiosWithAuth()
    .post("/stories", song) // TODO Need endpoint for saving favorite song
    .then(response => {
      console.log('response from POST', response);
      dispatch({ type: CREATE_FAVORITE_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({type: CREATE_FAVORITE_FAILURE, payload: error}))
};

// Deleting Favorite
export const DELETE_FAVORITE_START = 'CREATE_FAVORITE_START';
export const DELETE_FAVORITE_SUCCESS = 'CREATE_FAVORITE_SUCCESS'
export const DELETE_FAVORITE_FAILURE = 'CREATE_FAVORITE_FAILURE'

export const deleteFavorite = id => dispatch => {
  axiosWithAuth()
    .delete(`/delete/${id}`) // TODO update with correct endpoint and ensure the id is something we have access to in the data
    .then(response => {
      console.log('response from DELETE', response);
      dispatch({ type: DELETE_FAVORITE_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({type: DELETE_FAVORITE_FAILURE, payload: error}))
};