import { StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import PageView from '../components/atoms/PageView';
import LoginForm from '../components/organisms/LoginForm';

let styles;
const logo = require('../../assets/logo.jpg');

const LoginPage = () => (
  <PageView style={styles.container}>
    <Text h4 style={styles.appTitle}>
      TONY COACH APP
    </Text>
    <Image style={styles.image} source={logo} />
    <LoginForm />
  </PageView>
);

styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  appTitle: { marginBottom: 20 },

  image: {
    marginBottom: 80,
    width: 88,
    height: 88,
  },
});

export default LoginPage;
