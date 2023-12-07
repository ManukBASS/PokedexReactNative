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
        marginHorizontal: 20,
        marginTop: 5,
        fontSize: 20,
        textTransform: 'capitalize'
    },
    sprite: {
        width: 90,
        height: 90
    },
    containerAbilities: {
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: "row"
    },
    containerStats: {
        marginBottom: 70
    },
    statText: {
        width: 150,
        fontSize: 20,
        textTransform: 'capitalize',
    }
})