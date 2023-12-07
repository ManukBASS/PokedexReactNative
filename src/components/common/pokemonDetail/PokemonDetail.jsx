import React from "react";
// React Native
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
// Functions
import { pokemonTypeIconGetter } from "./typeIconGetter";
// Styles
import { pokemonDetailStyles } from "./styles";
// Icons
import { FontAwesome } from "@expo/vector-icons";

export function PokemonDetail({ pokemon }) {
  const typesCount = pokemon.types?.length || 0;
  return (
    <ScrollView
      style={StyleSheet.absoluteFillObject}
      showsVerticalScrollIndicator={false}
    >
      <View style={pokemonDetailStyles.container}>
        <View style={pokemonDetailStyles.typeAndWeightContainer}>
          <View>
            <Text style={pokemonDetailStyles.title}>Types</Text>
            <View style={pokemonDetailStyles.typesContainer}>
              {pokemon.types?.map(({ type }, index) => (
                <Image
                  key={type.name}
                  source={pokemonTypeIconGetter(type.name)}
                  style={{
                    ...pokemonDetailStyles.typeIcon,
                    marginRight: index < typesCount - 1 ? 10 : 0,
                  }}
                />
              ))}
            </View>
          </View>
          <View style={pokemonDetailStyles.weightContainer}>
            <Text style={pokemonDetailStyles.title}>Weight</Text>
            <Text style={pokemonDetailStyles.weightText}>
              {pokemon.weight} kg
            </Text>
          </View>
        </View>
        <View>
          <Text style={pokemonDetailStyles.title}>Sprites</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              style={pokemonDetailStyles.sprite}
              source={{ uri: pokemon.sprites.front_default }}
            />
            <Image
              style={pokemonDetailStyles.sprite}
              source={{ uri: pokemon.sprites.back_default }}
            />
            <Image
              style={pokemonDetailStyles.sprite}
              source={{ uri: pokemon.sprites.front_shiny }}
            />
            <Image
              style={pokemonDetailStyles.sprite}
              source={{ uri: pokemon.sprites.front_shiny }}
            />
          </ScrollView>
        </View>
        <View>
          <Text style={pokemonDetailStyles.title}>Abilities</Text>
          <View style={pokemonDetailStyles.containerAbilities}>
            {pokemon.abilities.map(({ ability }) => (
              <Text key={ability.name} style={pokemonDetailStyles.typeText}>
                <FontAwesome name="superpowers" size={25} color="black" />{" "}
                {ability.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={pokemonDetailStyles.containerStats}>
          <Text style={pokemonDetailStyles.title}>Stats</Text>
          {pokemon.stats.map((stat, i) => {
            return (
              <View key={stat.stat.name + i} style={{ flexDirection: "row" }}>
                <Text style={pokemonDetailStyles.statText}>
                  {stat.stat.name}
                </Text>
                <Text
                  style={{
                    ...pokemonDetailStyles.statText,
                    fontWeight: "bold",
                  }}
                >
                  {stat.base_stat}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
