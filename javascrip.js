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
    let btnElemento = buscarPoID('calificacionMasAlta');
    let inputResultado = buscarPoID('inputResultado');
    numeroMax = miArray[0]
    let i = 0;
    btnElemento.addEventListener('click', function(){
        while ( i < miArray.length){
          if (miArray[i] > numeroMax) {
            numeroMax = miArray[i];
          }
          i++;
        }
        inputResultado.value = numeroMax;
    })
}


function btnPromedio(arr) {
    let btnPromedio = buscarPoID('btnPromedio');
    let inputResultado = buscarPoID('inputResultado');
  
    btnPromedio.addEventListener('click', function() {
      let suma = 0;
      for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
      }
      let promedio = suma / arr.length;
  
      inputResultado.value = promedio;
    });
}


function btnObtenerTodasCalificaciones(){
  let elementoBtn = buscarPoID('todasCalificaciones');
  let inputResultado = buscarPoID('inputResultado');
  

  elementoBtn.addEventListener('click', function(){
    let mensaje = ''
    for(let i = 0; i < miArray.length; i++){
      mensaje += miArray[i] + ',';
      /* mensaje = mensaje + ' ' + miArray[i] + ' ,'; */
    } 
    inputResultado.value = mensaje.substring(0, mensaje.length-1);
    console.log(mensaje.substring(0, mensaje.length-1))
  })
}


fecha();
btnCalificacionMasAlta();
btnPromedio(miArray);
btnObtenerTodasCalificaciones();