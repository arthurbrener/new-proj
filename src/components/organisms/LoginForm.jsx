import { memo, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../atoms/Input';
import ButtonLink from '../atoms/ButtonLink';
import Form from '../molecules/Form';

let styles;

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const submitLogin = useCallback(() => {
    console.log({ user, password });
    navigation.navigate('GamesList');
  }, [user, password]);

  const forgotPassword = useCallback(() => {
    console.log('vish, esqueceu a senha');
  }, []);

  return (
    <Form
      callback={submitLogin}
      containerStyle={styles.container}
      buttonLabel="LOGIN"
    >
      <Input setText={setUser} placeholder="Usuário" />
      <Input setText={setPassword} placeholder="Senha" isSecureText />
      <ButtonLink
        callback={forgotPassword}
        label="Esqueceu a senha?"
        style={styles.forgotLink}
      />
    </Form>
  );
};

styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotLink: { marginTop: 10 },
});

export default memo(LoginForm);
