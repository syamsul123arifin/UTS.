import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import About from '../screen/About';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab(){
  return(
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
    <Tab.Screen name="About" component={About} options={{headerShown: false}}/>
    <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    

  </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name='MainTab'
      component={MainTab}
      options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
