import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfilePage = ({ route, navigation }) => {
  const { user } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user}</Text>
      <Button title="Log Out" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default ProfilePage;