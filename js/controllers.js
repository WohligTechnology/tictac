angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngSanitize', 'ngDialog'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.filterid = 7;

    NavigationService.getallapps(function(data, status) {
        console.log(data);
        $scope.app = data.queryresult;
    }, function(err) {
        if (err)
            console.log(err)
    });

    NavigationService.getalldigitalmarketing(function(data, status) {
        console.log(data);
        $scope.market = data.queryresult;
    }, function(err) {
        if (err)
            console.log(err)
    });

    NavigationService.getallvideo(function(data, status) {
        console.log(data);
        $scope.videos = data.queryresult;
    }, function(err) {
        if (err)
            console.log(err)
    });

    $scope.filterWebsites = function(id) {
        NavigationService.getallwebsite(id, function(data, status) {
            console.log(data);
            $scope.website = data.queryresult;
        }, function(err) {
            if (err)
                console.log(err)
        });
    }

    $scope.filterWebsites(7);

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

})

.controller('FeatureCtrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});
