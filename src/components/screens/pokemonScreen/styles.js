import { StyleSheet } from "react-native";

export const pokemonScreenStyles = StyleSheet.create({
    container: {
        height: 370,
        zIndex: 999,
        alignItems: "center",
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: "absolute",
        left: 20,
    },
    favoriteButton: {
        position: "absolute",
        right: 20,
    },
    title: {
        color: 'white',
        fontSize: 35,
        alignSelf: "flex-start",
        left: 20,
        textTransform: "capitalize"
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -70,
        opacity: 0.7
    },
    picture: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -30,
    }
})