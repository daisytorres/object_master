// ---------------------------------------- Assignment: Object Master ----------------------------------------

            //short hand, not using this yet:
            // For example we could create a list of pokémon that have names 
            // that start with the letter "B" by using the following code:
            //const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

            //Or if we wanted to return an array of just the ids, we could use something like this:
            // const pkmnIds = pokémon.map( p => p.id )

//paired programming with: Richard, Anthony, Christian, and Josh



//Lets use our new map and filter superpowers to get some data from this immutable pokémon array.
const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


// Using the pokémon array above find the following:

//Q1: an array of pokémon objects where the id is evenly divisible by 3
//shorthand way:
const evenlyDivisibleBy3 = pokemon.filter (poki => poki.id % 3 === 0);
console.log(evenlyDivisibleBy3)

//longhand way:
const divisibleBy3 =  pokemon.filter ((poki) => {
    return poki.id % 3 === 0
})
console.log(divisibleBy3)
//Ouput:
// [
//     { id: 9, name: 'Blastoise', types: [ 'water' ] },
//     { id: 12, name: 'Butterfree', types: [ 'bug', 'flying' ] },
//     { id: 24, name: 'Arbok', types: [ 'poison' ] },
//     { id: 63, name: 'Abra', types: [ 'psychic' ] },
//     { id: 72, name: 'Tentacool', types: [ 'water', 'poison' ] },
//     { id: 87, name: 'Dewgong', types: [ 'water', 'ice' ] },
//     { id: 144, name: 'Articuno', types: [ 'ice', 'flying' ] }
// ]




//--------------------------Question 2: an array of pokémon objects that are "fire" type
const fireTypePokemon = pokemon.filter ((poki) => {
    return poki.types[0] === 'fire' || poki.types[1] === 'fire';
})
console.log(fireTypePokemon)
//output: 
// [
//     { id: 5, name: 'Charmeleon', types: [ 'fire' ] },
//     { id: 37, name: 'Vulpix', types: [ 'fire' ] },
//     { id: 146, name: 'Moltres', types: [ 'fire', 'flying' ] }
// ]


//--------------------------Question 3: an array of pokémon objects that have more than one type
const multipleTypes = pokemon.filter((poki) => {
    return poki.types.length > 1;
}
)
console.log(multipleTypes)
//output:
// [
//     { id: 1, name: 'Bulbasaur', types: [ 'poison', 'grass' ] },
//     { id: 12, name: 'Butterfree', types: [ 'bug', 'flying' ] },
//     { id: 16, name: 'Pidgey', types: [ 'normal', 'flying' ] },
//     { id: 72, name: 'Tentacool', types: [ 'water', 'poison' ] },
//     { id: 74, name: 'Geodude', types: [ 'rock', 'ground' ] },
//     { id: 87, name: 'Dewgong', types: [ 'water', 'ice' ] },
//     { id: 144, name: 'Articuno', types: [ 'ice', 'flying' ] },
//     { id: 145, name: 'Zapdos', types: [ 'electric', 'flying' ] },
//     { id: 146, name: 'Moltres', types: [ 'fire', 'flying' ] }
// ]


//--------------------------Question 4 an array with just the names of the pokémon
const pokemonName = pokemon.map((poki) => {
    return poki.name
}
)
console.log(pokemonName)
//output:
// [
//     'Bulbasaur',  'Charmeleon',
//     'Blastoise',  'Butterfree',
//     'Pidgey',     'Ekans',
//     'Arbok',      'Pikachu',
//     'Vulpix',     'Meowth',
//     'Abra',       'Machamp',
//     'Tentacool',  'Geodude',
//     'Dewgong',    'Krabby',
//     'Kangaskhan', 'Mr. Mime',
//     'Eevee',      'Articuno',
//     'Zapdos',     'Moltres',
//     'Dragonair'
// ]


//--------------------------Question 5: an array with just the names of pokémon with an id greater than 99
const pokemon99 = pokemon.filter (poki => poki.id > 99).map(poki => poki.name);
console.log(pokemon99)
//output:
// [
//     'Kangaskhan',
//     'Mr. Mime',
//     'Eevee',
//     'Articuno',
//     'Zapdos',
//     'Moltres',
//     'Dragonair'
// ]


//--------------------------Question 6: an array with just the names of the pokémon whose only type is poison
const poisonPokemon = pokemon.filter (poki => poki.types.length === 1 && poki.types == "poison").map(poki => poki.name)
console.log(poisonPokemon)
//output: 
// [ 'Ekans', 'Arbok' ]


//--------------------------Question 7: an array containing just the first type of all the pokémon whose second type is "flying"
const secondFlyingPokemon = pokemon.filter (poki => poki.types.length > 1 && poki.types[1] === "flying").map(poki => poki.types[0]);
console.log(secondFlyingPokemon)
//output:
// [ 'bug', 'normal', 'ice', 'electric', 'fire' ]


//--------------------------Question 8: a count of the number of pokémon that are "normal" type
//method not using includes (.length gives you the count)
const normalPokemonCount = pokemon.filter(poki => poki.types[0] === 'normal' || poki.type[1] === 'normal').length
console.log(normalPokemonCount)

//using includes (.length gives you the count)
const normalPokemonCount2 = pokemon.filter(poki => poki.types.includes('normal')).length
console.log(normalPokemonCount2)
// output:
// 4

