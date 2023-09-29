let estudiantes = []
let notas={
    mat: 0,
    fis: 0,
    prog: 0,
}
let aprobados = {
    mat: 0,
    fis: 0,
    prog: 0
}

let aplazados = {
    mat: 0,
    fis: 0,
    prog: 0,
}

let notaMaxima = {
    mat: 0,
    fis: 0,
    prog: 0
}

var aprobaron1 = 0
var aprobaron2 = 0
var aprobaron3 = 0

const infoTabla = document.getElementById("info-estudiantes")

function guardar() {
    const nombre = document.getElementById("nombre").value
    const cedula = document.getElementById("cedula").value
    const notaMat = document.getElementById("mat").value
    const notaFis = document.getElementById("fis").value
    const notaProg = document.getElementById("prog").value

    estudiantes.push({
        nombre, cedula, notaMat, notaFis, notaProg
    })
    let aprobadas = 0
    if (notaMat >= 10) {
        aprobados.mat += 1
        aprobadas+=1
        
    } else {
        aplazados.mat += 1
    }

    if (notaFis >= 10) {
        aprobados.fis += 1
        aprobadas+=1
    } else {
        aplazados.fis += 1
    }

    if (notaProg >= 10) {
        aprobados.prog += 1
        aprobadas+=1
    } else {
        aplazados.prog += 1
    }

    cantEst = estudiantes.length

    notas.mat += parseInt(notaMat)
    notas.fis += parseInt(notaFis)
    notas.prog += parseInt(notaProg)
    
    const promedioRes = promedios(cantEst, notas)
    cantAprobadas(aprobadas)
    notasMaximas(notaMat, notaFis, notaProg)
    verAlumnos(promedioRes, aprobados, aplazados)
}

function promedios(cant, notas){
    const promedio = {
        mat : (notas.mat / cant),
        fis : (notas.fis / cant),
        prog :( notas.prog / cant),
    }
    return promedio
}

function verAlumnos(prom) {
    infoTabla.innerHTML = ("")
    const filaAvg = document.createElement("tr")
    filaAvg.innerHTML = `<td></td>
    <td>Promedios: </td>
    <td>${prom.mat}</td>
    <td>${prom.fis}</td>
    <td>${prom.prog}</td>
    `

    const filaApr = document.createElement("tr")
    filaApr.innerHTML = `<td></td>
    <td>Aprobados: </td>
    <td>${aprobados.mat}</td>
    <td>${aprobados.fis}</td>
    <td>${aprobados.prog}</td>
    `

    const filaApl = document.createElement("tr")
    filaApl.innerHTML = `<td></td>
    <td>Aplazados: </td>
    <td>${aplazados.mat}</td>
    <td>${aplazados.fis}</td>
    <td>${aplazados.prog}</td>
    `

    const filaMax = document.createElement("tr")
    filaMax.innerHTML = `<td></td>
    <td>Nota máxima: </td>
    <td>${notaMaxima.mat}</td>
    <td>${notaMaxima.fis}</td>
    <td>${notaMaxima.prog}</td>
    `

    infoTabla.append(filaAvg)
    infoTabla.append(filaApr)
    infoTabla.append(filaApl)
    infoTabla.append(filaMax)

    const filaInfo = document.createElement("tr")
    filaInfo.innerHTML = `<th>Nombre</th><th>Cédula</th><th>N. Matemáticas</th><th>N. Física</th><th>N. Programación</th>`
    infoTabla.append(filaInfo)

    estudiantes.forEach((alumno) => {
            const fila = document.createElement("tr")
            fila.innerHTML = `<td>${alumno.nombre}</td>
            <td>${alumno.cedula}</td>
            <td>${alumno.notaMat}</td>
            <td>${alumno.notaFis}</td>
            <td>${alumno.notaProg}</td>
            `
            infoTabla.append(fila)
    })
    return
}

function cantAprobadas(cant) {
    if (cant == 3) {
        aprobaron3 += 1
    } else if(cant ==2) {
        aprobaron2 += 1
    } else if(cant ==1){
        aprobaron1 += 1
    }
}

function notasMaximas(mat, fis, prog) {
    if (notaMaxima.mat <= mat) {
        notaMaxima.mat = mat
    }
    if (notaMaxima.fis <= fis) {
        notaMaxima.fis = fis
    }
    if (notaMaxima.prog <= prog) {
        notaMaxima.prog = prog
    }
}

function validarNum(inputName, lim) {
    const input = document.getElementById(inputName)
    const value = input.value
    if (value >= lim) {
        input.value = lim
    } else if (value <= 0) {
        input.value = 0
    }
} 

function validarNombre() {
    const regex = /^[a-zA-ZáéíóúñÑ\s]*$/; // expresión regular que permite solo letras y espacios en blanco
    const inputNombre = document.getElementById("nombre")

    if (inputNombre.value == "") {

    } else if (!regex.test(inputNombre.value)) {
        var valorAnterior = inputNombre.value;
        inputNombre.value = valorAnterior.replace(/[^a-zA-ZáéíóúñÑ\s]/g, '');
    }
}