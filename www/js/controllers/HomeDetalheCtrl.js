'use strict';

catalogoApp.controller('HomeDetalheCtrl', function($scope, $stateParams) {

    $scope.titulo = "Detalhe";

    $scope.item = {};

    if ($stateParams && $stateParams.homeCtrl[0]) {
        $scope.item = $stateParams.homeCtrl[0];
    }

});