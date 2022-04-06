import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './src/pages/LoginPage';
import GamesListPage from './src/pages/GamesListPage';
import { UserProvider } from './src/contexts/user/UserContext';
import Header from './src/components/organisms/Header';

const prefix = Linking.createURL('/');

const Stack = createStackNavigator();

const App = () => {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <UserProvider>
          <Header />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerMode: 'screen' }}
          >
            <Stack.Screen
              options={{
                // headerTitleAlign: 'center',
                // title: 'Login',
                headerShown: false,
              }}
              name="login"
              component={LoginPage}
            />
            <Stack.Screen
              options={{
                // headerTitleAlign: 'center',
                // title: 'Games',
                // headerLeft: () => null,
                headerShown: false,
              }}
              name="gameslist"
              component={GamesListPage}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </UserProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
