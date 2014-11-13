angular.module('bones', ['btford.socket-io']) 
    .controller('main', function($scope, $rootScope) { 
    }).run(function() {}).factory('mysocket', function (socketFactory) {
        var myIoSocket = io.connect('http://localhost:3000/'),
            socket = socketFactory({ ioSocket: myIoSocket });
        return socket;
    }).controller('main', function(mysocket, $sce) { 
        mysocket.addListener("wikipedia_hose", function (data) {
            console.log("wikipedia", data);
        });
        mysocket.addListener("twitter_hose", function (data) {
            console.log("twitter", data);
        });
    });
