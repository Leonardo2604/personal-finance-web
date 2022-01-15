import Action from '../../interfaces/action';
import TokenData from '../../interfaces/token-data';
import User from '../../interfaces/user';

export const types = {
  SET_TOKEN_DATA: 'SET_TOKEN_DATA',
  SET_USER: 'SET_USER',
};

const initialState = {
  tokenData: {},
  user: {},
};

/* eslint default-param-last: ["off"] */
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_TOKEN_DATA:
      return {
        ...state,
        tokenData: action.payload,
      };

    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export const setTokenData = (tokenData: TokenData): Action<TokenData> => ({
  type: types.SET_TOKEN_DATA,
  payload: tokenData,
});

export const setUser = (user: User): Action<User> => ({
  type: types.SET_USER,
  payload: user,
});

export default authReducer;
