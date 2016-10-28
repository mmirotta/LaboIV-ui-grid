angular
  .module('app')
  .controller('BanderaCtrl', function($scope, data, Bandera, i18nService, uiGridConstants,NgMap) {
    console.info(Bandera);
    //var datosBandera = Bandera.TraerTodos();
    
    Bandera.TraerTodos().then(
      function(respuesta){
        $scope.gridOptionsTodasBanderas.data = respuesta;
      },
      function(error){

      }
    );

    Bandera.TraerUnPais("Argentina").then(
      function(respuesta){
        $scope.gridOptionsUnaBandera.data = respuesta;
      },
      function(error){

      }
    );

    Bandera.TraerSoloImagen().then(
      function(respuesta){
        $scope.gridOptionsSoloFotos.data = respuesta;
      },
      function(error){

      }
    );


    $scope.titulo = "Banderas";
    // Objeto de configuracion de la grilla.
    $scope.gridOptionsTodasBanderas = {};
    $scope.gridOptionsTodasBanderas.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptionsTodasBanderas.paginationPageSize = 25;
    $scope.gridOptionsTodasBanderas.columnDefs = columnDefsTodasBanderas();
    // Activo la busqueda en todos los campos.
    $scope.gridOptionsTodasBanderas.enableFiltering = true;

    function columnDefsTodasBanderas () {
      return [
        { field: 'Nombre', name: 'Nombre', width: 120
          ,enableFiltering: false
        },
        { field: 'Bandera',  name: 'Bandera', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 120
          ,type: 'text'
          ,enableFiltering: false
        },
        { field: 'BanderaChica',  name: 'BanderaChica', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 140
          ,type: 'text'
          ,enableFiltering: false
        }        
      ];
    }

    $scope.gridOptionsUnaBandera = {};
    $scope.gridOptionsUnaBandera.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptionsUnaBandera.paginationPageSize = 25;
    $scope.gridOptionsUnaBandera.columnDefs = columnDefsUnaBandera();
    // Activo la busqueda en todos los campos.
    $scope.gridOptionsUnaBandera.enableFiltering = true;

    function columnDefsUnaBandera () {
      return [
        { field: 'Nombre', name: 'Nombre', width: 120
          ,enableFiltering: false
        },
        { field: 'Bandera',  name: 'Bandera', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 120
          ,type: 'text'
          ,enableFiltering: false
        },
        { field: 'BanderaChica',  name: 'BanderaChica', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 140
          ,type: 'text'
          ,enableFiltering: false
        }        
      ];
    }

    $scope.gridOptionsSoloFotos = {};
    $scope.gridOptionsSoloFotos.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptionsSoloFotos.paginationPageSize = 25;
    $scope.gridOptionsSoloFotos.columnDefs = columnDefsSoloFotos();
    // Activo la busqueda en todos los campos.
    $scope.gridOptionsSoloFotos.enableFiltering = true;

    function columnDefsSoloFotos () {
      return [
        { field: 'Bandera',  name: 'Bandera', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 120
          ,type: 'text'
          ,enableFiltering: false
        }
      ];
    }
  })
