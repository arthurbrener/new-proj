import { createContext, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import UserReducer, { actions, defaultUser } from './UserReducer';

const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } = actions;

const handleAuth = async (dispatch, data, navigation) => {
  dispatch({ type: LOGIN });
  const response = await { success: true };

  if (response?.success) {
    dispatch({ type: LOGIN_SUCCESS, data });
    navigation.navigate('GamesListPage');
  } else {
    dispatch({
      type: LOGIN_FAILURE,
      data: {
        data,
        errors: ['Usuário e/ou senha inválidos.'],
      },
    });
    console.log('erooooooou');
  }
};

const UserContext = createContext([defaultUser, {}]);
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, {
    ...defaultUser,
  });
  const navigation = useNavigation();

  const contextActions = useRef({
    login: async ({ username, password }) =>
      handleAuth(
        dispatch,
        {
          username,
          password,
        },
        navigation,
      ),
  });

  return (
    <UserContext.Provider value={[state, contextActions.current]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserProvider, actions };
