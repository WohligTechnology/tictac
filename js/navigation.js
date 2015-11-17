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
