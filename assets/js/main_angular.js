
angular.module('fia' , [])

	//Definiendo el controlador de la ruta base
	
	.controller('route', ['$scope', function($scope){

		/* =================== Rutas =================== */

		/* ---------- Ruta base ---------- */

		$scope.ruta_base = 'http://localhost:8004/';

	}]);
