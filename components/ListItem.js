import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  const {
    name,
    symbol,
    currentPrice,
    priceChangePercentage7d,
    logoUrl,
    onPress,
  } = props
  
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30'

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString('en-US', { currency: 'USD' })}
          </Text>
          <Text style={[styles.subtitle, { color: priceChangeColor }]}>
            {priceChangePercentage7d.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#A9ABB1',
  },
  rightWrapper: {
    alignItems: 'flex-end',
  },
})

export default ListItem
