import * as objets from './objets'
//  listas   //

let usuarios = [
    {

        "id": 1,
        "name": "dante",
        "last name": "comandante",
        "age": "16"
    },
    {
        "id": 2,
        "name": "santiago",
        "last name": "jaimes",
        "age": "17"
    },
    {
        "id": 3,
        "name": "pedro",
        "last name": "gomex",
        "age": "24"
    }
]

let opcion = prompt(
    "bienvenido\n" +
    "1. ver datos\n" +
    "2. editar datos\n" +
    "3. eliminar datos\n" +
    "4. añadir datos\n"
)

if (opcion === 1) {
    Objects.ver();

};

if (opcion === 2) {
    Objects.deleted();
    alert("user was deleted")

};

if (opcion === 3) {
    

};

if (opcion === 4) {
  

};
































//  objets   //

let user = new Object();
user = {
    "name": "santiago",
    "age": "17"
};

//  Alerts   //