import { View, Text } from "react-native";
import React from "react";
import { usePokemonPaginate } from "../../hooks/usePokemonPaginate";

export default function HomeScreen() {
  const x = usePokemonPaginate();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
