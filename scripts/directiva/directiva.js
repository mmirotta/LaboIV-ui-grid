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

  })





  ;//cierra modulo