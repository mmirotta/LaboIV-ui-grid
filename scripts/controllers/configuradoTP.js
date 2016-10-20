angular
  .module('app')
  .controller('ConfiguradoTP', function($scope, data, i18nService, uiGridConstants, NgMap) {
    $scope.googleMapsUrl="";

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
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
        
        { field: 'email', name: 'mail'},
        { field: 'sexo', name: 'sexo'
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
        { field: 'fechaNacimiento', name: 'Fecha Nac'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { field: 'sueldoPretendido', name: 'Sueldo'},
        { field: 'amigos', name: 'amigos'},
        { field: 'aplicaciones', name: 'aplicaciones'},
        { name: 'Maps', cellTemplate: '<button class="btn btn-primary" ng-click="grid.appScope.localizar(row.entity)">Maps</button>', width: 45}
      ];
    };

    $scope.localizar = function(datos){
          NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
    }
  })
