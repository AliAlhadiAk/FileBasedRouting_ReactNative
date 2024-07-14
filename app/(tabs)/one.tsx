import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { runOnJS } from 'react-native-reanimated';

const Page = () => {
    const router= useRouter();
  return (
    <View>
      <Text>This is tab One</Text>
      <Button title='go  back' onPress={() => router.back()}/>
    </View>
  )
}

export default Page