import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            title:'Posts'
        }}/>
                <Stack.Screen name='[id]' options={{
            title:'Post details'
        }}/>
    </Stack>
  )
}

export default _layout