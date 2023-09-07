import React from "react";
import { View, Text, Image, Button } from "react-native";

const Error = () => {
  return (
    <View className="flex justify-between items-center flex-col mt-40">
      <Text className="color-[#4338ca] text-4xl antialiased font-bold">
        Oops!
      </Text>
      <Text className="color-[#6366f1] text-xl">
        Looks like some error has occured
      </Text>
      <Text className="color-[#6366f1] text-xl">
        Please try again after sometime
      </Text>
      <Image
        source={{ uri: "https://i.ibb.co/ck1SGFJ/Group.png" }}
        className="w-[300px] h-[300px] object-cover mt-20"
      />
    </View>
  );
};

export default Error;
