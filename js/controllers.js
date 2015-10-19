angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngSanitize'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('FeatureCtrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
})
.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
})

;