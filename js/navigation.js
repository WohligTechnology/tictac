var adminbase = "http://wohlig.co.in/tingdigitalbackend/";
var adminurl = adminbase + "index.php/json/";
var adminimage = adminbase + "uploads/";
var adminhauth = adminbase + "index.php/hauth/";
var imgpath = adminimage + "image?name=";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        link: "#/home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            link: "#/home"
        }]
    }, {
        name: "Features",
        active: "",
        link: "#/feature",
        classis: "active",
        subnav: []
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
        getallapps: function(callback, err) {
            return $http.get(adminurl + 'getallapps', {
                withCredentials: true
            }).success(callback).error(err);
        },
        getalldigitalmarketing: function(callback, err) {
            return $http.get(adminurl + 'getalldigitalmarketing', {
                withCredentials: false
            }).success(callback).error(err);
        },
        getallvideo: function(callback, err) {
            return $http.get(adminurl + 'getallvideo', {
                withCredentials: false
            }).success(callback).error(err);
        },
        getallwebsite: function(id, callback, err) {
            return $http.get(adminurl + 'getallwebsite?id=' + id, {
                withCredentials: false
            }).success(callback).error(err);
        }
    }
});
