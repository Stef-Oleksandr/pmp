import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Головний екран
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StefPedia</Text>
      <Button title="Перейти до ДОТА 2" onPress={() => navigation.navigate('Dota')} />
      <Button title="Перейти до КС 2" onPress={() => navigation.navigate('CS')} />
      <Button title="Перейти до VALORANT" onPress={() => navigation.navigate('Valorant')} />
      <Button title="Перейти до LOL" onPress={() => navigation.navigate('LOL')} />
      <StatusBar style="auto" />
    </View>
  );
}

// Сторінка ДОТА 2
function DotaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ДОТА 2</Text>
      <Text>гравці</Text>
      <Text>команди</Text>
      <Text>турніри</Text>
      <Button title="Повернутися на головну" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// Сторінка КС 2
function CSScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>КС 2</Text>
      <Text>гравці</Text>
      <Text>команди</Text>
      <Text>турніри</Text>
      <Button title="Повернутися на головну" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// Сторінка VALORANT
function ValorantScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VALORANT</Text>
      <Text>гравці</Text>
      <Text>команди</Text>
      <Text>турніри</Text>
      <Button title="Повернутися на головну" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// Сторінка LOL
function LOLScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOL</Text>
      <Text>гравці</Text>
      <Text>команди</Text>
      <Text>турніри</Text>
      <Button title="Повернутися на головну" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// Основний компонент App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dota" component={DotaScreen} />
        <Stack.Screen name="CS" component={CSScreen} />
        <Stack.Screen name="Valorant" component={ValorantScreen} />
        <Stack.Screen name="LOL" component={LOLScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Стилі
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});