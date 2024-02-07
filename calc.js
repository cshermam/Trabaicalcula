const btnMostrar = document.querySelector('#botao')

botao.addEventListener('click', function () {
    
    let kg = document.getElementById('kg').value
    let altura = document.getElementById('altura').value
    let calculo = kg / (altura * altura)
    let resposta = document.getElementById('resposta')
    
    if (calculo < 18.5) {
        
        resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de magreza`
    }else if(calculo >= 18,95 && calculo <= 24.9){
        resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é Normal`
    }else if(calculo >= 25 && calculo <29.9){
        resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Sobrepeso`
    }else if(calculo >= 30 && calculo <= 34.9){
        resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Obesidade grau I`
    }else if(calculo >= 35 && calculo <= 39.9){
        resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Obesidade grau II`
    }else if(calculo > 40){
            resposta.innerHTML = `${calculo.toFixed(2)}<br>Seu IMC é de Obesidade grau III`
    }else{
        `Digite valores validos`
    }
})
