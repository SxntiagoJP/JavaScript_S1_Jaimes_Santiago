//importaciones///
import * as menus from './menu.js';
import * as funciones from './funciones.js';
import * as listas from './listas.js';
//Funciones//

menus.menu();
let opcion=prompt()
if (opcion === "1") {
    menus.menuest();
  } else if (opcion === "2") {
    menus.menutrai();
  } else if (opcion === "3") {
    alert("Bienvenido, Coordinador 🧑‍💼");
  } else {
    alert("Opción no válida ❌");
  }
