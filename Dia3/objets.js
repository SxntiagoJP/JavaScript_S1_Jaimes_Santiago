//  listas   

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

// funcion añadir datos

export function añadir() {
    let id = prompt("ingrese el id del nuevo usuario")
    let name = prompt("ingrese el nombre del nuevo usuario")
    let last = prompt("ingrese el apellido del nuevo usuario")
    let age = prompt("ingrese la edad del nuevo usuario")
    usuario.push({

        "id": id,
        "name": name,
        "last-name": last,
        "age": age



    })
}



// funcion ver usuario
export function ver() {
    let leng = usuarios.length
    for (let i = 0; i < leng; i++) {
        alert(
            "estudiante#" + i + "\n" +
            "id: " + usuarios["id"] + "\n" +
            "name: " + usuarios["name"] + "\n"+
            "last name: " + usuarios["last-name"] +
            "age: " + usuarios["age"] 
           

        )
    }
}

// funcion eliminar 
export function deleted(){
    ver();
    let eli=prompt("ingrense el id del usuarioqu edesee eliminar ")
    usuarios.pop(eli-1)
}

// editar datos 

export function add(){
    ver();
    let iid=prompt("ingrese el id del usuario que desea añadir")
    let nname=prompt("ingrese el nombre del usuario que desea añadir")
    let llast=prompt("ingrese el apellido del usuario que desea añadir")
    let aage=prompt("ingrese el edad del usuario que desea añadir")

    usuarios [usu-1]




}