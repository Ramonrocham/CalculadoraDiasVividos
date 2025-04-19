const btn = document.querySelector("#btn")
const data = document.querySelector("#data")

data.setAttribute("max", dataAtual())

let resposta = false;

data.addEventListener("keypress", function(e){
    if(e.key=="Enter"){
        calcDias()
    }
})
btn.addEventListener("click", calcDias)

function dataAtual(){
    let d = new Date()
    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()

    day = day<10?"0"+day:day
    month = month<10?"0"+month:month

    let dataFull = `${year}-${month}-${day}`
    return dataFull
}

function calcDias(){
    const dataUsr = document.getElementById("data").value
    if(dataUsr=="")
        return
    
    const result = document.querySelector("#calc-result")

    let p
    if(!resposta){
        p = document.createElement("p");
        result.append(p)
        resposta = true;
    }else{
        p = result.querySelector("p")
    }

    const dAtual = new Date(dataAtual())
    const dUsr = new Date(dataUsr)

    const dataResult = (dAtual.getTime()-dUsr.getTime())/1000/60/60/24


    p.innerText = `Parabens você tem ${dataResult} dias vivos`;


    
}
