import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function HomeScreen(){

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )

}

const Stack = createStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component = {HomeScreen} />
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
