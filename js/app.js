// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

        .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('feature', {
        url: "/feature",
        templateUrl: "views/template.html",
        controller: 'FeatureCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('typedJs', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $('.cometyes').hide();
            var $element = $(element);
            dem = $element;
            $element.typed({
                strings: ["ios!", "Android!"],
                startDelay: 20,
                typeSpeed: 100,
                loop: true
            });
        }
    }
});

firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
})

firstapp.filter('serverimage', function() {
    return function(image) {
        if (image && image != null) {
            return adminimage + image;
        } else {
            return undefined;
        }
    };
})

firstapp.directive('youtube', function($sce) {
    return {
        restrict: 'A',
        scope: {
            code: '='
        },
        replace: true,
        template: '<iframe id="popup-youtube-player" style="overflow:hidden;width:100%" width="100%" height="200px" src="{{url}}" frameborder="0" allowscriptaccess="always" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>',
        link: function(scope) {
            scope.$watch('code', function(newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
})
