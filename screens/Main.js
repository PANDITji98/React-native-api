import React from 'react'
import { Button, Text, View } from 'react-native'

const Main = ({navigation}) => {
  return (
    <View className="flex items-center justify-center h-[100vh]">
        <Text className="color-[#4338ca] text-4xl antialiased font-bold mb-20">Hi there!</Text>
        <Button title='To App' color="#4338ca" onPress={() =>
        navigation.navigate('Home')
      } />
    </View>
  )
}

export default Main