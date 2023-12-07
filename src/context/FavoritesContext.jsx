// React
import { createContext, useEffect, useState } from "react";
// Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextComponent = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("favorites");
        const favoritesArr = jsonValue != null ? JSON.parse(jsonValue) : [];
        setFavorites(favoritesArr);
      } catch (error) {
        throw error;
      }
    };

    getData();
  }, []);

  const handleFavorites = (pokemon) => {
    const exist = favorites.some((element) => element.id === pokemon.id);
    if (exist) {
      const newArr = favorites.filter((element) => element.id !== pokemon.id);
      setFavorites(newArr);
      storeData(newArr);
    } else {
      setFavorites([...favorites, pokemon]);
      storeData([...favorites, pokemon]);
    }
  };

  const storeData = async (value) => {
    try {
      let jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("favorites", jsonValue);
    } catch (error) {
      throw error;
    }
  };

  const data = { favorites, handleFavorites };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};
