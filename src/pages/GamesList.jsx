import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import PageView from '../components/atoms/PageView';
import FilterableList from '../components/organisms/FilterableList';

let styles;

const GamesList = () => (
  <PageView>
    <Text style={styles.text} h4>
      Bem-vindo, Tony!
    </Text>
    <FilterableList />
  </PageView>
);

styles = StyleSheet.create({
  text: { marginBottom: 10 },
});

export default GamesList;
