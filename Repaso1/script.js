let currentId = 1;

function buscarPokemon() {
  const input = document.getElementById("pokeInput");
  const valor = input.value.trim().toLowerCase();

  // Si es un número, guárdalo como ID actual
  if (!isNaN(valor) && valor !== "") {
    currentId = parseInt(valor);
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then(response => {
      if (!response.ok) throw new Error("Pokémon no encontrado");
      return response.json();
    })
    .then(data => {
      currentId = data.id; // Actualiza el ID actual en caso de búsqueda por nombre
      document.getElementById("pokeName").textContent = data.name.toUpperCase();
      document.getElementById("pokeImage").src = data.sprites.front_default;
      document.getElementById("pokeInput").value = currentId; // Actualiza el input con el ID real
    })
    .catch(error => {
      alert(error.message);
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