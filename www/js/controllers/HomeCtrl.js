'use strict';

galeriaApp.controller('HomeCtrl', function($scope, $state) {

    $scope.titulo = "Galeria";

    $scope.listagem = [
        { id: 1, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 2, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 3, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 4, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 5, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 6, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 7, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 8, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 9, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 10, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 11, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 12, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 13, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 14, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 15, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 16, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 17, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 18, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 19, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 20, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 21, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 22, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 23, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 24, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 25, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 26, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 27, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 28, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 29, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 30, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 31, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 32, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 33, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 34, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 35, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' },
        { id: 36, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/1.jpg' },
        { id: 37, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/2.jpg' },
        { id: 38, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/3.jpg' },
        { id: 39, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/4.jpg' },
        { id: 40, texto: 'lorem ipsun lorem ipsun', descricao: 'lorem', path: 'img/5.jpg' }
    ];

    $scope.abrirItem = function(item) {
        $state.go('homeDetalhe', { homeCtrl: [item] });
    };

});