const defaultUser = {
  id: -1,
  profilePicUrl: '',
  username: '',
  isCoach: false,
  isLoggedIn: false,
  isRegistered: false,
  isLoading: false,
  keepLoggedIn: true,
};

const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const UserReducer = (state, { type, data }) => {
  switch (type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        ...data,
        isLoading: false,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
export { actions, defaultUser };
