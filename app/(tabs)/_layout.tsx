import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='one' options={{
            tabBarLabel:'One',
            headerTitle:'One'
        }}/>

             <Tabs.Screen name='two' options={{
            tabBarLabel:'Two',
            headerTitle:'Two'
        }}/>

       <Tabs.Screen name='posts' options={{
            tabBarLabel:'Posts',
            headerTitle:'Posts'
        }}/>
        
       
      

    </Tabs>
  )
}

export default _layout