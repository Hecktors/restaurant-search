import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [restaurants, setRestaurants] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  const searchAPI = async () => {
    try {
      const response = await yelp("search", {
        params: {
          term,
          location: "NYC",
          limit: 50,
        },
      })
      setRestaurants(response.data.businesses)
      setErrorMsg("")
    } catch (err) {
      setErrorMsg("Something went wrong...")
    }
  }

  return (
    <View>
      <SearchBar term={term} onChange={(newTerm) => setTerm(newTerm)} onSubmit={searchAPI} />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found {restaurants.length} restaurants</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
