import { StyleSheet } from "react-native";

export const pokemonDetailStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 380,
    },
    typeAndWeightContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
    },
    weightText: {
        marginTop: 10,
        fontSize: 22,
        textTransform: 'capitalize',
        textAlign: 'right'
    },
    weightContainer: {
        marginRight: 10
    },
    typesContainer: {
        display: "flex",
        flexDirection: "row",
    },
    typeIcon: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    typeText: {
        marginRight: 10,
        fontSize: 20,
        textTransform: 'capitalize'
    },
    sprite: {
        width: 90,
        height: 90
    },
    containerAbilities: {
        paddingBottom: 80
    }
})