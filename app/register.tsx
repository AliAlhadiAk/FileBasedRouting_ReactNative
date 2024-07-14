import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
      <Link href={'/login'} asChild>
      <Button title='Login'/>
      </Link>
    </View>
  )
}

export default Register