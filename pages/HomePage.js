import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://kappa.lol/xa_Yl' }} // Замініть на URL вашого фону
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Esports Hub</Text>
        <Button
          title="View Teams"
          onPress={() => navigation.navigate('Teams')}
          color="#841584"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // напівпрозорий фон
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default HomePage;