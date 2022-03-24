import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';
import GamesListPage from './src/pages/GamesListPage';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
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
  </NavigationContainer>
);

export default App;
