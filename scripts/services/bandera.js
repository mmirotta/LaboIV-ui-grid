angular
  .module('app')
  .service('Bandera', function ($http, factoryRutas) {
    this.Nombre = "Servicio Bandera";
    this.TraerSoloImagen = TraerSoloImagen;
    this.TraerUnPais = TraerUnPais;
    var url = factoryRutas.ApiBanderas;

    function TraerSoloImagen(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
          var imagenes = [];
          var datos = respuesta.data.Paises;

          datos.forEach(function(bandera){
            imagenes.push({"Bandera": bandera.Bandera});
          }); //como objeto

          //datos.forEach(function(bandera){
          //  imagenes.push(bandera.Bandera);
          //}); como string 

          // for (var i = 0; i < datos.length; i++) {
          //   imagenes.push(datos[i].Bandera);
          // };

          return imagenes;
        },
        function (error){
          return error;
        }
        );
    }

    function TraerUnPais(pais){
      return $http.get(TraerUrl(pais)).then(
        function (respuesta){
          return respuesta.data;
        },
        function (error){
          return error;
        }
        );
    }

    //Esta funcion es privada
    function TraerUrl(parametro){
      if (!parametro)
        return url;
      else
        return url + "/" + parametro;
    }

    this.TraerTodos =function(){
      return $http.get(TraerUrl()).then(
        function (respuesta){
          return respuesta.data.Paises;
        },
        function (error){
          return error;
        }
        );
    }

  })//Cierra Servicio
