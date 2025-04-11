import * as data from './data.js';
// Menu General
export function mostrarMenuPrincipal() {
    const opcion = prompt("📚 #MENÚ PRINCIPAL#\n¡Selecciona una opción!:\n1. camper\n2. Trainer\n3. Admin");
    
    switch (opcion) {
        case "1":
            mostrarMenuEstudiante();
            break;
        case "2":
            alert("Menú del profesor aún no implementado.");
            break;
        case "3":
            alert("Menú del coordinador aún no implementado.");
            break;
        default:
            alert("Opción no válida. Intenta de nuevo.");
    }
}
function mostrarMenuEstudiante() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt("🎓 MENÚ ESTUDIANTE\nSelecciona una opción:\n1. Ver notas\n2. Agregar materia\n3. Salir");

        switch (opcion) {
            case "1":
                alert("📘 Tus notas: \nPython:"+data.notas[0].python+" \nHTML: "+data.notas [0].html+"  \nSCRUM: "+data.notas [0].scrum+" \nJavaScript: "+data.notas [0].javascript);
                break;
            case "2":
                const nuevaMateria = prompt("Escribe el nombre de la nueva materia:");
                alert(`✅ Materia "${nuevaMateria}" agregada (simulado).`);
                break;
            case "3":
                alert("👋 Saliendo del menú estudiante...");
                continuar = false;
                break;
            default:
                alert("❌ Opción inválida. Intenta de nuevo.");
        }
    }
}


