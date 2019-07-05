/*==========VARIABLES============================== */


/* Inicializamos la variable item con valor 0, ésta varieble constituye la posisicón de cada grupo de elementos que se visualiza en el movimientoSlide,
 tanto texto como imagen específica de un producto en cuestion */

var item = 0;

/* Varibale que permite gestionar la paginación del slide */
var itemPaginacion = $("#paginacion li");

/* Interrumpe el cilco de 3 segundos que dura el slide en cambiar la imagen del slide */
var interrumpirCiclo = false;

/* Almacenará la imagen de cada producto que se visualiza en cada cambio de imagen del slide */
var imgProducto = $(".imgProducto");

/* Selecionamos los textos de las etiquetas h1 que se hallan en el slide */
var titulo1 = $("#slide h1");

/* Selecionamos los textos de las etiquetas h2 que se hallan en el slide */
var titulo2 = $("#slide h2");

/* Selecionamos los textos de las etiquetas h3 que se hallan en el slide */
var titulo3 = $("#slide h3");

/* Variable para controlar el botón de cada slide de manera centralizada o global */
var BotonProductoSlide = $("#slide button");






/*============= ANIMACIÓN INICIAL DE LOS ELEMENTOS DEL SLIDE ========================*/

/* ANIMACIÓN IMAGENES DE PRODUCTOS DEL SLIDE */

$(imgProducto[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
$(imgProducto[item]).animate({"top": 30 + "px", "opacity": 1}, 600)


/* ANIMACIÓN TEXTOS DE PRODUCTOS DEL SLIDE */
    /* h1 */
    $(titulo1[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(titulo1[item]).animate({"top": 30 + "px", "opacity": 1}, 600)
    /* h2 */
    $(titulo2[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(titulo2[item]).animate({"top": 30 + "px", "opacity": 1}, 600)
    /* h3 */
    $(titulo3[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(titulo3[item]).animate({"top": 30 + "px", "opacity": 1}, 600)

/* ANIMACIÓN  DE LOS BOTONES "VER PRODUCTO" O "COMPRAR AHORA" DEL SLIDE */
$(BotonProductoSlide[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
$(BotonProductoSlide[item]).animate({"top": 30 + "px", "opacity": 1}, 600)

            




/*============= PAGINACIÓN========================*/


$("#paginacion li").click(function(){


    item = $(this).attr("item")-1;
    /* console.log("item", item); */
    movimientoSlide(item);

})





/*=================== FLECHA AVANZAR SLIDE DERECHA============== */
   
$("#slide #avanzar").click(function(){

    if(item == 3){

        item = 0;

    }else{
        item ++
    }

    movimientoSlide(item);


    
})

/*===================FUNCIÓN AVANZAR ============== */
  

function avanzar(){

    if(item == 3){

        item = 0;

    }else{
        item ++
    }

    movimientoSlide(item);
    


    
}



/*=================== FLECHA AVANZAR SLIDE DERECHA============== */
   
$("#slide #retroceder").click(function(){

    if (item == 0){
        item = 3;

    }else{
        item --
    }

    movimientoSlide(item);

    
})


 

/*=================== MOVIMIENTO SLIDE============== */

function movimientoSlide(item){

    $("#slide ul").animate({"left": item * -100 + "%"}, 1000);

    $("#paginacion li").css({"opacity":.5})

    $(itemPaginacion[item]).css({"opacity":1})

    interrumpirCiclo = true


    /*=====Animación de todos los elementos del slide================*/
    
     $(imgProducto[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
     $(imgProducto[item]).animate({"top": 30 + "px", "opacity": 1}, 600)
   
    


    /*=====ANIMACIÓN TEXTOS DE PRODUCTOS DEL SLIDE============= */
    /* h1 */
    $(titulo1[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(titulo1[item]).animate({"top": 30 + "px", "opacity": 1}, 600)
    /* h2 */
    $(titulo2[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(titulo2[item]).animate({"top": 30 + "px", "opacity": 1}, 600)
    /* h3 */
    $(titulo3[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(titulo3[item]).animate({"top": 30 + "px", "opacity": 1}, 600)

    /* ANIMACIÓN  DE LOS BOTONES "VER PRODUCTO" O "COMPRAR AHORA" DEL SLIDE */
    $(BotonProductoSlide[item]).animate({"top":-10 + "%", "opacity": 0}, 100)
    $(BotonProductoSlide[item]).animate({"top": 30 + "px", "opacity": 1}, 600)

       
    
  


}



/*=====MOVIMIENTO AUTOMÁTICO DEL SLIDE EN BASE A UN INTERVALO DE TIEMPO DADOe================*/

setInterval(function(){

    if(interrumpirCiclo == true){

        interrumpirCiclo = false;

     
    }else{

        avanzar();

    }


},3000)
