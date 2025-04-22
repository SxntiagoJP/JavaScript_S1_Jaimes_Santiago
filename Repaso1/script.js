let currentId = 1;

function buscarPokemon() {
  const input = document.getElementById("pokeInput");
  currentId = parseInt(input.value);
  fetch(`https://pokeapi.co/api/v2/pokemon/${currentId}`)
    .then(response => {
      if (!response.ok) throw new Error("Pokémon no encontrado");
      return response.json();
    })
    .then(data => {
      document.getElementById("pokeName").textContent = data.name.toUpperCase();
      document.getElementById("pokeImage").src = data.sprites.front_default;
    })
    .catch(err => {
      document.getElementById("pokeName").textContent = "No encontrado";
      document.getElementById("pokeImage").src = "";
    });
}

function cambiarPokemon(valor) {
  currentId += valor;
  if (currentId < 1) currentId = 1;
  document.getElementById("pokeInput").value = currentId;
  buscarPokemon();
}

// Cargar el primer Pokémon al iniciar
buscarPokemon();