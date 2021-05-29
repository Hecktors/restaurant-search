import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("")
  console.log(searchTerm)
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onSubmit={() => console.log("term was submitted")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
