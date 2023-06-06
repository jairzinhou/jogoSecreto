function verificar(){
    const transNumero= Number(valorTela)
    if(transNumero>maiorValor ||transNumero<menorValor ){
        chute.innerHTML+=`<p>Digite um valor no intervalo designado</p>`
    }
    if(isNaN(transNumero)){
        chute.innerHTML+=`<p>Nao eh um numero</p>`
    }else{
        if(transNumero===numero){
            document.body.innerHTML=`<div class="acerto">Acertou o numero secreto era ${numero}</div>`
        }else{
            if(numero>transNumero){
                chute.innerHTML+=`<div class="">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
            }else{
                chute.innerHTML+=`<div class="">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
            }
        }
    }

    
    console.log(numero)

}

