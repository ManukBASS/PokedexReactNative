import React from "react";
// React Ntive
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Hooks
import usePokemon from "../../../hooks/usePokemon";
// Components
import { PokemonDetail } from "../../common/pokemonDetail/PokemonDetail";
// Styles
import { pokemonScreenStyles } from "./styles";
// Icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export function PokemonScreen({ route, navigation }) {
  const { top } = useSafeAreaInsets();
  const { pokemonSelected } = route.params;

  const { pokemon, isLoading } = usePokemon(pokemonSelected.id);
  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View
        style={{
          ...pokemonScreenStyles.container,
          backgroundColor: pokemonSelected.color,
        }}
      >
        <TouchableOpacity
          style={{ ...pokemonScreenStyles.backButton, top: top + 5 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" color="white" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...pokemonScreenStyles.favoriteButton, top: top + 5 }}
        >
          <MaterialIcons name="favorite" size={30} color="white" />
        </TouchableOpacity>

        <Text style={{ ...pokemonScreenStyles.title, top: top + 35 }}>
          N.º {pokemon.id} {pokemon.name}
        </Text>

        <Image
          style={pokemonScreenStyles.pokeball}
          source={require("../../assets/pokebola-blanca.png")}
        />
        <Image
          style={pokemonScreenStyles.picture}
          source={{ uri: pokemonSelected.picture }}
        />
      </View>

      {/* Details */}
      {isLoading ? (
        <ActivityIndicator size={80} style={{ marginTop: 50 }} />
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </View>
  );
}
