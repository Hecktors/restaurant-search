import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="md-search-sharp" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    flexDirection: "row",
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: "#F0EEEE",
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 10,
    fontSize: 35,
    color: "black",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
})

export default SearchBar
