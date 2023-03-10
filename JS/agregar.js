const mostrar_foto=document.getElementById('mostar_foto')
const foto=document.getElementById('foto')
const nombre=document.getElementById('nombre')
const gusto=document.getElementById('gusto')
const numero=document.getElementById('numero')
let original = JSON.parse(localStorage.getItem("objects"));

let valor_foto=0;

foto.addEventListener('input',mostrar_);
function mostrar_(){
    valor_foto=foto.value
    mostrar_foto.innerHTML=`
        <img class="mostramos" src="${valor_foto}" alt=""></img>
    `
}

function agregando(){
    let nuevoArreglo=[{
        nombre:nombre.value,
        numero:numero.value,
        gusto:gusto.value,
        foto:foto.value
    }]
    if(nombre.value==='' && numero.value==='' && gusto.value==='' && foto.value===''){
        alert('debes completar todos los datos')
    }else if(nombre.value==='' || numero.value==='' || gusto.value==='' || foto.value===''){
        alert('debes completar todos los datos')
    }
    else{
        original.push(nuevoArreglo[0])
        location.href="../index.html"
    }
    console.log(original)

    nombre.value='';
    numero.value='';
    gusto.value='';
    foto.value='';
    mostrar_foto.innerHTML=''
    localStorage.setItem('agregamos', JSON.stringify(original));
}



