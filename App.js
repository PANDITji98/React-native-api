import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}