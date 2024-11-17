import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const SignUpPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const db = useSQLiteContext();

  const handleSignUp = async () => {
    if (!username || !password) {
      Alert.alert('Warning!', 'All fields are required!');
      return;
    }
    try {
      const existingUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ?', [username]);
      if (existingUser) {
        Alert.alert('Error', 'Username already exists!');
        return;
      }
      await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during sign up!', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default SignUpPage;