import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TeamCard from '../components/TeamCard';

const TeamsPage = ({ navigation }) => {
  const teams = [
    { id: '1', name: 'Team Spirit', image: 'https://kappa.lol/I6hT_' },
  { id: '2', name: 'Team Falcons', image: 'https://kappa.lol/b0o9V' },
  { id: '3', name: 'Natus Vincere', image: 'https://kappa.lol/f35R1' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <TeamCard 
            team={item} 
            onPress={() => navigation.navigate('PlayerDetails', { teamId: item.id })} 
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  list: {
    paddingBottom: 20,
  },
});

export default TeamsPage;