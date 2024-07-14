import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Posts = () => {
  return (
    <View>
      <Link href={'/posts/1'}>open post 1</Link>
      <Link href={'/posts/2'}>open post 2</Link>
      <Link href={'/posts/3'}>open post 3</Link>

    </View>
  )
}

export default Posts