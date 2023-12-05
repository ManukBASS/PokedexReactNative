import React from "react";

// React Native Imports
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import { pokemonCardStyles } from "./styles";

export function PokemonCard({ pokemon }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // * Navegamos a la screen deseada y pasamos el objeto del componente para recuperarlo en la screen
      onPress={() =>
        navigation.navigate("PokemonScreen", { pokemonSelected: pokemon })
      }
    >
      <View
        style={{
          ...pokemonCardStyles.cardContainer,
          backgroundColor: pokemon.color,
        }}
      >
        <Text style={pokemonCardStyles.name}>
          #{pokemon.id} {pokemon.name}
        </Text>
        <View style={pokemonCardStyles.pokeballContainer}>
          <Image
            source={require("../../assets/pokebola-blanca.png")}
            style={pokemonCardStyles.pokeball}
          />
        </View>
        <Image
          source={{ uri: pokemon.picture }}
          style={pokemonCardStyles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
}
