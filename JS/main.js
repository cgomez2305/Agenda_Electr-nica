const nombre=document.getElementById('nombre')
const criterio=document.getElementById('criterio')
const imagenes=document.getElementById('mostrar_imagenes')
const resultados=document.getElementById('resultados')
const foto_perfil=document.getElementById('foto_perfil')
let array = JSON.parse(localStorage.getItem("objects"));


function agregarImagenes(){
    array.forEach(element=> {
        imagenes.innerHTML+=`
        <div class="container-perfiles-img">
           <img src=${element.foto} alt="">
        </div>
         `
    });
}
agregarImagenes()

function validar(){
    array.forEach(recorro=>{
        if(recorro.nombre===nombre.value && criterio.value==='nombre'){
            
            resultados.innerHTML=`
            <div class="container-agenda-resultados-mostrar">
                <h3>${recorro.nombre}</h3>
                <h3>${recorro.apellido}</h3>
                <h3>${recorro.gustos}</h3>
                <h3>${recorro.numero}</h3>
            </div>
            `
            foto_perfil.setAttribute("src",recorro.foto)
        }else if(recorro.numero===nombre.value && criterio.value==='numero'){
            
            resultados.innerHTML=`
            <div class="container-agenda-resultados-mostrar">
                <h3>${recorro.nombre}</h3>
                <h3>${recorro.apellido}</h3>
                <h3>${recorro.gustos}</h3>
                <h3>${recorro.numero}</h3>
            </div>
            `
            foto_perfil.setAttribute("src",recorro.foto)
        }else if(recorro.gusto===nombre.value && criterio.value==='gusto' ){
            
            resultados.innerHTML=`
            <div class="container-agenda-resultados-mostrar">
                <h3>${recorro.nombre}</h3>
                <h3>${recorro.apellido}</h3>
                <h3>${recorro.gustos}</h3>
                <h3>${recorro.numero}</h3>
            </div>
            `
            foto_perfil.setAttribute("src",recorro.foto)
        }
    })
}







