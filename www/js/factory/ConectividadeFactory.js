'use strict';

catalogoApp.factory('ConectividadeFactory', function($rootScope, $cordovaNetwork) {

    return {
        isOnline: function() {
            if (ionic.Platform.isWebView()) {
                return $cordovaNetwork.isOnline();
            } else {
                return navigator.onLine;
            }
        },
        isOffline: function() {
            if (ionic.Platform.isWebView()) {
                return !$cordovaNetwork.isOnline();
            } else {
                return !navigator.onLine;
            }
        },
        isWifi: function() {
            return $cordovaNetwork.getNetwork() == 'wifi';
        },
        startWatching: function() {
            if (ionic.Platform.isWebView()) {

                $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
                    $rootScope.online = true;
                    console.log("webview online", JSON.stringify(networkState));
                });

                $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
                    $rootScope.online = false;
                    console.log("webview offline", JSON.stringify(networkState));
                });

            } else {

                window.addEventListener("online", function(e) {
                    $rootScope.online = true;
                    console.log("device online");
                }, false);

                window.addEventListener("offline", function(e) {
                    $rootScope.online = false;
                    console.log("device offline");
                }, false);

            }
        }

    }
});