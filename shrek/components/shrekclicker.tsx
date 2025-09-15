import React from 'react'
import { ScrollView, Pressable, Text, View, StyleSheet } from 'react-native'

const [shrekCount, setShrekCount] = useState(0)

function shrekclicker() {
  return (
    <Pressable>

    </Pressable>
  )
}

export default shrekclicker

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shrekView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
})