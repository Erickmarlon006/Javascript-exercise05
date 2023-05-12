var ret1 = document.querySelector("#ret1");
var ret2 = document.querySelector("#ret2");
var ret3 = document.querySelector("#ret3");
var ret4 = document.querySelector("#ret4");
var ret5 = document.querySelector("#ret5");
const RETANGULOS = [ret1, ret2, ret3, ret4, ret5];
var retSorteado = RETANGULOS[Math.floor(Math.random() * RETANGULOS.length)];
retSorteado.onclick = function (){
    alert("Parabéns você acertou, triângulo número " + retSorteado.textContent + " foi o sorteado");
}

console.log(retSorteado.textContent);

if (retSorteado.textContent == "1"){
    ret2.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret3.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret4.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret5.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
}
if (retSorteado.textContent == "2"){
    ret1.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

    ret3.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret4.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret5.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

}
if (retSorteado.textContent == "3"){
    ret1.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

    ret2.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

    ret4.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + "é o sorteado");
        window.location.reload();

    }
    ret5.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
}
if (retSorteado.textContent == "4"){
    ret1.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

    ret2.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret3.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

    ret5.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }

}
if (retSorteado.textContent == "5"){
    ret1.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret2.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret3.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    ret4.onclick = function(){
        alert("Você perdeu, triângulo número " + retSorteado.textContent + " é o sorteado");
        window.location.reload();

    }
    


}


 