import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Service from "./Service";
import Product from "./Product";
import ProductCompany from "./ProductCompany";
import MainPage from "./MainPage";
import Tabs from "./Navigation/Tabs";
const Stack = createNativeStackNavigator();
 const AppNavigation= () => {
    return(
<NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
    headerShown: false,
    animation:'slide_from_bottom',
    animationDuration: 4000,
  }}>
    <Stack.Screen
          name="Tabs"
          component={Tabs}
        />
      <Stack.Screen
       name="MainPage"
       component={MainPage}
       />
        <Stack.Screen 
        name="Product" 
        component={Product} 
        />
       <Stack.Screen
       name="Service"
        component={Service}
       />
       <Stack.Screen
       name="ProductCompany"
        component={ProductCompany}
       />
      </Stack.Navigator>
    </NavigationContainer>
    
    
);
    }
export default AppNavigation;