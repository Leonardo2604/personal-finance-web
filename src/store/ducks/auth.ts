export const types = {
  ASYNC_REQUEST_USER: 'ASYNC_REQUEST_USER',
  USER_REQUEST_SUCCESS: 'USER_REQUEST_SUCCESS',
  USER_REQUEST_FAILURE: 'USER_REQUEST_FAILURE',
};

const initialState = {
  user: {},
  loading: false,
  error: null,
};

/* eslint default-param-last: ["off"] */
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ASYNC_REQUEST_USER:
      return {
        ...state,
        loading: true,
        user: {},
      };

    case types.USER_REQUEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case types.USER_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
