angular
  .module('app', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit',
    'ngMap'
    ]
    )
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('simple');
    $stateProvider

    .state('simple', {
      url: '/simple',
      templateUrl: 'views/simple.html',
      controller:'SimpleCtrl'
    })
    .state('paginada', {
      url: '/paginada',
      templateUrl: 'views/paginada.html',
      controller:'PaginadaCtrl'
    })
    .state('conf', {
      url: '/conf',
      templateUrl: 'views/config.html',
      controller:'ConfCtrl'
    })
    .state('exportar', {
      url: '/exportar',
      templateUrl: 'views/exportar.html',
      controller:'ExportarCtrl'
    })
    .state('modificar', {
      url: '/modificar',
      templateUrl: 'views/modificar.html',
      controller:'ModificarCtrl'
    }).state('ConfiguradoTP', {
      url: '/ConfiguradoTP',
      templateUrl: 'views/ConfiguradoTP.html',
      controller:'ConfiguradoTP'
    })
  });
