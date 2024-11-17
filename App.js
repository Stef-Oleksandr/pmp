import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SQLiteProvider } from 'expo-sqlite';

import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PlayerDetailsPage from './pages/PlayerDetailsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const initializeDatabase = async (db) => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      );
    `);
    console.log('Database initialized!');
  } catch (error) {
    console.error('Database initialization failed', error);
  }
};

const App = () => {
  return (
    <SQLiteProvider databaseName="auth.db" onInit={initializeDatabase}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUpPage} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Teams" component={TeamsPage} />
            <Stack.Screen name="PlayerDetails" component={PlayerDetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SQLiteProvider>
  );
};

export default App;