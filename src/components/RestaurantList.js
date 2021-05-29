import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import Restaurant from "./Restaurant"

const RestaurantList = ({ title, restaurants }) => {
  if (!restaurants.length) {
    return <View />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={restaurants}
        renderItem={({ item }) => <Restaurant restaurant={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
})
export default RestaurantList
