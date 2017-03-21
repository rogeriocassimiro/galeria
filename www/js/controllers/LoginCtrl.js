'use strict';

catalogoApp.controller('LoginCtrl', function($scope, $stateParams, ConectividadeFactory,
    $timeout) {

    (function init() {
        $scope.userModel = {
            username: null,
            password: null,
            nome: null,
            token: null
        };
        $timeout(function() {
            form.$setSubmitted(false);
            form.$setPristine();
        });
        //TODO 
        $scope.urlConexao = "";
    })

    /**
     * Acao login
     */
    $scope.logar = function(form) {

        //if (ConectividadeFactory.isOnline()) {
        if (true) {
            if (form.$valid) {
                _loginExecutarRest();
            }
        } else {
            _loginExibirFalhaConexao(form);
        }

    };

    /**
     * Acao login
     */
    function _loginExecutarRest() {
        $scope.showLoading();
        //TODO REST
        $scope.hideLoading();
        $scope.navegar('home');
    };

    /**
     * Acao login
     */
    function _loginExibirFalhaConexao(form) {
        $timeout(function() {
            form.$setSubmitted(false);
            form.$setPristine();
            $scope.showAlert("Falha", "Verifique sua conex&atilde;o com a internet!");
        });
    };

    /**
     * Listener conexao
     */
    // ConectividadeFactory.startWatching();

});