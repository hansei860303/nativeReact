import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {MainScreen} from './src/MainScreen01';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return(
      <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Main" component={MainScreen} 
              options={{title:'メモ帳'}}/>
              </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
}