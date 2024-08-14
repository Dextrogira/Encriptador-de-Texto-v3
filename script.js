const textArea = document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

/*DOS después  ya con la lógica hecha de "encriptar ()" junto al array desarrollo el botón*/
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value =textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

/* "e" es convertida para "enter"
   "i" es convertida para "imes"
   "a" es convertida para "ai"
   "o" es convertida para "ober"
   "u" es convertida para "ufat"*/

/*UNO primero  ésta parte, la función de "encriptar ()" y el array, luego convertir todo a minúsculas con .toLowerCose  */
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }
    return stringEncriptada
    }
    
    
   
    function btnDesencriptar() {
        const textoDesencriptado = desencriptar(textArea.value)
        mensaje.value = textoDesencriptado
        textArea.value = "";
       
    }

function desencriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
        stringDesencriptada = stringDesencriptada.toLowerCase()
    
        for(let i = 0; i < matrizCodigo.length; i++ ){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    
            }
    
        }
        return stringDesencriptada
        } 


 async function copiarContenido() {
    try {
        var areaCopiado = document.getElementById("mensaje");
        var areaCopiado = areaCopiado.value;
        await 
        navigator.clipboard.writeText(areaCopiado);
        alert("Texto copiado");
    } catch {
        
    }
}