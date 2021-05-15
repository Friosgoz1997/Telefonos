// Declaración de variables
let counter = 1;
const header = document.getElementById("header");
const div = document.getElementById("results");

header.innerHTML = `<h2 class='title'>Teléfonos</h2>
                    <hr>`;

div.style.display = "flex";
div.style.justifyContent = "space-around";
div.style.flexWrap = "wrap"


var appTelefonos = {};



var misTelefonos = (datos) =>{
    // console.log(datos);
    appTelefonos = datos;
   /* console.log(appTelefonos)*/
    var html = "";
    // html += `<h2 class='title'>Teléfonos</h2>
    //          <hr>`;
    
    appTelefonos.map((telefonos) =>{

        for (let i = 0; i < misTelefonos.length; i++) {
            
            html += `<div class='box' id="bx${counter}">
                        <div class="view">
                            <img class='cel' src= '${telefonos.Foto}' 
                            title='Articulo disponible' alt="image"></img>
                        </div>
                        <div class="hide">
                            <p>Características</p>
                            <img src='img/icon/down-arrow.png' class="icon" onclick='toHide(${counter++})'></img>
                        </div>
                        <div class="footer-view" style="display: none;">
                            <ul>`;
            for(propiedades in telefonos){
                if(propiedades !== `Foto`){
                html +=         `<li>${propiedades}: ${telefonos[propiedades]}</li>`
            }
            }
                    html += `</ul>
                             </div>
                    </div>`

        }
    })

    div.innerHTML = html
    
}//Fin de función mis teléfonos.

const footer = document.getElementById("footer")
footer.innerHTML = `<div class="name"> Instituto tecnológico José Mario Molina Pasquel y Henríquez </div> 
                    <div class="date">${Date()};</div>`

    function toHide(i){
        let box = document.getElementById(`bx${i}`)
        let pie = box.querySelector(".footer-view")
        let icono = box.querySelector(".icon")

        if(pie.style.display !== "none"){
            pie.style.display = "none"
            icono.setAttribute('src','img/icon/down-arrow.png')
        }else{
            pie.style.display = "flex"
            icono.setAttribute('src','img/icon/up-arrow.png')
        }
    }