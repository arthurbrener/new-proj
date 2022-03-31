import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import PageView from '../components/atoms/PageView';
import GamesList from '../components/organisms/GamesList';
import { UserContext } from '../contexts/user/UserContext';

let styles;

const GamesListPage = () => {
  const [{ username }] = useContext(UserContext);

  return (
    <PageView>
      <Text style={styles.text} h4>
        Bem-vindo, {username}!
      </Text>
      <GamesList />
    </PageView>
  );
};

styles = StyleSheet.create({
  text: { marginBottom: 10 },
});

export default GamesListPage;
