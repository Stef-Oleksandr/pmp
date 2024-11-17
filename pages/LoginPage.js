import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const db = useSQLiteContext();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Warning!', 'All fields are required!');
      return;
    }
    try {
      const validUser = await db.getFirstAsync(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password]
      );
      if (validUser) {
        Alert.alert('Success', 'You have logged in successfully!');
        // Перенаправляємо на головну сторінку (HomePage)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        Alert.alert('Error', 'Invalid username or password!');
      }
    } catch (error) {
      console.error('Error during login!', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default LoginPage;