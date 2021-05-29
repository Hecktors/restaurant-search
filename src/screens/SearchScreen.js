import React, { useState } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import useRestaurants from "../hooks/useRestaurants"
import RestaurantList from "../components/RestaurantList"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const { restaurants, errorMsg, searchAPI } = useRestaurants()

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((r) => r.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onChange={(newTerm) => setTerm(newTerm)}
        onSubmit={() => searchAPI(term)}
      />
      {errorMsg ? <Text style={styles.text}>errorMsg</Text> : null}
      <ScrollView>
        <RestaurantList title="$" restaurants={filterRestaurantsByPrice("$")} />
        <RestaurantList title="$$" restaurants={filterRestaurantsByPrice("$$")} />
        <RestaurantList title="$$$" restaurants={filterRestaurantsByPrice("$$$")} />
        <RestaurantList title="$$$$" restaurants={filterRestaurantsByPrice("$$$$")} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: 15,
  },
})

export default SearchScreen
