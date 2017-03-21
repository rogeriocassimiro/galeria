'use strict';

catalogoApp.run(function($ionicPlatform, $state, $rootScope,
    $ionicPopup, $ionicLoading) {

    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    $rootScope.versao = "0.0.1 gerado em 20/03/2017";

    $rootScope.navegar = function(destino, parametros, options) {
        $state.go(destino, parametros, options);
    };

    $rootScope.showAlert = function(titulo, conteudo) {
        $ionicPopup.alert({
            title: titulo,
            template: conteudo,
            buttons: [{
                text: 'Fechar',
                type: 'button-dark'
            }]
        }).then(function(res) {});
    };

    $rootScope.showLoading = function() {
        $ionicLoading.show({
            template: 'Aguarde ...'
        });
    };

    $rootScope.hideLoading = function() {
        $ionicLoading.hide();
    };


});