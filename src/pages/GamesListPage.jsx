import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import PageView from '../components/atoms/PageView';
import GamesList from '../components/organisms/GamesList';

let styles;

const GamesListPage = () => (
  <PageView>
    <Text style={styles.text} h4>
      Bem-vindo, Tony!
    </Text>
    <GamesList />
  </PageView>
);

styles = StyleSheet.create({
  text: { marginBottom: 10 },
});

export default GamesListPage;
