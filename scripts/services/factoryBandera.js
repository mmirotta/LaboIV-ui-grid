angular
  .module('app')
  .factory('factoryBandera', function ($http) {
    var url = "http://www.egos27.somee.com/api/bandera";
    var objeto = {};
    objeto.nombre = "Factory de Banderas";
    objeto.TraerTodos = TraerTodos;
    return objeto;

    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }

    function TraerTodos(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
          return respuesta.data.Paises;
        },
        function (error){
          return error;
        }
        );
    }
  })//Cierra factory
