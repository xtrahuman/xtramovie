import axios from "axios";
import { localBackendUrl } from "../../utility";
export const GETRATINGSTART = "rating/moviedetail/start";
export const POSTRATINGSTART = "rating/post/start";
export const DELETERATINGSTART = "rating/delete/start";
export const GETRATINGSUCCESS = "rating/moviedetail/success";
export const DELETERATINGSUCCESS = "rating/delete/success";
export const POSTRATINGSUCCESS = "rating/post/success";
export const GETRATINGFAILURE = "rating/moviedetail/failure";
export const POSTRATINGFAILURE = "rating/post/failure";
export const DELETERATINGFAILURE = "rating/delete/failure";

const getRatingStart = () => ({
  type: GETRATINGSTART,
});

const postRatingStart = () => ({
  type: POSTRATINGSTART,
});

// const deleteRatingStart = () => ({
//   type: DELETERATINGSTART,
// });

const getRatingSuccess = (result) => {
  return {
    type: GETRATINGSUCCESS,
    payload: result,
  };
};

const postRatingSuccess = (result) => {
  let message = result.message;

  return {
    type: POSTRATINGSUCCESS,
    payload: message,
  };
};

// const deleteRatingSuccess = (result) => {
//   let message = result.message;

//   return {
//     type: DELETERATINGSUCCESS,
//     payload: message,
//   };
// };

const getRatingFailure = (error) => ({
  type: GETRATINGFAILURE,
  payload: error,
});

const postRatingFailure = (error) => ({
  type: POSTRATINGFAILURE,
  payload: error,
});

// const deleteWatchlistFailure = (error) => ({
//   type: DELETERATINGFAILURE,
//   payload: error,
// });

export const submitRating = (usertoken, ratingInfo, setRating,findRate,userId) => (dispatch) => {
  dispatch(postRatingStart());
  const headers = {
    Authorization: `Bearer ${usertoken}`,
  };
  axios
    .post(`${localBackendUrl}/ratings`, ratingInfo, {
      headers,
    })
    .then((response) => {
      console.log("working");
      dispatch(postRatingSuccess(response.data));
      dispatch(getMovieRating(usertoken, ratingInfo.movie_id, setRating, findRate, userId));
      setTimeout(function () {
        dispatch(postRatingSuccess({ message: null }));
      }, 4000);
    })
    .catch((err) => {
      dispatch(postRatingFailure(err.response?.data?.error));
    });
};

export const getMovieRating = (usertoken, movie_id, setRating,findRate,userId) => (dispatch) => {
  dispatch(getRatingStart());

  const requestData = {
    movie_id,
  };

  // Create a query string from the requestData object
  const queryString = Object.keys(requestData)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(requestData[key])}`
    )
    .join("&");

  // Append the query string to the URL
  const apiUrl = `${localBackendUrl}/movie_ratings`
  const urlWithQuery = `${apiUrl}?${queryString}`;
  const headers = {
    Authorization: `Bearer ${usertoken}`,
  };
  axios
    .get(`${urlWithQuery}`, {
      headers,
    })
    .then((response) => {
      dispatch(getRatingSuccess(response.data));
      setRating(findRate(response.data.movie_ratings,userId))
    })
    .catch((err) => {
      dispatch(getRatingFailure(err.response?.data?.error));
    });
};

// export const deleteWatchlist = (usertoken, listId, user_id) => (dispatch) => {
//   dispatch(deleteRatingStart());
//   console.log(user_id)
//   const headers = {
//     Authorization: `Bearer ${usertoken}`,
//   };
//   axios
//     .delete(
//       `${localBackendUrl}/ratings/${listId}`,
//       {
//         headers: headers,
//         data: {'user_id': user_id}
//     }
//     )
//     .then((response) => {
//       console.log("working");
//       dispatch(deleteRatingSuccess(response.data));
//       dispatch(getMovieRating(usertoken, ratingParams));
//     })
//     .catch((err) => {
//       dispatch(deleteWatchlistFailure(err.response?.data?.error));
//     });
// };

export default submitRating;
