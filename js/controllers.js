angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngSanitize', 'ngDialog'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.filterid = 7;

    $scope.appsPageNo = 0;
    $scope.dmPageNo = 0;
    $scope.videosPageNo = 0;
    $scope.websitePageNo = 1;

    $scope.app = [];
    $scope.market = [];
    $scope.videos = [];
    $scope.website = [];

    $scope.loadMoreApps = function(pageno) {
        NavigationService.getallapps(pageno, function(data, status) {
            console.log(data);
            _.each(data.queryresult, function(n) {
                $scope.app.push(n);
            });
            $scope.allapps = _.chunk($scope.app, 4);
        }, function(err) {
            if (err)
                console.log(err)
        });
    }

    $scope.getMoreApps = function() {
        $scope.loadMoreApps(++$scope.appsPageNo);
    }
    $scope.getMoreApps();

    $scope.loadMoreDM = function(pageno) {
        NavigationService.getalldigitalmarketing(pageno, function(data, status) {
            console.log(data);
            _.each(data.queryresult, function(n) {
                $scope.market.push(n);
            });
            $scope.allmarket = _.chunk($scope.market, 4);
        }, function(err) {
            if (err)
                console.log(err)
        });
    }

    $scope.getMoreDM = function() {
        $scope.loadMoreDM(++$scope.dmPageNo);
    }
    $scope.getMoreDM();

    $scope.loadMoreVideos = function(pageno) {
        NavigationService.getallvideo(pageno, function(data, status) {
            console.log(data);
            _.each(data.queryresult, function(n) {
                $scope.videos.push(n);
            });
            $scope.allvideos = _.chunk($scope.videos, 3);
        }, function(err) {
            if (err)
                console.log(err)
        });
    }

    $scope.getMoreVideos = function() {
        $scope.loadMoreVideos(++$scope.videosPageNo);
    }
    $scope.getMoreVideos();

    $scope.filterWebsites = function(id) {
        $scope.websitePageNo = 1;
        NavigationService.getallwebsite(id, 1, function(data, status) {
            console.log(data);
            $scope.website = data.queryresult;
            $scope.allwebsites = _.chunk(data.queryresult, 4);
        }, function(err) {
            if (err)
                console.log(err)
        });
    }
    $scope.filterWebsites(7);

    $scope.getMoreWebsites = function(id) {
        NavigationService.getallwebsite(id, ++$scope.websitePageNo, function(data, status) {
            console.log(data);
            _.each(data.queryresult, function(n) {
                $scope.website.push(n);
            });
            $scope.allwebsites = _.chunk($scope.website, 4);
            console.log($scope.allwebsites);
        }, function(err) {
            if (err)
                console.log(err)
        });
    }

    // $scope.website = [{
    //     title: 'ting',
    //     img: 'img/website/1.jpg'
    // }, {
    //     title: 'travelibro',
    //     img: 'img/website/2.jpg'
    // }, {
    //     title: 'stup consultants',
    //     img: 'img/website/3.jpg'
    // }, {
    //     title: 'eastern travels',
    //     img: 'img/website/4.jpg'
    // }, {
    //     title: 'ting',
    //     img: 'img/website/1.jpg'
    // }, {
    //     title: 'travelibro',
    //     img: 'img/website/2.jpg'
    // }, {
    //     title: 'stup consultants',
    //     img: 'img/website/3.jpg'
    // }, {
    //     title: 'eastern travels',
    //     img: 'img/website/4.jpg'
    // }];

    // $scope.app = [{
    //     title: 'saraswat bank',
    //     img: 'img/Blackiphone.png'
    // }, {
    //     title: 'travelibro',
    //     img: 'img/Blackiphone.png'
    // }, {
    //     title: 'pickle',
    //     img: 'img/Blackiphone.png'
    // }, {
    //     title: 'moviews',
    //     img: 'img/Blackiphone.png'
    // }, {
    //     title: 'tata aig',
    //     img: 'img/Blackiphone.png'
    // }];


    // $scope.market = [{
    //     title: 'saraswat bank',
    //     img: 'img/market/1.jpg'
    // }, {
    //     title: 'travelibro',
    //     img: 'img/market/2.jpg'
    // }, {
    //     title: 'pickle',
    //     img: 'img/market/3.jpg'
    // }, {
    //     title: 'moviews',
    //     img: 'img/market/4.jpg'
    // }, {
    //     title: 'tata aig',
    //     img: 'img/market/5.jpg'
    // }, {
    //     title: 'pickle',
    //     img: 'img/market/6.jpg'
    // }, {
    //     title: 'moviews',
    //     img: 'img/market/7.jpg'
    // }, {
    //     title: 'tata aig',
    //     img: 'img/market/8.jpg'
    // }];

    // $scope.videos = [{
    //     title: 'travelibro',
    //     img: 'img/videos/1.jpg'
    // }, {
    //     title: 'lifpix',
    //     img: 'img/videos/2.jpg'
    // }, {
    //     title: 'alacris preschool',
    //     img: 'img/videos/3.jpg'
    // }];


    $scope.showVideos = function() {
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-videos.html'
        });
    };

    $scope.showMarketing = function() {
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-digitalmarketing.html'
        });
    };

    $scope.showApp = function() {
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-app.html'
        });
    };

    $scope.showWebsite = function() {
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-website.html'
        });
        $scope.filterWebsites(7);
    };

		$scope.gotoBottom = function () {
      $('html,body').animate({
        scrollTop: $(document).height()
      }, 1000);

		};
		$scope.gotoTop = function () {

			$('html,body').animate({
				scrollTop: 0
			}, 1000);

		};

})

.controller('FeatureCtrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});
