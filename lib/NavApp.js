import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import MainPage from './MainPage';
import ServiceList from './ServiceList';
import Details from './Details';
import SplashScreen from 'react-native-splash-screen';
import Saran from './Saran';
import About from './About';
import Tabs from './Tabs';

import Anim from './AnimationLib';
import ProductList from './ListDis';
import Testing from './Testing';
const Stack = createNativeStackNavigator();
const NavApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false,
    animation:'slide_from_bottom',
    animationDuration: 4000,
  }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Product" component={ProductList} />
      <Stack.Screen name="Service" component={ServiceList} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Test" component={Testing} />
      <Stack.Screen name="Anim" component={Anim} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavApp;