import React, { useContext } from "react";
// React Native
import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Components
import { FavoritesContext } from "../../../context/FavoritesContext";
import { PokemonCard } from "../../common/pokemonCard/PokemonCard";
// Styles
import { favoriteScreenStyles } from "./styles";

export function FavoritesScreen() {
  const { top } = useSafeAreaInsets();
  const { favorites } = useContext(FavoritesContext);
  return (
    <View style={{ top: top, alignItems: "center" }}>
      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={{ ...favoriteScreenStyles.title, top: top }}>
            Favorites
          </Text>
        }
      />
    </View>
  );
}
