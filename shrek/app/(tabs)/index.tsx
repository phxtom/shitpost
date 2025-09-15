import React from 'react'
import { ScrollView, Pressable, Text, View, StyleSheet } from 'react-native'

function index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.shrekView}>

        </View>
      </ScrollView>
      <View style={styles.resetView}>
        <Pressable style={styles.resetButton}>
          <Text style={styles.resetText}>
            Get out of my swamp
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shrekView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resetView: {
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#F00',
    maxWidth: '100%',
    height: 50,
    borderRadius: 25,
  },
  resetText: {
    fontFamily: 'arial',
    fontSize: 24,
    fontWeight: 'bold',
  },
})