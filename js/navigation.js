var adminbase = "http://wohlig.co.in/tingdigitalbackend/";
var adminurl = adminbase + "index.php/json/";
var adminimage = adminbase + "uploads/";
var adminhauth = adminbase + "index.php/hauth/";
var imgpath = adminimage + "image?name=";

var navigationservice = angular.module('navigationservice', ['ngDialog'])

.factory('NavigationService', function($http,ngDialog, $location,$anchorScroll) {
    var navigation = [{
        name: "website",
        classis: "active",
        function: function() {
            ngDialog.open({
                template: 'views/content/modal-website.html'
            });
        }
    }, {
        name: "apps",
        active: "",
        classis: "active",
        function: function() {
            ngDialog.open({
                template: 'views/content/modal-app.html'
            });
        }
    }, {
        name: "digital marketing",
        active: "",
        classis: "active",
        function: function() {
            ngDialog.open({
                template: 'views/content/modal-digitalmarketing.html'
            });
        }
    }, {
        name: "videos",
        active: "",
        classis: "active",
        function: function() {
            ngDialog.open({
                template: 'views/content/modal-videos.html'
            });
        }
    }, {
        name: "hello",
        active: "",
        classis: "active",
        function:function () {
          // set the location.hash to the id of
          // the element you wish to scroll to.
          var targetTo = $("#hello").offset().top
          $('html,body').animate({
            scrollTop: targetTo
          }, 1000);

        }
    }, {
        name: "go back",
        active: "",
        link: "http://tingdigital.com.au",
        classis: "active",
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        getallapps: function(pageno, callback, err) {
            return $http.get(adminurl + 'getallapps?pageno=' + pageno + '&maxrow=' + 100, {
                withCredentials: true
            }).success(callback).error(err);
        },
        getalldigitalmarketing: function(pageno, callback, err) {
            return $http.get(adminurl + 'getalldigitalmarketing?pageno=' + pageno + '&maxrow=' + 100, {
                withCredentials: false
            }).success(callback).error(err);
        },
        getallvideo: function(pageno, callback, err) {
            return $http.get(adminurl + 'getallvideo?pageno=' + pageno + '&maxrow=' + 100, {
                withCredentials: false
            }).success(callback).error(err);
        },
        getallwebsite: function(id, pageno, callback, err) {
            return $http.get(adminurl + 'getallwebsite?id=' + id + '&pageno=' + pageno + '&maxrow=' + 100, {
                withCredentials: false
            }).success(callback).error(err);
        }
    }
});
