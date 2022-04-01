import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import LoginPage from './src/pages/LoginPage';
import GamesListPage from './src/pages/GamesListPage';
import { UserProvider } from './src/contexts/user/UserContext';

const prefix = Linking.createURL('/');

const Stack = createStackNavigator();

const App = () => {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer linking={linking}>
      <UserProvider>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerMode: 'float' }}
        >
          <Stack.Screen
            options={{
              headerTitleAlign: 'center',
              title: 'Login',
              headerShown: false,
            }}
            name="LoginPage"
            component={LoginPage}
          />
          <Stack.Screen
            options={{
              headerTitleAlign: 'center',
              title: 'Games',
              // headerLeft: () => null,
            }}
            name="GamesListPage"
            component={GamesListPage}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
