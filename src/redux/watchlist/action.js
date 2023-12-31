import axios from "axios";
import { localBackendUrl } from "../../utility";
export const GETWATCHLISTSTART = "watchlist/getall/start";
export const POSTWATCHLISTSTART = "watchlist/post/start";
export const DELETEWATCHLISTSTART = "watchlist/delete/start";
export const GETWATCHLISTSUCCESS = "watchlist/getall/success";
export const DELETEWATCHLISTSUCCESS = "watchlist/delete/success";
export const POSTWATCHLISTSUCCESS = "watchlist/post/success";
export const GETWATCHLISTFAILURE = "watchlist/getall/failure";
export const POSTWATCHLISTFAILURE = "watchlist/post/failure";
export const DELETEWATCHLISTFAILURE = "watchlist/delete/failure";

const getWatchlistStart = () => ({
  type: GETWATCHLISTSTART,
});

const postWatchlistStart = () => ({
  type: POSTWATCHLISTSTART,
});

const deleteWatchlistStart = () => ({
  type: DELETEWATCHLISTSTART,
});

const getWatchlistSuccess = (result) => {
  let watchlists = result.bookmarks;

  return {
    type: GETWATCHLISTSUCCESS,
    payload: watchlists,
  };
};

const postWatchlistSuccess = (result) => {
  let message = result.message;

  return {
    type: POSTWATCHLISTSUCCESS,
    payload: message,
  };
};

const deleteWatchlistSuccess = (result) => {
  let message = result.message;

  return {
    type: DELETEWATCHLISTSUCCESS,
    payload: message,
  };
};

const getWatchlistFailure = (error) => ({
  type: GETWATCHLISTFAILURE,
  payload: error,
});

const postWatchlistFailure = (error) => ({
  type: POSTWATCHLISTFAILURE,
  payload: error,
});
const deleteWatchlistFailure = (error) => ({
  type: DELETEWATCHLISTFAILURE,
  payload: error,
});

export const submitWatchlist = (usertoken, watchlist) => (dispatch) => {
  dispatch(postWatchlistStart());
  const headers = {
    Authorization: `Bearer ${usertoken}`,
  };
  axios
    .post(`${localBackendUrl}/watchlists`, watchlist, {
      headers,
    })
    .then((response) => {
      console.log("working");
      dispatch(postWatchlistSuccess(response.data));
      dispatch(getWatchlist(usertoken));
      setTimeout(function () {
        dispatch(postWatchlistSuccess({ message: null }));
      }, 4000);
    })
    .catch((err) => {
      dispatch(postWatchlistFailure(err.response?.data?.error));
    });
};

export const getWatchlist = (usertoken) => (dispatch) => {
  dispatch(getWatchlistStart());
  const headers = {
    Authorization: `Bearer ${usertoken}`,
  };
  axios
    .get(`${localBackendUrl}/watchlists`, {
      headers,
    })
    .then((response) => {
      console.log("working");
      dispatch(getWatchlistSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getWatchlistFailure(err.response?.data?.error));
    });
};

export const deleteWatchlist = (usertoken, listId, user_id) => (dispatch) => {
  dispatch(deleteWatchlistStart());
  console.log(user_id)
  const headers = {
    Authorization: `Bearer ${usertoken}`,
  };
  axios
    .delete(
      `${localBackendUrl}/watchlists/${listId}`,
      {
        headers: headers,
        data: {'user_id': user_id}
    }
    )
    .then((response) => {
      console.log("working");
      dispatch(deleteWatchlistSuccess(response.data));
      dispatch(getWatchlist(usertoken));
    })
    .catch((err) => {
      dispatch(deleteWatchlistFailure(err.response?.data?.error));
    });
};

export default submitWatchlist;
