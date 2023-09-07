import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Error from "./screens/Error";
import Main from "./screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home"  options={{title: 'News'}} component={Home} />
        <Stack.Screen name="Error" options={{title: 'Error'}} component={Error} />
        <Stack.Screen name="Main" options={{title: 'Welcome'}} component={Main} />
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
