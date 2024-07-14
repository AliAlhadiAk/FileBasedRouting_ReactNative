import { View, Text, Button } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const HomePage = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
        <StatusBar style='light'/>
      <Text>HomePage</Text>
      <Link href={'/register'}asChild>
      <Button title='Register page'/>
      </Link>
      <Link href={'/one'}asChild>
      <Button title='page one'/>
      </Link>
    </View>
  )
}

export default HomePage