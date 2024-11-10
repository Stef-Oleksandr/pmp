import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PlayerCard = ({ player, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.playerName}>{player.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  playerName: {
    fontSize: 18,
  },
});

export default PlayerCard;