import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import person from "../assets/person.png";
import clock from "../assets/clock.png";
import { getLiveDate, useFetchData } from "../hooks/customHooks";

const Home = () => {

 const {data,error,isLoading} = useFetchData("https://stagingsite.livelaw.in/dev/h-api/news")

  return (
    <View>
      <ScrollView>
        {data &&
          data.map((values, index) => {
         
            return (
              <View
                key={index}
                className={`flex justify-between items-center flex-col h-[380px] w-[380px] bg-[#f3f3f3] p-1.5 rounded-[10px] border-[1.5px] border-solid border-[black] mt-[70px] ${data.length == index+1  ? "mb-[60px]" : ""}`}
              >
                <Text className="absolute z-10 [background:#ffab40] font-semibold text-[19px] pl-4 p-0.5 rounded-tr-md rounded-br-md left-[0px] top-[31px] [font-family:Arial,Helvetica,sans-serif] m-0">
                  India
                </Text>
                <Image
                  source={{
                    uri: values.mediaId
                      ? values.mediaId
                      : `https://api.slingacademy.com/public/sample-photos/${index + 1}.jpeg`,
                  }}
                  className="w-[97%] h-[250px] object-cover rounded-t-[9px] top-1"
                />
                <View className="flex flex-col w-[97%] gap-2">
                  <View className="h-[79px]">
                    <Text className="text-[23px] [font-family:Arial,Helvetica,sans-serif] m-0">
                    {values.description ? values.description : "The most dangerous bakugan in the world is here."}
                    </Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <View className="flex flex-row items-center gap-[3px]">
                      <Image source={person} className="w-[25px] h-[25px]" />
                      <Text className="font-semibold [font-family:Arial,Helvetica,sans-serif] m-0">
                      {values.authorName ? values.authorName : "Hocal Wire"}
                      </Text>
                    </View>
                    <View className="flex flex-row items-center gap-[3px]">
                      <Image source={clock} className="w-[25px] h-[25px]" />
                      <Text className="[font-family:Arial,Helvetica,sans-serif] m-0">
                        {getLiveDate(values)} hours Ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Home;


