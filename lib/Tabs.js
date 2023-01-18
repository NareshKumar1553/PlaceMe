import React from "react";
import { View,StyleSheet,Text, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import MainPage from "./MainPage";
import About from "./About";
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
        
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#ff00b3',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#f2ccff',
                    borderTopWidth: 0,
                    elevation: 5,
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    borderRadius: 15,
                    height: 85,
                    ...styles.shadow
                }
            }}
        >
             <Tab.Screen name="MainPage" component={MainPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <ImageBackground source={require('./assets/Icons/home1.png')} style={{ width: 30, height: 30 }} imageStyle={{ tintColor: focused ? '#e32f45' : '#748c94' }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Home</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Login" component={About}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground source={require('./assets/Icons/pro.png')} style={{ width: 30, height: 30 }} imageStyle={{ tintColor: focused ? '#e32f45' : '#748c94' }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Profile</Text>
                        </View>
                    )
                }} />
           
            <Tab.Screen name="About" component={About}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground source={require('./assets/Icons/About.png')} style={{ width: 30, height: 30 }} imageStyle={{ tintColor: focused ? '#e32f45' : '#748c94' }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>About</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
    }
    const styles = StyleSheet.create({
        shadow:{
            shadowColor:'#7f5df0',
            shadowOffset:{
                width:0,
                height:10,
            },
            shadowOpacity:2,
            shadowRadius:3.5,
            elevation:5,
        }
    });
export default Tabs;