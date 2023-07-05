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

let miArray = [10, 7, 4, 8, 9, 5, 6, 2];
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
      mensaje += miArray[i] +  '-' ;
      /* mensaje = mensaje + ' ' + miArray[i] + ' ,'; */
    } 
    inputResultado.value = mensaje.substring(0, mensaje.length-1);
    console.log(mensaje.substring(0, mensaje.length-1))
  })
}

function btnObtenerAplazo(){
  let elementoIdBtn = buscarPoID('btnAplazo');
  let cajaInputResultado = buscarPoID ('inputResultado');

  elementoIdBtn.addEventListener('click', function(){
    let i = 0
    let numero;
    let mensaje= '';
    do {
      numero = miArray[i++];
     /*  if(numero < 5){
        console.log(numero)
      } */
      if(numero >= 5){
        continue /* Esta forma en la que utilizamos el continue, es una forma muy poco funcional, 
        aqui la usamos para poder reforzar lo que estamos aprendiendo. la forma correcta es la que esta comentada arriba, 
        que seria con el dondicional unicamente. */
      }
      mensaje += numero + '-'
      console.log(numero)
      cajaInputResultado.value = mensaje.substring(0, mensaje.length-1)

    } while(i < miArray.length)
  })
}


fecha();
btnCalificacionMasAlta();
btnPromedio(miArray);
btnObtenerTodasCalificaciones();
btnObtenerAplazo();