import * as React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function HomeScreen(){

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="詳細へ" onPress={() =>navigation.navigate('Detail')} />
    </View>
  );
}

function DetailScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button title="戻る" onPress={() =>navigation.navigate('Home')} />
    </View>
  );

}

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name= "Home" component = {HomeScreen} options={{ title:'ホーム'}} />
        <Stack.Screen name= "Detail" component = {DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
