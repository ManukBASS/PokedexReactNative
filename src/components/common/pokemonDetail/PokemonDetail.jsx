import React from "react";
// React Native
import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
// Styles
import { pokemonDetailStyles } from "./styles";

// ? Minuto 41:10 5to video !!

export function PokemonDetail({ pokemon }) {
  console.log(pokemon);
  return (
    <ScrollView style={StyleSheet.absoluteFillObject}>
      <View style={pokemonDetailStyles.container}>
        <Text>Types</Text>
        <View>
          {pokemon.types?.map(({ type }) => (
            <Text key={type.name}>{type.name}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
