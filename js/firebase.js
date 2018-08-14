firebase.initializeApp({
    apiKey: sessionStorage.getItem('api'),
    authDomain: sessionStorage.getItem('domi'),
    projectId: sessionStorage.getItem('id')
});
var db = firebase.firestore();
function carga(){
    document.getElementById("apikey").value = sessionStorage.getItem('api');
    document.getElementById("dominio").value = sessionStorage.getItem('domi');
    document.getElementById("id").value = sessionStorage.getItem('id');
    if(sessionStorage.getItem('contador')==1){
        document.getElementById("opciones").style.display = "block";
    }
}
var apikey, dominio, id
function rellenar(){
    sessionStorage.setItem('api', document.getElementById("apikey").value);
    sessionStorage.setItem('domi', document.getElementById("dominio").value);
    sessionStorage.setItem('id', document.getElementById("id").value); 
    document.getElementById("opciones").style.display = "block";
    sessionStorage.setItem('contador', 1);
}
var array = {};
var label, value;
function anadir(){
    label = document.getElementById("label").value;
    value = document.getElementById("value").value;
    array[label] = value;
    document.getElementById("muestra").innerHTML += label+": "+array[label]+"<br>";
    document.getElementById("label").value = "";
    document.getElementById("value").value = "";
}
var coleccion, documento
function generar(){
    coleccion = document.getElementById("collection").value;
    documento = document.getElementById("document").value;
    db.collection(coleccion).doc(documento).set(array).then(function(){
        alert('Se ha generado el documento correctamente');
    })
}
var resultado = {};
function consuta(){
    document.getElementById("muestraconsul").innerHTML = ""; 
    coleccion = document.getElementById("collectionconsul").value;
    documento = document.getElementById("documentconsul").value;
    db.collection(coleccion).doc(documento).get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            resultado = doc.data();
            for(let value of Object.keys(resultado)){
                document.getElementById("muestraconsul").innerHTML += value+": "+resultado[value]+"<br>";
            }
            ;
        } else {
            // doc.data() will be undefined in this case
            alert("No se ha encontrado el documento");
        }
    }).catch(function(error) {
        alert("Error al obtener el documento:");
        console.log(error);
    });
}
var arrayeditar={};
function editado(){
    collection = document.getElementById("collectionedit").value;
    documento = document.getElementById("documentedit").value;
    label = document.getElementById("labeledit").value;
    value = document.getElementById("valueedit").value;
    alert(collection+" "+documento+" "+label+" "+value);
    arrayeditar[label] = value;
    db.collection(collection).doc(documento).update(arrayeditar)
    .then(function() {
        alert("El documento se ha actualizado");
    }).catch(function(error) {
        alert("No se ha podido editar el documento");
        console.log(error);
    }); 
}
function eliminardoc(){
    collection = document.getElementById("collectiondelete").value;
    documento = document.getElementById("documentdelete").value;
    db.collection(collection).doc(documento).delete().then(function() {
        alert("Documento eliminado");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        alert("No se ha podido eliminar el documento")
    });
}
var arrayeliminar = {}
function eliminarcampo(){
    collection = document.getElementById("collectiondelete").value;
    documento = document.getElementById("documentdelete").value;
    label = document.getElementById("labeldelete").value;
    arrayeliminar[label] = firebase.firestore.FieldValue.delete()
    db.collection(collection).doc(documento).update(arrayeliminar).catch(function(error) {
        alert("No se ha podido eliminar el campo");
        console.log(error);
    });
}

