import { useContext } from 'react';
import { Header as RNEHeader } from 'react-native-elements';
import { UserContext } from '../../contexts/user/UserContext';

const Header = () => {
  const [{ isLoggedIn }] = useContext(UserContext);

  return (
    isLoggedIn && (
      <RNEHeader
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          iconStyle: { color: '#fff' },
        }}
        // centerComponent={{ text: 'Title', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
  );
};

export default Header;
