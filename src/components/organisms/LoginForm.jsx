import { useState, useCallback, useContext } from 'react';
import Input from '../atoms/Input';
import ButtonLink from '../atoms/ButtonLink';
import Form from '../molecules/Form';
import { UserContext } from '../../contexts/user/UserContext';
import useResponsiveStyles from '../../hooks/responsiveStyle';

const LoginForm = () => {
  const styles = useResponsiveStyles(responsiveStyle);

  const [{ isLoading }, { login }] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    login({ username, password });
  };

  const forgotPassword = useCallback(() => {
    console.log('vish, esqueceu a senha');
  }, []);

  return (
    <Form
      callback={submitLogin}
      containerStyle={styles.container}
      buttonLabel="ENTRAR"
      hasLoading
      isLoading={isLoading}
    >
      <Input setText={setUsername} placeholder="Usuário" />
      <Input setText={setPassword} placeholder="Senha" isSecureText />
      <ButtonLink
        callback={forgotPassword}
        label="Esqueceu a senha?"
        style={styles.forgotLink}
      />
    </Form>
  );
};

const responsiveStyle = {
  web: {
    container: {
      width: '40%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    forgotLink: { marginTop: 10 },
  },
  mobile: {
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    forgotLink: { marginTop: 10 },
  },
};

export default LoginForm;
