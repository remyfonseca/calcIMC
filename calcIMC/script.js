const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const form = document.querySelector("form");

let mensagemErro = null;
let resultadoTexto = null;

const capturarValores = () =>{
    let valorPeso = Number(peso.value.replace(',', '.'));
    let valorAltura = Number(altura.value.replace(',', '.'));

    if(valorAltura > 100){
        valorAltura /= 100;
    }

    if(valorAltura < 0.5 || valorAltura > 2.5){
        mostrarErro();
        return;
    }
    
    if(!valorPeso || !valorAltura || valorPeso <= 0 || valorAltura <=0){
        mostrarErro();
        return;
    } else{
        if(mensagemErro){ 
            mensagemErro.remove();
        }
    }

    return [valorPeso, valorAltura];
}

const mostrarErro = () =>{
    if(!mensagemErro){
        mensagemErro = document.createElement("p");
        mensagemErro.setAttribute("class", "erro");
        form.parentElement.appendChild(mensagemErro);
    }
    mensagemErro.innerHTML = "Valores inválidos, tente novamente.";
}

const calcIMC = (valorPeso, valorAltura) =>{
    return valorPeso / (valorAltura **2)
}

const  resultadoIMCTexto = (imc, categoria, categoriaEstilo) =>{
   if(!resultadoTexto){
       resultadoTexto = document.createElement("div");
       resultadoTexto.setAttribute("class", "resultado");
       
       form.parentElement.appendChild(resultadoTexto);
   }
   resultadoTexto.classList.remove(
    "peso-normal",
    "abaixo-peso",
    "sobrepeso",
    "obesidade-leve",
    "obesidade-media",
    "obesidade-grave"
    );
    resultadoTexto.classList.add(categoriaEstilo);
   resultadoTexto.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${categoria}`;
};

const resultadoIMC = (imc) =>{
    
    switch(true){
        case (imc > 40):
            resultadoIMCTexto(imc , "Obesidade grau 3 (muito grave). Recomendamos buscar ajuda médica urgente.", "obesidade-grave");
            break;
        case (imc > 35 && imc <= 39.9):
            resultadoIMCTexto(imc, "Obesidade grau 2 (grave). Atenção à saúde e consulte um profissional.", "obesidade-media");
            break;
        case (imc > 30 && imc <= 34.9):
            resultadoIMCTexto(imc, "Obesidade grau 1. É importante rever hábitos alimentares e praticar exercícios.", "obesidade-leve");
            break;
        case (imc > 25 && imc <= 29.9):
            resultadoIMCTexto(imc, "Sobrepeso. Um pouco de ajuste na rotina pode te trazer benefícios.", "sobrepeso");
            break;
        case (imc >= 18.5 && imc <= 24.9):
            resultadoIMCTexto(imc, "Peso normal. Parabéns, continue mantendo um estilo de vida saudável!", "peso-normal");
            break;
        case (imc < 18.5):
            resultadoIMCTexto(imc, "Abaixo do peso. Atenção à alimentação e saúde em geral.", "abaixo-peso");
            break;
    }
}


const exibirResultado = form.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const valores = capturarValores();
    if (!valores) return; 
    const imc = calcIMC(valores[0], valores[1]);
    resultadoIMC(imc);
})