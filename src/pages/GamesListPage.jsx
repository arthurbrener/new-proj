import { useContext } from 'react';
import { Text } from 'react-native-elements';
import PageView from '../components/atoms/PageView';
import GamesList from '../components/organisms/GamesList';
import { UserContext } from '../contexts/user/UserContext';
import useResponsiveStyles from '../hooks/responsiveStyle';

const GamesListPage = () => {
  const styles = useResponsiveStyles(responsiveStyle);
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

const responsiveStyle = {
  text: { marginBottom: 10 },
};

export default GamesListPage;
