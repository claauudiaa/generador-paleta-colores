function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fInicio() {
    sessionStorage.clear();
    generarColores(false);
}

function fCambiar() {
    generarColores(true);
}

function generarColores(bloqueos) {
    let divs = document.querySelectorAll("#div_colores > div");
    let rgbs = document.querySelectorAll(".div_hex");

    for (let i = 0; i < divs.length; i++) {
        if (bloqueos && sessionStorage.getItem(`bloqueado_${i}`) === "true") continue;

        let r = obtenerRandom(0, 255);
        let g = obtenerRandom(0, 255);
        let b = obtenerRandom(0, 255);
        let color = `rgb(${r}, ${g}, ${b})`;

        divs[i].style.backgroundColor = color;
        rgbs[i].innerHTML = color;
        sessionStorage.setItem(`rgb_actual_${i}`, color);
    }
}

function fBloquear(numero_div) {
    let div = document.querySelectorAll("#div_colores > div")[numero_div];
    let estado_actual = sessionStorage.getItem(`bloqueado_${numero_div}`);
    let icono = div.querySelector(".fa-lock-open, .fa-lock");

    if (estado_actual === "true") {
        sessionStorage.setItem(`bloqueado_${numero_div}`, "false");
        icono.classList.replace("fa-lock", "fa-lock-open");
    } else {
        sessionStorage.setItem(`bloqueado_${numero_div}`, "true");
        icono.classList.replace("fa-lock-open", "fa-lock");
    }
}

function fCopiar(numero_div) {
    let color = sessionStorage.getItem(`rgb_actual_${numero_div}`);

    // Copiar al portapapeles
    navigator.clipboard.writeText(color).then(() => {});
}