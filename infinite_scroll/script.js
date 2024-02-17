let pokemonTemplate = Handlebars.compile(document.getElementById("pokeCard").innerHTML);

let offset = 0;
const limit = 20;

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${20}');
    const data = await response.json();
    offset += limit;
    pokemonsArr = [];
    data.results.forEach(element => {
        const url = element.url
        const segments = url.split('/');
        const id = segments[segments.length - 2];
        pokemonsArr.push(
            {
                id : id,
                name : element.name,
                url : element.url,
                imageUrl : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png'
            }
        )
    });
    return { pokemons : pokemonsArr };
}