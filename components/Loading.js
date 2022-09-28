import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <Text>Please wait ...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Loading
