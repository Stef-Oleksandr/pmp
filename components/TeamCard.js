import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TeamCard = ({ team, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: team.image }} style={styles.image} />
      <Text style={styles.teamName}>{team.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Центруємо вміст
  },
  image: {
    width: 100, // Встановіть ширину зображення
    height: 100, // Встановіть висоту зображення
    borderRadius: 50, // Зробіть зображення круглим
    marginBottom: 10, // Додайте відступ між зображенням і назвою команди
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default TeamCard;