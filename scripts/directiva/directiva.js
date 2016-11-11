angular
  .module('app')
  .directive('utnSaludo', function() {

    return {template:"Hola mundo!!"};

  }).directive('utnSaludoDos', function() {

    return {
      replace: true,
      restrict: "MEAC", //para que sean comentario elementro atributo y clase
      template:"<h1>Hola mundo!!</h1>"
    };

  }).directive('utnTitulo', function() {

    return {
      replace: true,
      restrict: "E", 
      templateUrl: "templates/templateTitulo.html"
    };

  }).directive('utnTituloParametro', function() {

    return {
      scope:{
        mititulo: '@miparametro'
      },
      replace: true,
      restrict: "E", 
      templateUrl: "templates/templateTitulo.html"
    };

  }).directive('utnBandera', function() {

    return {
      scope:{
        nombrePais: '@nombrepais',
        fotoBandera: '@fotobandera'
      },
      replace: true,
      restrict: "EA", 
      templateUrl: "templates/templateBandera.html"
    };

  }).directive('utnBanderaObj', function() {

    return {
      scope:{
        miBandera: '=banderita'
      },
      replace: true,
      restrict: "EA", 
      templateUrl: "templates/templateBandera.html"
    };

  })





  ;//cierra modulo