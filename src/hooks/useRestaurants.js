import { useState, useEffect } from "react"
import yelp from "../api/yelp"

export default function useRestaurant() {
  const [restaurants, setRestaurants] = useState([])
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    searchAPI("pasta")
  }, [])

  const searchAPI = async (term) => {
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

  return { restaurants, errorMsg, searchAPI }
}
