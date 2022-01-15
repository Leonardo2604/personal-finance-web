const initialState = {
  sidebarIsOpen: false,
};

/* eslint default-param-last: ["off"] */
const appReducer = (state = initialState, action: any) => {
  console.log('App Reducer', action);
  return state;
};

export default appReducer;
