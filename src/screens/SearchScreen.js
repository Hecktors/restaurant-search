import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [restaurants, setRestaurants] = useState([])

  const searchAPI = async () => {
    const response = await yelp("search", {
      params: {
        term,
        location: "NYC",
        limit: 50,
      },
    })
    setRestaurants(response.data.businesses)
  }

  return (
    <View>
      <SearchBar term={term} onChange={(newTerm) => setTerm(newTerm)} onSubmit={searchAPI} />
      <Text>We have found {restaurants.length} restaurants</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
