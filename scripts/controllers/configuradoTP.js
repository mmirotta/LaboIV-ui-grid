angular
  .module('app')
  .controller('ConfiguradoTP', function($scope, data, i18nService, uiGridConstants,NgMap) {
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;


 $scope.GpsAmigos=function(row){
   $scope.Lat = parseFloat(row.latitud);
   $scope.Log = parseFloat(row.logitud);
    $scope.avatar=row.avatar;
   $scope.customIcon = {
        "scaledSize": [32, 32],
        "url":  $scope.avatar
    };
$scope.listado = row.amigos;
$scope.listado.forEach(function(hola){
hola.avatar={
        "scaledSize": [32, 32],
        "url":  hola.avatar
    };


});


$scope.listadoAmigos = $scope.listado;
console.info($scope.listadoAmigos);
$scope.map=false;
$scope.amigos=true;

 NgMap.getMap().then(function (map) {
          //console.log(map.getBounds().toString());
      });

}

    $scope.MostrarData= function(row){
        console.info("Datos",row);
      console.info("Longitud",row.logitud);
      console.info("Latitud", row.latitud);
      $scope.map = true;
      $scope.Lat = parseFloat(row.latitud);
      $scope.Log = parseFloat(row.logitud);
      $scope.Nombre = row.nombre;
      $scope.avatar=row.avatar;
$scope.customIcon = {
        "scaledSize": [32, 32],
        "url":  $scope.avatar
    };

    console.info($scope.customIcon);

      NgMap.getMap().then(function (map) {
          //console.log(map.getBounds().toString());
      });
    

};

   $scope.Amigos= function(data){
  
    $scope.friend = true;
      $scope.Listado = data.amigos;
      console.info($scope.Listado);
      //$scope.titulo = "Amigos";
      // Objeto de configuracion de la grilla.
      $scope.gridAmigos = {};
      $scope.gridAmigos.paginationPageSizes = [25, 50, 75];
      // Configuracion de la paginacion
      $scope.gridAmigos.paginationPageSize = 25;
      $scope.gridAmigos.columnDefs = columAmigos();
      // Activo la busqueda en todos los campos.
      $scope.gridAmigos.enableFiltering = true;
      // Configuracion del idioma.
      i18nService.setCurrentLang('es');

      $scope.gridAmigos.data = $scope.Listado;


    $scope.MostrarData= function(row){
      console.info("Latitud",row.latitud);
      console.info("Longitud",row.logitud);
      $scope.lat=row.latitud;
      $scope.lon=row.logitud;
      $scope.avatar=row.avatar;
      $scope.nombre=row.nombre;
           $scope.avatar=row.avatar;
$scope.customIcon = {
        "scaledSize": [150, 150],
        "url":  $scope.avatar
    };

    }



 $scope.Mapa=function (row){
      console.info("Puto",row);
      console.info("Longitud",row.logitud);
      console.info("Latitud", row.latitud);
      $scope.map = true;
      $scope.Lat = parseFloat(row.latitud);
      $scope.Log = parseFloat(row.logitud);
     $scope.avatar=row.avatar;
      $scope.Nombre = row.nombre;
$scope.customIcon = {
        "scaledSize": [150, 150],
        "url":  $scope.avatar
    };
      NgMap.getMap().then(function (map) {
          //console.log(map.getBounds().toString());
      });
}


};


    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    data.data100().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
      console.info(rta);
    });

    console.log(uiGridConstants);

  function columAmigos () {
  return [
        { field: 'id', name: '#', width: 55},
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
      
        
        { field: 'fechaNacimiento', width: 200, name: 'fechaNacimiento'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { field: 'avatar', name: 'avatar', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" },
        { field: 'foto', name: 'foto', cellTemplate:"<img width=\"15px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" },
        { cellTemplate:"<button ng-click='grid.appScope.Mapa(row.entity)'>Mostrar", name: "Mapa"}
      ];
    }


    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 50},
        
        { field: 'nombre', name: 'nombre',width: 100
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido', width: 100},
        { field: 'email', name: 'mail' ,width: 100},
        { field: 'sexo', name: 'sexo', width: 100
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
        { field: 'fechaNacimiento', name: 'fechaNacimiento', width: 150
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { field: 'avatar',  name: 'avatar', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 70
          ,type: 'text'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
         { field: 'foto',  name: 'foto', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 70
          ,type: 'text'
        },
        { field: 'sueldoPretendido',  name: 'sueldoPretendido',width: 180 
          ,type: 'text'
        },
        { width: 100, cellTemplate:"<button ng-Click='grid.appScope.MostrarData(row.entity)'>MOSTRAR", name:"MostrarLongitud"
         
        } ,{ width: 100, cellTemplate:"<button ng-Click='grid.appScope.Amigos(row.entity)'>Mostrar Amigos", name:"MostrarAmigos"
         
        },{ width: 100, cellTemplate:"<button ng-Click='grid.appScope.GpsAmigos(row.entity)'>GPS Amigos", name:"GpsAmigos"
         
        }
         


      ];
    }
  })
