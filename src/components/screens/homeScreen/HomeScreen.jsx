import React from "react";

// React Native Imports
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Components
import { usePokemonPaginate } from "../../../hooks/usePokemonPaginate";
import { PokemonCard } from "../../common/pokemonCard/PokemonCard";

// Styles
import { homeScreenStyles } from "./styles";

export function HomeScreen() {
  const { pokemonList, loadPokemons } = usePokemonPaginate();
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require("../../assets/pokebola.png")}
        style={{ ...homeScreenStyles.bgPokeball }}
      />
      {pokemonList.length > 0 && (
        <View style={homeScreenStyles.containerList}>
          <FlatList
            data={pokemonList}
            numColumns={2}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            ListHeaderComponent={
              <Text
                style={{
                  ...homeScreenStyles.title,
                  top: top,
                  marginBottom: 40,
                  paddingBottom: 10,
                }}
              >
                Pokedex
              </Text>
            }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <ActivityIndicator style={{ height: 200 }} size={50} />
            }
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.3}
          />
        </View>
      )}
    </>
  );
}
