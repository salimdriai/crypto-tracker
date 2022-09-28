import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Logo from '../assets/logo.png'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.h1}>Crypto tracker</Text>
        <Text style={styles.h2}>Providing crypto market info since 2021</Text>
      </View>
      <View style={styles.middleContainer}>
        <Image source={Logo} style={styles.image} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Explor market"
            onPress={() => navigation.navigate('Market', { name: 'Market' })}
            color="#fff"
          />
        </View>
      </View>
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
  h1: {
    color: '#4a3fbf',
    fontSize: 40,
    letterSpacing: 2,
  },
  h2: {
    color: '#333',
    fontSize: 18,
    marginTop: 8,
    letterSpacing: 1,
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#a33fbf',
    borderRadius: 16,
    padding: 8,
    margin: 8,
  },

  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    width: '90%',
  },
})
