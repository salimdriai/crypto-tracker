import React, { useRef, useMemo, useState, useEffect } from 'react'
import { FlatList, StyleSheet, Button, View, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'
import Chart from '../components/Chart'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'

import { getMarketData } from '../services/cryptoService'
import Loading from '../components/Loading'

export default function List() {
  const [data, setData] = useState([])
  const [selectedCoinData, setSelectedCoinData] = useState(null)

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData()
      setData(marketData)
    }

    fetchMarketData()
  }, [])

  const bottomSheetModalRef = useRef(null)

  const snapPoints = useMemo(() => ['50%'], [])

  const openModal = (item) => {
    setSelectedCoinData(item)
    bottomSheetModalRef.current?.present()
  }

  const closeModal = () => bottomSheetModalRef.current.close()

  return (
    <BottomSheetModalProvider>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={
                  item.price_change_percentage_7d_in_currency
                }
                logoUrl={item.image}
                onPress={() => openModal(item)}
              />
            )}
          />
        </SafeAreaView>
      )}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <Button onPress={closeModal} title="close" color="#333" />
        {selectedCoinData ? (
          <Chart
            currentPrice={selectedCoinData.current_price}
            logoUrl={selectedCoinData.image}
            name={selectedCoinData.name}
            symbol={selectedCoinData.symbol}
            priceChangePercentage7d={
              selectedCoinData.price_change_percentage_7d_in_currency
            }
            sparkline={selectedCoinData?.sparkline_in_7d.price}
          />
        ) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
