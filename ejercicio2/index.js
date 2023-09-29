//Carlos Gutiérrez, sección N1113P de Javascript.

const montoInit = document.getElementById("monto")
const resultado = document.getElementById("resultado")

function calcular() {
    let monto = parseInt(montoInit.value)
    const validacion = validarNum(monto)
    if (validacion) {
        resultado.innerText = validacion
        return
    }
    let intereses = 0
    for (let meses = 0; meses < 12; meses++) {
        monto += 250
        intereses += monto * 0.0125
    }
    resultado.innerHTML = `
    <h3>Resultados a final de año: </h3>
    <ul>
    <li>Monto final con intereses: ${monto + intereses}Bs.</li>
    <li>Monto final sin intereses: ${monto}Bs.</li>
    <li>Intereses: ${intereses}Bs.</li>
    </ul>
    `
}
function validarNum(value) {
    if (isNaN(value)) {
        return "¡Monto inválido! Asegúrese de haber insertado números en el campo de monto inicial."
    } else if (value < 0) {
        return "¡Monto inválido! Hay números negativos."
    } else if (value > 1000000000000000) {
        return "¡Monto inválido!"
    } else {
        return false
    }
} 