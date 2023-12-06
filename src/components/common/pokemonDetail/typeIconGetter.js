export const pokemonTypeIconGetter = (type) => {
    switch (type) {
        case "bug":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Bug.png");
        case "dark":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Dark.png");
        case "dragon":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Dragon.png");
        case "electric":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Electric.png");
        case "fairy":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Fairy.png");
        case "fighting":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Fighting.png");
        case "fire":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Fire.png");
        case "flying":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Flying.png");
        case "ghost":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Ghost.png");
        case "grass":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Grass.png");
        case "ground":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Ground.png");
        case "ice":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Ice.png");
        case "normal":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Normal.png");
        case "poison":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Poison.png");
        case "psychic":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Psychic.png");
        case "rock":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Rock.png");
        case "steel":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Steel.png");
        case "water":
            return require("../../assets/pokemon_type_icons/Pokemon_Type_Icon_Water.png");
        default:
            return require("../../assets/pokebola.png");
    }
}