var estoque = document.getElementById("estoque")
var repor = document.getElementById("repor")
var entrada = document.getElementById("entrada")
var saida = document.getElementById("saida")
var numero = document.getElementById("numeros")
var rad =document.getElementsByName("rad")


var valor = 150
var valorsaida = 17
var valorentrada = 21
var valorrepor = 80
function verificar() {




if (rad[0].checked) {

valor = valor + Number(numero.value)

estoque.innerHTML = `<strong>${valor}</strong>`

valorentrada = valorentrada + 1

entrada.innerHTML = `<strong>${valorentrada}</strong>`




if (valorrepor > 0) {

valorrepor = valorrepor - Number(numero.value)

repor.innerHTML = `${valorrepor}`

} if (valorrepor < 1) {

repor.innerHTML = `0`

} 







} else {

    valor = valor - Number(numero.value)

    estoque.innerHTML = `<strong>${valor}</strong>`

    valorsaida = valorsaida + 1

    saida.innerHTML = `<strong>${valorsaida}</strong>`

    valorrepor = valorrepor + Number(numero.value)

    if (valorrepor > 0 ) {

        repor.innerHTML = `<strong>${valorrepor}</strong>`
    } if (valorrepor > 999) {

    valorrepor = 999

    repor.innerHTML = `<strong>999+</strong>`
} if (valor < -999) {

    valor = -999

     estoque.innerHTML = `<strong>faliu kkk</strong>`
    }



}

sixseven = 0 + Number(numero.value)

if (sixseven != 67 ) {

    sixseven = sixseven - sixseven

    
} else {

    window.alert("Son | Apenas pare 🫩🥀")

}

    


}





const botoes = document.querySelectorAll(".Tbotoes button");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const alvo = botao.dataset.alvo;

        const titulo = document.getElementById(alvo);

        titulo.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });
    
});
