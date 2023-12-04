import React from "react";

// React Native Imports
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    color: "whitesmoke",
    fontSize: 20,
    top: 20,
    left: 10,
    textTransform: "capitalize",
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    overflow: "hidden",
    opacity: 0.4,
  },
  pokeball: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: "absolute",
    right: -15,
    bottom: -10,
  },
});

export function PokemonCard({ pokemon }) {
  return (
    <TouchableOpacity onPress={() => console.log("kokemon")}>
      <View style={{ ...styles.cardContainer, backgroundColor: pokemon.color }}>
        <Text style={styles.name}>
          #{pokemon.id} {pokemon.name}
        </Text>
        <View style={styles.pokeballContainer}>
          <Image
            source={require("../assets/pokebola-blanca.png")}
            style={styles.pokeball}
          />
        </View>
        <Image source={{ uri: pokemon.picture }} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
}
