//Carlos Gutiérrez, sección N1113P de Javascript.

let alumnos = []
const inNombre = document.getElementById("nombre")
const montoInit = document.getElementById("peso")
const infoTabla = document.getElementById("info-alumnado")

function guardar() {
    if (inNombre.value == "" || montoInit.value == "") {
        window.alert("¡Dejó campos en blanco!")
    } else if (montoInit.value < 0 | montoInit.value > 500) {
        window.alert("Peso inválido.")
    } else {
        alumnos.push({
            nombre: inNombre.value,
            peso: montoInit.value
        })
    }
    return
}

function verAlumnos(lim1 = 0, lim2 = 999) {
    //Las funciones implementadas en HTML insertan los parámetros para límite 1 y límite 2.
    //De no haberse insertado argumentos se tomarán los valores por defecto 0 y 999 para así mostrar todos los alumnos.

    infoTabla.innerHTML = ("")
    alumnos.forEach((alumno) => {
        if (lim1 <= alumno.peso && lim2 > alumno.peso) {
            const fila = document.createElement("tr")
            fila.innerHTML = `<td>${alumno.nombre}</td><td>${alumno.peso}</td>`
            infoTabla.append(fila)
        }
    })
    return
}

function validarNombre() {
    const regex = /^[a-zA-ZáéíóúñÑ\s]*$/; // expresión regular que permite solo letras y espacios en blanco

    if (inNombre.value == "") {

    } else if (!regex.test(inNombre.value)) {
        var valorAnterior = inNombre.value;
        inNombre.value = valorAnterior.replace(/[^a-zA-ZáéíóúñÑ\s]/g, '');
    }
}

function validarNum() {
    const value = parseInt(montoInit.value);

    if (isNaN(value) || value > 500) {
        montoInit.value = 0
    } else if (value < 0) {
        montoInit.value = 500
    }
}