import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import MainPage from './MainPage';
const Stack = createNativeStackNavigator();

const NavApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false,
    animation:'slide_from_bottom',
    animationDuration: 4000,
  }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainPage" component={MainPage} />
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavApp;