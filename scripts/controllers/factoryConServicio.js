angular
  .module('app')
  .controller('FactoryConServicioCtrl', function($scope, data, Bandera, factoryBandera, factoryConServicioBandera, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    factoryConServicioBandera.TraerUnPais('Argentina').then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
      console.info(rta);
    });

    console.info(factoryBandera);
    console.info(Bandera);
    function columnDefs () {
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
  })
