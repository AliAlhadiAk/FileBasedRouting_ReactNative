import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const PostDetails = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
        <Stack.Screen options={{
            headerTitle:'Posts Details'+id
        }}/>
      <Text>Post {id}</Text>
    </View>
  )
}

export default PostDetails

