import axios from "axios";
import { authorization, localBackendUrl, imageUrl } from "../../utility";
export const AUTHENTICATED  = "authenticated/getstatus";
export const GETLOGINSTART = "login/getall/start";
export const GETMOVIEDETAILSTART = "moviedetail/getall/start";
export const GETLOGINSUCCESS = "login/getall/success";
export const LOGOUT = "logout/success"
export const GETMOVIEDETAILSUCCESS = "moviedetail/getall/success";
export const GETLOGINFAILURE = "login/getall/failure";
export const GETMOVIEDETAILFAILURE = "moviedetail/getall/failure";

const getloginStart = () => ({
  type: GETLOGINSTART,
});

const getUserProfile  = (user) => ({
  type: AUTHENTICATED,
  payload: user
});

export const setAuthenticated = (loggedInUser) => (dispatch) => {
let user
dispatch(getloginStart());
console.log('authenticating', loggedInUser.token)
const headers = {
  'Authorization': `Bearer ${loggedInUser.token}`
}
axios
.get(`${localBackendUrl}/users/${loggedInUser.userId}`, {headers})
.then((response) => {
  user = response.data
  console.log('authenticatingworked',user);
  dispatch(getUserProfile(user))
})
.catch((err) => {
  dispatch(getloginFailure(err.response?.data?.error));
});

}

export const logout = () => {
localStorage.removeItem("user");
 return  {
  type: LOGOUT,
}};


const getloginSuccess = (result) => {
//   let moviesResult = {
//     page_no: result.page,
//     total_pages: result.total_pages,
//     movies: [],
//   };

  console.log(result)
//   result = result.results;
let user = result
console.log(user)
//   let user = result.map((result) => ({

//   }));

//   moviesResult.movies = movies;
  return {
    type: GETLOGINSUCCESS,
    payload: user,
  };
};

// const getMovieDetailSuccess = (result) => {
//   let movies = {
//     id: result.id,
//     name: result.name || result.title,
//     release_date: result.release_date || result.first_air_date,
//     backgroundImg: `${imageUrl}/t/p/original${result.backdrop_path}`,
//     image: `${imageUrl}/t/p/original${result.poster_path}`,
//     genre: result.genre,
//     rating: result.vote_average,
//     summary: result.overview,
//   };

//   return {
//     type: GETMOVIEDETAILSUCCESS,
//     payload: movies,
//   };
// };

const getloginFailure = (error) => ({
  type: GETLOGINFAILURE,
  payload: error,
});

// const getMovieDetailFailure = (error) => ({
//   type: GETMOVIEDETAILFAILURE,
//   payload: error,
// });

export const login = (email, password, setEmail,setPassword, navigate, page) => (dispatch) => {
  dispatch(getloginStart());
  axios
    .post(`${localBackendUrl}/login`, { email, password}, {
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then((response) => {
      dispatch(getloginSuccess(response.data));
      const user = {
        token: response.data.token,
        userId: response.data.user.id
      }
      localStorage.setItem('user', JSON.stringify(user)); 
      setEmail('');
      setPassword('');
      navigate(`${page}`);
    })
    .catch((err) => {
      dispatch(getloginFailure(err.response?.data?.error));
    });
};


// export const getMoviesDetails = (movieId) => (dispatch) => {
//   dispatch(getloginsStart());
//   axios
//     .get(`${url}/3/movie/${movieId}`, {
//       headers: {
//         Authorization: `${authorization}`,
//       },
//     })
//     .then((response) => {
//       dispatch(getMovieDetailSuccess(response.data));
//     })
//     .catch((err) => {
//       dispatch(getMovieDetailFailure(err.response?.data?.error));
//     });
// };

export default login;
