var carta1 = null
var carta2 = null
var opciones = ["carta1+carta3","carta3+carta1","carta2+carta11","carta11+carta2","carta4+carta9","carta9+carta4","carta5+carta16","carta16+carta5","carta6+carta8","carta8+carta6","carta7+carta13","carta13+carta7","carta10+carta14","carta14+carta10","carta12+carta15","carta15+carta12"]
var aciertos = 0
var limite = 20
var intentos = 0


function destapar(n){
    switch(n){
        case 1:
            document.getElementById("carta1").className="ver"
            if(carta1==null)
                carta1="carta1"
            else if(carta2==null){
                carta2="carta1"
                comparar()
            }
        break
        case 2:
            document.getElementById("carta2").className="ver"
            if(carta1==null)
                carta1="carta2"
            else if(carta2==null){
                carta2="carta2"
                
                comparar()
                
            }
        break
        case 3:
            document.getElementById("carta3").className="ver"
            if(carta1==null)
                carta1="carta3"
            else if(carta2==null){
                carta2="carta3"
                comparar()
            }
        break
        case 4:
            document.getElementById("carta4").className="ver"
            if(carta1==null)
                carta1="carta4"
            else if(carta2==null){
                carta2="carta4"
                comparar()
            }
        break
        case 5:
            document.getElementById("carta5").className="ver"
            if(carta1==null)
                carta1="carta5"
            else if(carta2==null){
                carta2="carta5"
                comparar()
            }
        break
        case 6:
            document.getElementById("carta6").className="ver"
            if(carta1==null)
                carta1="carta6"
            else if(carta2==null){
                carta2="carta6"
                comparar()
            }
        break
        case 7:
            document.getElementById("carta7").className="ver"
            if(carta1==null)
                carta1="carta7"
            else if(carta2==null){
                carta2="carta7"
                comparar()
            }
        break
        case 8:
            document.getElementById("carta8").className="ver"
            if(carta1==null)
                carta1="carta8"
            else if(carta2==null){
                carta2="carta8"
                comparar()
            }
        break
        case 9:
            document.getElementById("carta9").className="ver"
            if(carta1==null)
                carta1="carta9"
            else if(carta2==null){
                carta2="carta9"
                comparar()
            }
        break
        case 10:
            document.getElementById("carta10").className="ver"
            if(carta1==null)
                carta1="carta10"
            else if(carta2==null){
                carta2="carta10"
                comparar()
            }
        break
        case 11:
            document.getElementById("carta11").className="ver"
            if(carta1==null)
                carta1="carta11"
            else if(carta2==null){
                carta2="carta11"
                comparar()
            }
        break
        case 12:
            document.getElementById("carta12").className="ver"
            if(carta1==null)
                carta1="carta12"
            else if(carta2==null){
                carta2="carta12"
                comparar()
            }
        break
        case 13:
            document.getElementById("carta13").className="ver"
            if(carta1==null)
                carta1="carta13"
            else if(carta2==null){
                carta2="carta13"
                comparar()
            }
        break
        case 14:
            document.getElementById("carta14").className="ver"
            if(carta1==null)
                carta1="carta14"
            else if(carta2==null){
                carta2="carta14"
                comparar()
            }
        break
        case 15:
            document.getElementById("carta15").className="ver"
            if(carta1==null)
                carta1="carta15"
            else if(carta2==null){
                carta2="carta15"
                comparar()
            }
        break
        case 16:
            document.getElementById("carta16").className="ver"
            if(carta1==null)
                carta1="carta16"
            else if(carta2==null){
                carta2="carta16"
                comparar()
            }
        break
    }
}

function comparar(){
    var encontrado=false
    if(carta1!=null && carta2!=null){
        var buscado = carta1+"+"+carta2
        for(var i=0;i<opciones.length;i++){
            if(opciones[i]==buscado)
                encontrado=true;
        }
        buscado=null
    }
    if(encontrado==true){
        bloquear(carta1)
        bloquear(carta2)
        carta1=null
        carta2=null
        encontrado=false
        aciertos+=1
        if(aciertos==8){
            alert("Felicitaciones ha completado el desafío. Presione reset para volver a jugar")
        }
    }
    else{
        var t= setTimeout(function (){
            setCarta(carta1)
            setCarta(carta2)
            carta1=null
            carta2=null
            intentos++
            document.getElementById("intentos").innerHTML=intentos
            if(intentos==limite){
                alert("Has llegado al limite de intentos.¡PERDISTE!")
                reset()
            }
            clearTimeout(t)
        },1500)  
    }
}

function bloquear(carta){
    document.getElementById(carta).onclick=null
}
function setCarta(c){
    document.getElementById(c).className="ocultar"
}
function reset(){
    window.location = window.location
}

