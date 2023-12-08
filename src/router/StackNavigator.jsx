import React from "react";

// React Native
import { createStackNavigator } from "@react-navigation/stack";

// Components
import { HomeScreen } from "../components/screens/homeScreen/HomeScreen";
import { PokemonScreen } from "../components/screens/pokemonScreen/PokemonScreen";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: "white",
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
