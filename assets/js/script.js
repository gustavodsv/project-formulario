function modeDark() {
    limpar();
    document.getElementById("dark").classList.add("modoNoturno");
}
function modeNormal() {
    limpar();
}
function limpar(){
    document.getElementById("dark").classList.remove("modoNoturno");
}