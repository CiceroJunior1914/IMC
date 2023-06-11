const btn = document.getElementById("btn")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
let calImc = document.getElementById("calImc")
let res = document.getElementById("res")

btn.addEventListener("click", function(){
   verificarInput(altura, peso)

    let resultado = parseFloat(peso.value) / (parseFloat(altura.value)  * parseFloat(altura.value))
    
    calImc.innerHTML = resultado.toFixed(2)
    alert(resultado.toFixed(2))
    verficarImc(resultado)
})

function verificarInput(altura, peso){
     if(altura.value === ""){
        res.innerHTML = "É necessario Prencher a Altura"

    } 
    if(peso.value === ""){
        res.innerHTML = "É necessario Prencher a Peso"
    }
}

function verficarImc(resultado){
    if(resultado < 18.5){
        res.innerHTML = "Abaixo do peso"
    }else if(resultado >= 18.5 && resultado <= 24.9){
        res.innerHTML = "Peso Normal"
    }else if(resultado >= 25 && resultado <= 29.9){
        res.innerHTML = "Sobrepeso"
    }else if(resultado >= 30 && resultado <= 34.9){
        res.innerHTML = "Obesidade Nivel 1"
    }else if(resultado >= 35 && resultado <= 39.9){
        res.innerHTML = "Obesidade Nivel 2"
    }else if(resultado >40){
        res.innerHTML = "Obesidade Mórbida"
    }
}