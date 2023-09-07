import React from "react";
import { Text, View } from "react-native";

const Loading = () => {
  return (
    <View className="mt-[400px]">
      <View className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-purple-500 border-t shadow-md"></View>
    </View>
  );
};

export default Loading;
