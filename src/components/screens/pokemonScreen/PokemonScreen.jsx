import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function PokemonScreen({ route, navigation }) {
  const { pokemonSelected } = route.params;
  const { top } = useSafeAreaInsets();
  return (
    <>
      <View style={{ top: top }}>
        <Text>Pokemon Screen</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
