
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const chars = ["'","!","@","#","$","%","&","&","*","(",")","-","="]
const minusculo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = [0,1,2,3,4,5,6,7,8,9]
var form = document.getElementById("myForm");

const p = document.getElementById("pass")

numeroChar = 30

function charForEach(numeroChar) {
    list = []

    //
    for (let index = 0; index < 4; index++) {
        n  = Math.floor(Math.random() * (numeroChar/(Math.random()* 9)))
        
        if (n > numeroChar || n == 0)  {
            index -= 1
        } else {
            list.push(n)
        }
    }

    // enquanto a soma dos items da lista forem menores do o numero de caracteres da senha, continua chamando a funcao
    while(list.reduce((a, b) => a + b, 0) != numeroChar) {
        charForEach(numeroChar)
    }

    return list
}
function randomChars(list, j) {
    pass = ""

    for(let i = 0; i < numeros[j]; i++) {
        a = choose(list)
        pass += `${a}`
    }

    return pass 
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

numeros = charForEach(numeroChar)
console.log(numeros)

function generatePassword() {

    pass = ""

    pass += `${randomChars(alphabet, 0)}${randomChars(minusculo, 1)}${randomChars(chars,2)}${randomChars(numbers, 3)}`
    var shuffled = pass.split('').sort(function(){return 0.5-Math.random()}).join('');

    p.innerHTML = ""

    const textNode = document.createTextNode(shuffled);
    p.appendChild(textNode)
    
    form.addEventListener('submit', handleForm);
}


function handleForm(event) { event.preventDefault(); } 

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }