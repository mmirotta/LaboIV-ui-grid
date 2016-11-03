angular
  .module('app')
  .factory('factoryConServicioBandera', function (Bandera) {
    var objeto = {};
    objeto.nombre = "Factory de Banderas";
    objeto.TraerUnPais = TraerUnPais;
    objeto.TraerTodos = TraerTodos;
    objeto.TraerSoloImagen = TraerSoloImagen;
    return objeto;

    function TraerTodos(){
      return Bandera.TraerTodos();
    }

    function TraerUnPais(pais){
      return Bandera.TraerUnPais(pais);
    }

    function TraerSoloImagen(){
      return Bandera.TraerSoloImagen();
    }
  })//Cierra factory
