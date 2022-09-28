import React from 'react'
import Home from './screens/Home'
import List from './screens/List'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Market" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
