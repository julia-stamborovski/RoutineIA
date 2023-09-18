import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Init/HomeScreen';
import FirstScren from './screens/Init/FirstScren';
import SecondScreen from './screens/Init/SecondScreen';
import FinishScreen from './screens/Init/FinishScreen';
import LetsStartScreen from './screens/Init/LetsStartScreen';

export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen name='First' component={FirstScren}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name='Finish' component={FinishScreen} />
        <Stack.Screen name='LetsStart' component={LetsStartScreen} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}