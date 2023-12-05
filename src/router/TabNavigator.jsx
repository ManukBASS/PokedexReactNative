import React from "react";

// React Native
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import { FavoritesScreen } from "../components/screens/favoritesScreen/FavoritesScreen";

// Expo Icons
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    // * 1er Tab Conecta a todo el stack de navegación (con Home y Pokemon screens)
    // * 2do Tab Conecta a la screen de Favoritos
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5856D5",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 10,
          borderWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={StackNavigator}
        options={{
          tabBarLabel: "Pokemons",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list-ul" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
