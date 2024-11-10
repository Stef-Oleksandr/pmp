import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PlayerDetailsPage from './pages/PlayerDetailsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Teams" component={TeamsPage} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;