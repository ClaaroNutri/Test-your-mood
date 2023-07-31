const saludos=[
    {name:"Colapsando",
    img:"../img/th (2).jpg"
    },
    {name:"Relajado",
    img:"../img/th (1).jpg"
    },
    {name:"Burlón",
    img:"../img/2.jpg"
    },
    {name:"Feliz",
    img:"../img/th (3).jpg"
    },
    {name:"Me dormí y no llegué a la meeting",
    img:"../img/th (4).jpg"
    },
]
let btn=document.getElementById("btn")
let overlay=document.getElementById("translucent-layer")
let moodContainer=document.getElementById("mood")

let moodInicial=0

const mostrarPerro=()=>{
    let primerMood=saludos[moodInicial]
    let animo=document.createElement("h3")
    let img=document.createElement("img")

    animo.textContent=primerMood.name
    console.log(animo)
    img.src=primerMood.img
    moodContainer.innerHTML=""
    moodContainer.appendChild(animo)
    moodContainer.appendChild(img)

    moodInicial++
    
    if(moodInicial > saludos.length || moodInicial== saludos.length){
        moodInicial=0
    }
    
}

const shine=()=>{
    overlay.style.display==="none"? overlay.style.display="block": overlay.style.display="none"
}

//btn.addEventListener("click", shine, mostrarPerro)


btn.addEventListener("click", ()=>{

    mostrarPerro()
    shine()
})
    
   
