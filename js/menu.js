function crear(){
    document.getElementById("crear").style.display = "block";
    esconderconsultar();
    escondereditar();
    escondereliminar();
}
function consultar(){
    document.getElementById("consultar").style.display = "block";
    escondercrear();
    escondereditar();
    escondereliminar();
}
function editar(){
    document.getElementById("editar").style.display = "block";
    escondercrear();
    esconderconsultar();
    escondereliminar();
}
function eliminar(){
    document.getElementById("eliminar").style.display = "block";
    escondercrear();
    esconderconsultar();
    escondereditar()
}


function escondercrear(){
    document.getElementById("crear").style.display = "none";
}
function esconderconsultar(){
    document.getElementById("consultar").style.display = "none";
}
function escondereditar(){
    document.getElementById("editar").style.display = "none";
}
function escondereliminar(){
    document.getElementById("eliminar").style.display = "none";
}