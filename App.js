import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import GamesList from './src/pages/GamesList';

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
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          title: 'Games',
          // headerLeft: () => null,
        }}
        name="GamesList"
        component={GamesList}
      />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default App;
