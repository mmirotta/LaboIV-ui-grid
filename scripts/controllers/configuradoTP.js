angular
  .module('app')
  .controller('ConfiguradoTP', function($scope, data, i18nService, uiGridConstants, NgMap, $timeout) {
    $scope.verMapa = false;
    $scope.verAmigos = false;
    $scope.DatosAmigos = [];
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

    data.data100().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
    });

    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 45},
        { field: 'avatar', name: 'Avatar', cellTemplate: '<img src="{{COL_FIELD}}" style="width:30px"></img>', width: 45},
        { field: 'foto', name: 'Foto', cellTemplate: '<img src="{{COL_FIELD}}" style="width:20px"></img>', width: 45},
        { field: 'nombre', name: 'nombre', width: 80
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido', width: 80},
        
        { field: 'email', name: 'mail', width:210},
        { field: 'sexo', name: 'sexo', width: 80
        // filtro de busqueda.
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'Male', label: 'Masculino'},
              {value: 'Female', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexoTP'
        },
        { field: 'fechaNacimiento', name: 'Fecha Nac', width: 80
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { field: 'sueldoPretendido', name: 'Sueldo', width: 80},
        { name: 'Amigos', cellTemplate: '<button class="btn btn-primary" ng-click="grid.appScope.amigos(row.entity)">Amigos</button>', width: 80},
        { name: 'Maps', cellTemplate: '<button class="btn btn-primary" ng-click="grid.appScope.localizar(row.entity)">Maps</button>', width: 70}
      ];
    };
    $scope.gridAmigosOptions = {};
    $scope.gridAmigosOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridAmigosOptions.paginationPageSize = 25;
    $scope.gridAmigosOptions.columnDefs = columnAmigosDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridAmigosOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    $scope.gridAmigosOptions.data = $scope.DatosAmigos;

    function columnAmigosDefs () {
      return [
        { field: 'id', name: '#', width: 45},
        { field: 'avatar', name: 'Avatar', cellTemplate: '<img src="{{COL_FIELD}}" style="width:30px"></img>', width: 45},
        { field: 'foto', name: 'Foto', cellTemplate: '<img src="{{COL_FIELD}}" style="width:20px"></img>', width: 45},
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
        { name: 'Maps', cellTemplate: '<button class="btn btn-primary" ng-click="grid.appScope.localizar(row.entity)">Maps</button>', width: 45}
      ];
    };

    $scope.localizar = function(datos){
      $scope.verMapa = true;
      NgMap.getMap().then(function(map) {
        $scope.latitud = datos.latitud;
        $scope.longitud = datos.longitud;
      });
    }

    $scope.amigos = function(datos){
        $timeout(function() {
          console.info(datos.amigos);
          $scope.verAmigos=true;
          $scope.DatosAmigos = datos.amigos;
          console.info($scope.DatosAmigos);
        });
      }
  })
