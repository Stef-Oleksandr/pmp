import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PlayerDetailsPage = ({ route }) => {
  const { teamId } = route.params; // отримуємо id команди

  // Масиви гравців для кожної команди
  const players = {
    '1': ['Satanic', 'Larl', 'Collapse', 'rue', 'Miposhka'], // Team Spirit
    '2': ['skiter', 'Malr1ne', 'ATF', 'Cr1t-', 'Sneyking'], // Team Falcons
    '3': ['Yuragi', 'sanctity', 'nefrit', 'Zayac', 'Malady'], // Natus Vincere
  };

  const teamNames = {
    '1': 'Team Spirit',
    '2': 'Team Falcons',
    '3': 'Natus Vincere',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Players for {teamNames[teamId]}</Text>
      <FlatList
        data={players[teamId]}
        renderItem={({ item }) => (
          <Text style={styles.playerName}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.playerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  playerList: {
    alignItems: 'flex-start', // Вирівнюємо список гравців ліворуч
  },
  playerName: {
    fontSize: 20,
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%', // Займає всю ширину
    textAlign: 'center', // Центруємо текст
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Для Android
    borderWidth: 1,
    borderColor: '#ddd', // Додаємо рамку
    fontFamily: 'serif', // Змінюємо шрифт (переконайтеся, що шрифт доступний)
  },
});

export default PlayerDetailsPage;