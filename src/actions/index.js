import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});

// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   // 链接错了 404，4-- client error, 403 - login permission
//   // server错了

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };
