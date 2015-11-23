// JavaScript Document
var ZoomValue = 1;
var HeightChange  = 1;
var controller = new ScrollMagic.Controller();
var Section8Height = 800;
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

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


firstapp.directive('typedJs', function ($document) {
	return {
		restrict: 'EA',
		replace: false,
		link: function ($scope, element, attrs) {
			$('.cometyes').hide();
			var $element = $(element);
			dem = $element;
			$element.typed({
				strings: ["ios!", "Android!", "windows?", "blackberry :P"],
				startDelay: 20,
				typeSpeed: 100,
				loop: true
			});
		}
	}
});

firstapp.directive('img', function ($compile, $parse) {
	return {
		restrict: 'E',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			if (!attrs.noloading) {
				$element.after("<img src='img/loading.gif' class='loading' />");
				var $loading = $element.next(".loading");
				$element.load(function () {
					$loading.remove();
					$(this).addClass("doneLoading");
				});
			} else {
				$($element).addClass("doneLoading");
			}
		}
	};
});


firstapp.directive('ngScrollDuration', function ($compile, $parse) {
	return {
		restrict: 'EA',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			var animation = {};
			var animationSceneFrom = eval("(" + attrs.ngScrollAnimationFrom + ")");
			var animationSceneTo = eval("(" + attrs.ngScrollAnimationTo + ")");
			var id = attrs.id;
			var pin = attrs.pin;
			var toggleClass = attrs.toggleClass;
			if (attrs.ngScrollTrigger) {
				animation.triggerElement = attrs.ngScrollTrigger;
			}
			animation.duration = attrs.ngScrollDuration * ZoomValue;
			animation.offset = attrs.ngScrollOffset * ZoomValue;
			// build tween
			var tween = TweenMax.fromTo($element, 1, animationSceneFrom, animationSceneTo);

			// build scene
			if (pin) {
				var scene = new ScrollMagic.Scene(animation)
					.setTween(tween)
					.setPin(pin, {
						pushFollowers: false
					})
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);
			} else {
				var scene = new ScrollMagic.Scene(animation)
					.setTween(tween)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);
			}
		}
	};
});



firstapp.filter('serverimage', function () {
	return function (image) {
		if (image && image != null) {
			return adminimage + image;
		} else {
			return undefined;
		}

	};
});


firstapp.filter('extlink', function () {
	return function (link) {
    var link2 = link.substring(0, 4);
		if (link2 == "http") {
			return link
		} else {
			return "http://"+link;
		}

	};
});

firstapp.directive('youtube', function ($sce) {
	return {
		restrict: 'A',
		scope: {
			code: '='
		},
		replace: true,
		template: '<iframe id="popup-youtube-player" style="overflow:hidden;width:100%" width="100%" height="200px" src="{{url}}" frameborder="0" allowscriptaccess="always" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>',
		link: function (scope) {
			scope.$watch('code', function (newVal) {
				if (newVal) {
					scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
				}
			});
		}
	};
});



function changeZoom() {
    var newwidth = $(window).width();
    ZoomValue= newwidth/1349;
    //ZoomValue  = 1;
    $("body").css("zoom",ZoomValue);
    HeightChange = $(window).height()/667;


    var mainHeight = $(window).height();
    section8Height  = $(".section8").height() * ZoomValue;
    var lastHeightDiff = mainHeight - section8Height;
    console.log("HEIGHT");
    console.log(mainHeight);
    console.log(ZoomValue);
    console.log(mainHeight/ZoomValue);
    Section8Height = mainHeight/ZoomValue;
}
changeZoom();
$(document).ready(function() {
  changeZoom();
  $(window).resize(function() {
    changeZoom();
  });
});
