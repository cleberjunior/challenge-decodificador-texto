const textArea = document.querySelector(".text_area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn_copiar");
const titulo = document.querySelector(".titulo");
const subtitulo = document.querySelector(".subtitulo");

let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar(strEncriptada) {
    strEncriptada = strEncriptada.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (strEncriptada.includes(matriz[i][0])) {
            strEncriptada = strEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return strEncriptada;
}

function desencriptar(strDesencriptada) {
    strDesencriptada = strDesencriptada.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        if (strDesencriptada.includes(matriz[i][1])) {
            strDesencriptada = strDesencriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return strDesencriptada;
}

function btnEncriptar() {
    mensagem.value = encriptar(textArea.value);
    mensagem.style.backgroundImage = "none";
    textArea.value = "";
    titulo.style.display = "none";
    subtitulo.style.display = "none";
    btnCopiar.style.display = "inline-block"
}

function btnDesencriptar() {
    mensagem.value = desencriptar(textArea.value);
    textArea.value = "";
}

btnCopiar.addEventListener("click", function() {
    mensagem.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso!");
});
