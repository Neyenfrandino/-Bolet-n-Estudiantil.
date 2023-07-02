function buscarPoID(idElemento){
 let elementoDocument = document.getElementById(idElemento);
 
 return  elementoDocument;
}

function fecha(){
    let elementoFecha = document.getElementById('fecha');
    let fechaActual = new Date()
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    let año = fechaActual.getFullYear();

    let fechaYhoraActualizada = ('Fecha actualizada: '+ dia + '/' + mes + '/' + año)  
    elementoFecha.textContent = fechaYhoraActualizada
}

let miArray = [1, 7, 4, 8, 9, 5, 6];
function btnCalificacionMasAlta(){
    let btnElemento = buscarPoID('calificacionMasAlta')
    btnElemento.addEventListener('click', function(){
        for(let numero of miArray){
            if(numero <= )
        }
    })
}







fecha()