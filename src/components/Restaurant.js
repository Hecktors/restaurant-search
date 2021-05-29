import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

const Restaurant = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.text}>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginLeft: 15,
    width: 250,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  text: {
    color: "#999",
  },
})

export default Restaurant
