// Evaluar la opción ingresada

export function minimenu(opcion) {
    if (opcion === "1") {
      alert("Bienvenido, Estudiante 👩‍🎓");
    } else if (opcion === "2") {
      alert("Bienvenido, Profesor 👨‍🏫");
    } else if (opcion === "3") {
      alert("Bienvenido, Coordinador 🧑‍💼");
    } else {
      alert("Opción no válida ❌");
    }
  }