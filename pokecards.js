async function getPokemonData() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150');
      const data = response.data.results; // Obtener los primeros 150 pokémones
  
      const pokemonContainer = document.getElementById('pokemon-container');
  
      for (const pokemon of data) {
        try {
          const pokemonResponse = await axios.get(pokemon.url);
          const pokemonData = pokemonResponse.data;
  
          const card = document.createElement('div');
          card.className = 'pokemon-card';
  
          const image = document.createElement('img');
          image.src = pokemonData.sprites.front_default;
  
          const name = document.createElement('p');
          name.textContent = pokemonData.name;
  
          card.appendChild(image);
          card.appendChild(name);
          pokemonContainer.appendChild(card);
        } catch (error) {
          console.error('Error al obtener información de un pokémon', error);
        }
      }
    } catch (error) {
      console.error('Error al obtener la lista de pokémones', error);
    }
  }
  
  getPokemonData();
  