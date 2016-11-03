angular
  .module('app')
  .factory('factoryRutas', function () {
    var objeto = {};
    objeto.nombre = "Factory de Rutas";
    objeto.ApiBanderas = "http://www.egos27.somee.com/api/bandera";
    return objeto;
  })//Cierra factory
